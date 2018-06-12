const params = {
    tabTitle: 'Логика и алгоритмы',
    styleFile: 'quiz',
    name: 'logalg',
    title: 'Практика по теме "Логика и алгоритмы"',
    questions: [
        {
            text: 'Как работает логическое отрицание?',
            answers: [
                {
                    text: 'Переводит 1 в 0',
                    code: 'syst_1',
                },
                {
                    text: 'Переводит 0 в 1',
                    code: 'syst_2',
                },
                {
                    text: 'Делает значение обратным',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_3',
        },
        {
            text: 'Математическое название лгического отрицания -',
            answers: [
                {
                    text: 'Дизъюнкция',
                    code: 'syst_1',
                },
                {
                    text: 'Инверсия',
                    code: 'syst_2',
                },
                {
                    text: 'Инстанция',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_2',
        },
        {
            text: 'Функция Вебба имеет значение -',
            answers: [
                {
                    text: 'ИЛИ-НЕ',
                    code: 'syst_1',
                },
                {
                    text: 'И-НЕ',
                    code: 'syst_2',
                },
                {
                    text: 'ИЛИ',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Значение Х=1, У=0 чему равна конъюнкция Х?',
            answers: [
                {
                    text: '1',
                    code: 'syst_1',
                },
                {
                    text: '0',
                    code: 'syst_2',
                },
                {
                    text: 'Не знаю',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_2',
        },
        {
            text: 'Чему равна инверсия Х=0?',
            answers: [
                {
                    text: '1',
                    code: 'syst_1',
                },
                {
                    text: '0',
                    code: 'syst_2',
                },
                {
                    text: 'Не знаю',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: '¬(ХvУ), где Х=1, а У=0',
            answers: [
                {
                    text: '1',
                    code: 'syst_1',
                },
                {
                    text: '0',
                    code: 'syst_2',
                },
                {
                    text: '2',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_2',
        },
        {
            text: '¬Х v ¬У, где Х=0, У=0',
            answers: [
                {
                    text: '1',
                    code: 'syst_1',
                },
                {
                    text: '0',
                    code: 'syst_2',
                },
                {
                    text: '0,5',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: '¬Х & ¬У, где Х=0, У=1',
            answers: [
                {
                    text: '1',
                    code: 'syst_1',
                },
                {
                    text: '0',
                    code: 'syst_2',
                },
                {
                    text: '1,5',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_2',
        },
        {
            text: '¬(Х & У), где Х=0, У=1',
            answers: [
                {
                    text: '1,5',
                    code: 'syst_1',
                },
                {
                    text: '0',
                    code: 'syst_2',
                },
                {
                    text: '1',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_3',
        },
        {
            text: 'Х & У v Z, где Х=0, У=1, Z=1',
            answers: [
                {
                    text: '0',
                    code: 'syst_1',
                },
                {
                    text: '1',
                    code: 'syst_2',
                },
                {
                    text: '2',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_2',
        },
    ],
}

  module.exports = params;
