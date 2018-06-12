const params = {
    tabTitle: 'Элементы теории алгоритмов',
    styleFile: 'quiz',
    name: 'theoralg',
    title: 'Практика по теме "Элементы теории алгоритмов"',
    questions: [
        {
            text: `В современных вычислительных системах алгоритмический подход к решению задач реализуется как`,
            answers: [
                {
                    text: 'императивное программирование',
                    code: 'syst_1',
                },
                {
                    text: 'объектно-направленное программирование',
                    code: 'syst_2',
                },
                {
                    text: 'инертное программирование',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Что не требуется для переработки исходных данных в требуемый результат?',
            answers: [
                {
                    text: 'чтобы процесс переработки данных состоял из отдельных дискретных шагов и был детерминированным',
                    code: 'syst_1',
                },
                {
                    text: 'чтобы исходные данные были заданы в конкретном значении и не могли принимать значения из некоторого множества, т.е. не носили массовый характер',
                    code: 'syst_2',
                },
                {
                    text: 'чтобы были четко указаны условия остановки процесса, и что следует считать результатом процесса',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_2',
        },
        {
            text: 'Чем нельзя характеризовать алгоритмы?',
            answers: [
                {
                    text: 'массовостью',
                    code: 'syst_1',
                },
                {
                    text: 'детерминированностью',
                    code: 'syst_2',
                },
                {
                    text: 'мобильностью',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_3',
        },
        {
            text: 'В чём заключался "тезис Черча"?',
            answers: [
                {
                    text: 'все уточнения понятия алгоритма антонимичны',
                    code: 'syst_1',
                },
                {
                    text: 'все уточнения понятия алгоритма бессмысленны',
                    code: 'syst_2',
                },
                {
                    text: 'все уточнения понятия алгоритма эквивалентны',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_3',
        },
        {
            text: 'Прикладная теория алгоритмов базируется на',
            answers: [
                {
                    text: 'выводах теории алгоритмов об алгоритмической разрешимости тех или иных проблем',
                    code: 'syst_1',
                },
                {
                    text: 'практических применениях алгоритмов для решения тех или иных проблем',
                    code: 'syst_2',
                },
                {
                    text: 'на систематизации алгоритмов',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Что не применяется для наглядного представления структуры алгоритмов?',
            answers: [
                {
                    text: 'графы',
                    code: 'syst_1',
                },
                {
                    text: 'сети',
                    code: 'syst_2',
                },
                {
                    text: 'компьютеры',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_3',
        },
        {
            text: 'Из чего состоит машина Тьюринга?',
            answers: [
                {
                    text: 'бесконечная лента и протокол',
                    code: 'syst_1',
                },
                {
                    text: 'бесконечная лента и управляющая головка',
                    code: 'syst_2',
                },
                {
                    text: 'сеть и управляющая лента',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_2',
        },
        {
            text: 'Набор команд какого вида задаёт программу для работы машины?',
            answers: [
                {
                    text: 'qa → a+Dq+',
                    code: 'syst_1',
                },
                {
                    text: 'qv → a+Dq+',
                    code: 'syst_2',
                },
                {
                    text: 'qa = a+Dq+',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Как можно описать работу машины Тьюринга?',
            answers: [
                {
                    text: 'как последовательную смену ее конфигураций',
                    code: 'syst_1',
                },
                {
                    text: 'как последовательное выполнение поставленных задач',
                    code: 'syst_2',
                },
                {
                    text: 'как хаотичное выполнение задач из прогаммного списка',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Числовые функции – это',
            answers: [
                {
                    text: 'выражения с использованием цифр',
                    code: 'syst_1',
                },
                {
                    text: 'иррациональные выражения',
                    code: 'syst_2',
                },
                {
                    text: 'частный случай словарных функций',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_3',
        },
    ],
}

  module.exports = params;
