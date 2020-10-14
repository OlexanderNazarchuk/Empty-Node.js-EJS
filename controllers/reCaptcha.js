const fetch = require("node-fetch");

module.exports = {
    verify: async function (captcha) {
        let result = false;

        result = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${ process.env.GOOGLE_SECRET_KEY }&response=${ captcha }`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                return response.json()
            })
            .then((jsonData) => {
                return jsonData.success;
            })
            .catch((error) => {
                console.log(error);
                return false;
            });
        return result;
    }
}