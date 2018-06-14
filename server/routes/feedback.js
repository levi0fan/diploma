const express = require('express');
const router = express.Router();

const data = require('../data');

router.get('/', function(req, res) {
    res.render('feedback', data.feedback);
});

router.post('/', function(req, res) {
    console.log('form', req.body);

    res.render('feedbackResult', data.feedback);
});

module.exports = router;
