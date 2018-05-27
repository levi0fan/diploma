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

app.listen(port, function() {
    console.log(`Server runs on http://localhost:${port}`);
});
