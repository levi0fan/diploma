const express = require('express');
const app = express();

const data = require('./data');
const port = 8080;

app.set('view engine', 'pug');

// Get info
app.get('/', function(req, res) {
    res.render('main', data.main);
});

// About
app.get('/about', function(req, res) {
    res.render('about', data.about);
});

// Location
app.get('/location', function(req, res) {
    res.render('main', data.location);
});

app.listen(port, function() {
    console.log(`Server runs on http://localhost:${port}`);
});
