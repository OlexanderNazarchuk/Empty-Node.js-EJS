require('dotenv').load();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const app = express();

const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => res.render('pages/index'));
// .post('/webhook/sendgrid-event', (req, res) => contact_us.webhook(req, res));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));


if (process.env.APP_DEBUG == 'true') {
    app.get('/dev', (req, res) => res.render('pages/dev'))
}