const params = {
    tabTitle: 'Информация и ее кодирование',
    styleFile: 'quiz',
    name: 'cod',
    title: 'Практика по теме "Информация и ее кодирование"',
    questions: [
        {
            text: 'Что делает передатчик информации:',
            answers: [
                {
                    text: 'подготовка данных и преобразование их в форму, удобную для трансляции, обработки и хранения',
                    code: 'syst_1',
                },
                {
                    text: 'преобразование кодированных данных в исходную форму',
                    code: 'syst_2',
                },
                {
                    text: 'использование информации для решения задач',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Что делает приемник  информации:',
            answers: [
                {
                    text: 'подготовка данных и преобразование их в форму, удобную для трансляции, обработки и хранения',
                    code: 'syst_1',
                },
                {
                    text: 'преобразование кодированных данных в исходную форму',
                    code: 'syst_2',
                },
                {
                    text: 'использование информации для решения задач',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_2',
        },
        {
            text: 'Как представлена вся информация, обрабатываемая компьютером:',
            answers: [
                {
                    text: 'двоичным кодом',
                    code: 'syst_1',
                },
                {
                    text: 'троичным кодом',
                    code: 'syst_2',
                },
                {
                    text: 'шифром',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Что такое бит:',
            answers: [
                {
                    text: 'единица измерения количества информации ',
                    code: 'syst_1',
                },
                {
                    text: 'единица хранения и обработки цифровой информации',
                    code: 'syst_2',
                },
                {
                    text: 'двоичный код',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Что используется для кодирования текстов:',
            answers: [
                {
                    text: '8-разрядный двоичный код',
                    code: 'syst_1',
                },
                {
                    text: 'простой двоичный код',
                    code: 'syst_2',
                },
                {
                    text: 'латинский шрифт',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Для чего используются символы 129-256 в восьмиразрядном двоичном виде:',
            answers: [
                {
                    text: 'для национальных символов и псевдографики',
                    code: 'syst_1',
                },
                {
                    text: 'для национальных символов и псевдографики',
                    code: 'syst_2',
                },
                {
                    text: 'для описания ',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Что используется для кодирования чисел:',
            answers: [
                {
                    text: '8-разрядный двоичный код',
                    code: 'syst_1',
                },
                {
                    text: 'простой двоичный код',
                    code: 'syst_2',
                },
                {
                    text: 'римские цифры',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_2',
        },
        {
            text: 'Какой не бывает графическая информация:',
            answers: [
                {
                    text: 'аналоговой',
                    code: 'syst_1',
                },
                {
                    text: 'дискретной',
                    code: 'syst_2',
                },
                {
                    text: 'цифровой',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_3',
        },
        {
            text: 'Какого формата изображения не существует:',
            answers: [
                {
                    text: 'растрового',
                    code: 'syst_1',
                },
                {
                    text: 'векторного и фрактального',
                    code: 'syst_2',
                },
                {
                    text: 'дискретного',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_3',
        },
        {
            text: 'Кодирование мультимедийной информации состоит:',
            answers: [
                {
                    text: 'преобразовании аналоговой природы звука в дискретную ',
                    code: 'syst_1',
                },
                {
                    text: 'упорядочивание последовательности цифровых данных, полученных через АЦП',
                    code: 'syst_2',
                },
                {
                    text: `на основании поступающих на вход цифровых данных в определенные моменты времени происходит генерация электрического сигнала необходимой амплитуды`,
                    code: 'syst_3',
                },
            ],
            correct: 'syst_',
        },
    ],
}

  module.exports = params;