const express = require('express');
const router = express.Router();

const data = require('../data');

router.get('/:name', function(req, res) {
    const name = req.params.name;
    const params = data.themes[name];
    res.render('theme', params);
});

router.get('/', function(req, res) {
    res.render('list', data.theory);
});

module.exports = router;
