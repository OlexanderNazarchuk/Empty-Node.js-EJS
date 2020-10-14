const sgMail = require('@sendgrid/mail');
const validator = require("email-validator");
const black_list = require('./domains_helper/black-list.json');
const white_list_toplevel = require('./domains_helper/white-list-topdomain.json');
const reCaptchav3 = require("./reCaptcha");
const fileUpload = require('express-fileupload');

/******************************************************
 fieldsRules:[{ field, rules:[{name, value}] }]
 rule.name: enum -> {'required', 'email'}
 rule.value:
 required -> int, min 1;
 email -> no value;
 *******************************************************/
function validate(data, fieldsRules = []) {
    let res = [];

    fieldsRules.forEach((fieldRules) => {
        const rules = fieldRules.rules;
        for (let i = 0; i < rules.length; i++) {
            if (rules[i].name == 'required') {
                if (data[fieldRules.field].length < rules[i].value) {
                    res.push({
                        name: fieldRules.field,
                        value: rules[i].name
                    });
                    break;
                }
            } else if (rules[i].name == 'email') {
                if (!validator.validate(data[fieldRules.field])) {
                    res.push({
                        name: fieldRules.field,
                        value: rules[i].name
                    });
                    break;
                }
            }
        }
    });

    return res;
}

function inBlackList(domain) {
    let res = false;

    black_list.some((el) => {
        let i = domain.lastIndexOf(el);
        if (i != -1 && (i + el.length) == domain.length) {
            res = true;
        }
    });

    return res;
}

function inWhitelist(domain) {
    let res = false;
    const TopDomain = domain.slice(domain.lastIndexOf('.'));

    if (white_list_toplevel.indexOf(TopDomain) != -1)
        res = true;
    return res;
}

function sendEmailToUser(data) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    subject = 'Confirmation from Intobi';
    var html = "";
    switch (data.contact_type) {
        case 'project':
            html = `
                Dear ${data.name},<br>
                <br>
                Thank you for your inquiry! We will review your request regarding IT development and answer within 24 hours.<br>
                <br>
                Cheers,<br>
                Intobi Team
                `;
            break;
        case 'career':
            html = `
                Dear ${data.name},<br>
                <br>
                Thank you for your inquiry! We will review your request regarding Job application and answer within 24 hours.<br>
                <br>
                Cheers,<br>
                Intobi Team
                `;
            break;
        case 'other':
            html = `
                Dear ${data.name},<br>
                <br>
                Thank you for your inquiry! We will review your request and answer within 24 hours.<br>
                <br>
                Cheers,<br>
                Intobi Team
                `;
            break;
        case 'build':
            html = `
                Dear ${data.first_name},<br>
                <br>
                Thank you for your inquiry! We will review your request and answer within 24 hours.<br>
                <br>
                Cheers,<br>
                Intobi Team
                `;
            break;
    }

    if (html == "") {
        return new Promise((resolve, reject) => {resolve()});
    }

    const msg = {
        to: data.email,
        from: process.env.SENDGRID_SEND_FROM,
        subject: subject,
        html: html,
    };
    return new Promise((resolve, reject) => {
        sgMail.send(msg)
            .then(res => {
                resolve(res)
            })
            .catch(error => {
                console.log("sgMail error");
                console.log(error);
                console.log(error.response.body.errors)
                reject(error);
            });
    })
}
function sendEmailToAdmin(data, file = null) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    let html;
    let subject;
    let attachments = [];

    switch (data.contact_type) {
        case 'project':
            subject = 'Intobi IT development';
            html = `
                email: ${data.email}<br>
                name: ${data.name}<br>
                company: ${data.company}<br>
                message: ${data.your_message}<br>
                nda: ${data.nda == undefined ? 'false' : 'true'}<br>
                `;
            if (file != undefined && file != null) {
                attachments = [
                    {
                        content: file.data.toString('base64'),
                        filename: file.name,
                        type: '*/*',
                        disposition: 'attachment',
                        contentId: 'mytext'
                    }
                ]
            }
            break;
        case 'career':
            subject = 'Intobi Job application';
            html = `
                email: ${data.email}<br>
                name: ${data.name}<br>
                company: ${data.company}<br>
                reason: ${data.your_message}<br>
                `;
            break;
        case 'other':
            subject = 'Intobi Other';
            html = `
                email: ${data.email}<br>
                name: ${data.name}<br>
                message: ${data.your_message}<br>
                `;
            break;
        case 'build':
            subject = 'Web Inquiry: New Contact' + ' - build';
            html = `
                email: ${data.email}<br>
                first name: ${data.first_name}<br>
                last name: ${data.last_name}<br>
                message: ${data.message}<br>
                company: ${data.company}<br>
                nda: ${data.nda == undefined ? 'false' : 'true'}<br>
                `;
            break;
        case 'ebook':
        subject = 'eBook Downloaded';
        html = `
            email: ${data.email}<br> 
            `;

            if (file != undefined && file != null) {
                attachments = [
                    {
                        content: file.data.toString('base64'),
                        filename: file.name,
                        type: '*/*',
                        disposition: 'attachment',
                        contentId: 'mytext'
                    }
                ]
            }
            break;
    }

    const msg = {
        from: process.env.SENDGRID_SEND_FROM,
        to: process.env.SENDGRID_SEND_TO,
        subject: subject,
        html: html,
        attachments: attachments
    };
    return new Promise((resolve, reject) => {
        sgMail.send(msg)
            .then(res => {
                resolve(res)
            })
            .catch(error => {
                console.log("sgMail error");
                console.log(error);
                console.log(error.response.body.errors)
                reject(error);
            });
    })
}

module.exports = {
    main: async function (req, res) {
        let response = {
            status: 200,
            errors: []
        };
        try {
            let file = req.files == undefined ? null : req.files.file;
            console.log(req.body);
            let captchaVerify = await reCaptchav3.verify(req.body.captcha, process.env.GOOGLE_SCORE_LIMIT)
                .then((result) => {
                    return result;
                });
            {

                // let validateRules = [{
                //         field: 'email',
                //         rules: [{
                //             name: 'required',
                //             value: 1
                //         }, {
                //             name: 'email'
                //         }]
                //     },
                //     {
                //         field: 'message',
                //         rules: [{
                //             name: 'required',
                //             value: 1
                //         }]
                //     },
                // ];

                // response.errors = validate(req.body, validateRules);
                // const isErrors = response.errors.length != 0;
                // response.status = isErrors ? 400 : response.status;

                // if (!isErrors) {
                //     const emailDomain = req.body.email.split('@')[1];
                //     if (!inBlackList(emailDomain) && inWhitelist(emailDomain) && captchaVerify) {
            }
            if (captchaVerify) {
                await sendEmailToAdmin(req.body, file)
                    .catch(e => {
                    });
                await sendEmailToUser(req.body)
                    .then((r) => {

                    })
                    .catch((e) => {
                        response.errors.push({
                            name: 'GLOBAL',
                            value: ""
                        });
                        response.errors.push({
                            name: 'GLOBAL',
                            value: "sgError"
                        });
                        response.status = 400;
                    });
            }
            //     }
            // }
            res.status(response.status).send(response);
        } catch (e) {
            console.log(e);
            response.errors.push({
                name: 'GLOBAL',
                value: ""
            });
            response.status = 400;
            res.status(response.status).send(response);
        }
    },
    webhook: async function (req, res) {
        res.status(200).send();

    }
};
