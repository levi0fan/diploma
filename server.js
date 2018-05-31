const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const data = require('./data');
const port = 8080;

app.set('view engine', 'pug');

app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.post('/practice/:quiz/result', function(req, res) {
    const quiz = req.params.quiz;
    const params = data.quizes[quiz];
    console.log('res.body', req.body);
    const answers = req.body;
    const propList = Object.keys(answers);

    if (propList.length !== params.questions.length) {
        res.send(`
            <h2>Парень, ты не меня пытаешься обмануть. Ты себя пытаешься обмануть!</h2>
            Давай еще раз заполни ответы в тесте на раздел <a href="/practice/${params.name}">${params.tabTitle}</a>
        `);
    }

    const result = {
        tabTitle: 'Результат теста ' + params.tabTitle,
        styleFile: 'result',
        title: 'Результаты теста по теме ' + '"Системы счисления"',
    };

    result.questions = params.questions.map((quest, idx) => {
        const selected = answers[`question_${idx}`];
        return {
            text: quest.text,
            selected,
            selectedText: (quest.answers.find(quest => quest.code === selected)).text,
            correct: quest.correct,
        };
    });

    console.log('result', result);

    res.render('result', result);
}); 

app.get('/practice/:quiz', function(req, res) {
    const quiz = req.params.quiz;
    const params = data.quizes[quiz];
    res.render('quiz', params);
});

app.get('/practice', function(req, res) {
    res.render('list', data.practice);
});

app.listen(port, function() {
    console.log(`Server runs on http://localhost:${port}`);
});
