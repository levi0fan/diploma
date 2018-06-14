const express = require('express');
const router = express.Router();

const data = require('../data');

router.post('/:quiz/result', function(req, res) {
    const quiz = req.params.quiz;
    const params = data.quizes[quiz];
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
        theory: params.tabTitle,
        styleFile: 'result',
        title: 'Результаты теста по теме ' + '"Системы счисления"',
        name: params.name,
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

    res.render('result', result);
});

router.get('/:quiz', function(req, res) {
    const quiz = req.params.quiz;
    const params = data.quizes[quiz];
    res.render('quiz', params);
});

router.get('/', function(req, res) {
    res.render('list', data.practice);
});

module.exports = router;