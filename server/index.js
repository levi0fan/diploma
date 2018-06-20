const express = require('express');
const app = express();
const bodyParser = require('body-parser');


function server() {
    const port = 8080;
    const data = require('./data');
    const routes = require('./routes');
    
    app.set('view engine', 'pug');
    
    app.use(express.static('static'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    // Main page
    app.get('/', function(req, res) {
        res.render('main', data.main);
    });
    
    app.use('/theory', routes.theory);
    app.use('/feedback', routes.feedback);
    app.use('/practice', routes.practice);
    app.use('/media', routes.media);
    
    app.listen(port, function() {
        console.log(`Server runs on http://localhost:${port}`);
    });
}

module.exports = server;
