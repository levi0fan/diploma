const params = {
    tabTitle: 'Системы счисления',
    styleFile: 'quiz',
    name: 'syst',
    title: 'Практика по теме "Системы счисления"',
    questions: [
        {
            text: 'Переведите в двоичную систему счисления число 56<sup><small>10</small></sup>.',
            answers: [
                {
                    text: '111000',
                    code: 'syst_1',
                },
                {
                    text: '101000',
                    code: 'syst_2',
                },
                {
                    text: '102000',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Переведите в десятичную систему счисления число 11010<sup><small>2</small></sup>.',
            answers: [
                {
                    text: '30',
                    code: 'syst_1',
                },
                {
                    text: '27',
                    code: 'syst_2',
                },
                {
                    text: '26',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_3',
        },
        {
            text: 'Переведите в десятичную систему счисления число 100000<sup><small>2</small></sup>.',
            answers: [
                {
                    text: '32',
                    code: 'syst_1',
                },
                {
                    text: '31',
                    code: 'syst_2',
                },
                {
                    text: '33',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Переведите в двоичную систему счисления число 78<sup><small>10</small></sup>.',
            answers: [
                {
                    text: '1001110',
                    code: 'syst_1',
                },
                {
                    text: '1010110',
                    code: 'syst_2',
                },
                {
                    text: '1101110',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
    ],
}
  
  module.exports = params;