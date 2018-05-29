const express = require('express');
const app = express();

const data = require('./data');
const port = 8080;

app.set('view engine', 'pug');

app.use(express.static('static'));

// Get info
app.get('/', function(req, res) {
    res.render('main', data.main);
});

app.get('/theory/:name', function(req, res) {
    const name = req.params.name;
    const params = data.themes[name];
    res.render('theme', params);
});

app.get('/theory', function(req, res) {
    res.render('list', data.theory);
});

app.listen(port, function() {
    console.log(`Server runs on http://localhost:${port}`);
});
