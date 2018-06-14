const express = require('express');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const router = express.Router();

const data = require('../data');

function send(content, callback) {
    const transporter = nodemailer.createTransport(smtpTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secureConnection: true,
        auth: {
            user: 'noel.good@inbox.ru',
            pass: 'Cnfhsqgfhjkm1',
        }
    }));

    const mailOptions = {
        from: 'noel.good@inbox.ru',
        to: 'levi0fan@mail.ru',
        subject: 'Обратная связь портала "Информатика"',
        html: content,
    };

    transporter.sendMail(mailOptions, function(err, info) {
        transporter.close();
        if (err) {
            callback(err, info);
        } else {
            callback(null, info);
        }
    });
}

const template = (data) => `
    <h2>Сообщение от пользователя по имени ${data.name}</h2>
    <div>Email: <a href="mailto:${data.email}">${data.email}</a></div>
    <br>
    <div>${data.message}</div>
`;

const logTemplate = (data) => `
    Сообщение от пользователя по имени ${data.name}
    Email: ${data.email}

    ${data.message}
`;


router.get('/', function(req, res) {
    res.render('feedback', data.feedback);
});

router.post('/', function(req, res) {
    const form = req.body;
    console.log('Form\n', logTemplate(form));

    send(template(form), (err, info) => {
        console.log('INFO', info);
        if (err) console.log('ERROR', err);

        const params = data.feedback;

        if (err) {
            params.message = `${form.name}, к сожалению, что-то пошло не так. Попробуйте позже.`
        } else {
            params.message = `${form.name}, благодарим вас за проявленное к проекту внимание!`
        }

        res.render('feedbackResult', data.feedback);
    });
});

module.exports = router;
