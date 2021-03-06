const params = {
    tabTitle: 'Математическое моделирование и вычислительный эксперимент',
    styleFile: 'quiz',
    name: 'mathmodel',
    title: 'Практика по теме "Математическое моделирование и вычислительный эксперимент"',
    questions: [
        {
            text: 'Что не является описанием математической модели:',
            answers: [
                {
                    text: `совокупность записанных на языке математики соотношений (формул, неравенств, уравнений, логических соотношений), определяющих характеристики состояния объекта в зависимости от его элементов, свойств, параметров, внешних воздействий`,
                    code: 'syst_1',
                },
                {
                    text: 'приближённое описание объекта, выраженное с помощью математической символики',
                    code: 'syst_2',
                },
                {
                    text: 'модель, позволяющая упорядоченно хранить данные о группе объектов, обладающих одинаковым набором свойств',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_3',
        },
        {
            text: `Программа, которая обеспечивает имитацию характеристик и поведения определенного объекта, а также результат выполнения этой программы в виде графических изображений, числовых значений, таблиц – это`,
            answers: [
                {
                    text: 'математическая модель',
                    code: 'syst_1',
                },
                {
                    text: 'информационная модель',
                    code: 'syst_2',
                },
                {
                    text: 'модель поведения',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Какой тип не является  математической моделью?',
            answers: [
                {
                    text: 'структурно-функциональный',
                    code: 'syst_1',
                },
                {
                    text: 'имитационный компьютерный',
                    code: 'syst_2',
                },
                {
                    text: 'стереотипный ',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_3',
        },
        {
            text: `Что называется методом решения задачи анализа или синтеза сложной системы на основе использования ее компьютерной модели?`,
            answers: [
                {
                    text: 'компьютерное моделирование',
                    code: 'syst_1',
                },
                {
                    text: 'информационное моделирование',
                    code: 'syst_2',
                },
                {
                    text: 'компьютерный дизайн',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Что является объектом компьютерного моделирования?',
            answers: [
                {
                    text: 'математические и научные модели',
                    code: 'syst_1',
                },
                {
                    text: 'реальные объекты',
                    code: 'syst_2',
                },
                {
                    text: 'явления природы',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Что является критерием верности любого из результатов компьютерного моделирования:',
            answers: [
                {
                    text: 'эксперимент',
                    code: 'syst_1',
                },
                {
                    text: 'расчеты',
                    code: 'syst_2',
                },
                {
                    text: 'макет',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Что не входит в преимущества компьютерного моделирования:',
            answers: [
                {
                    text: 'дает возможность рассчитать параметры и промоделировать явления, процессы и эффекты, изучение которых в реальных условиях невозможно либо затруднительно, либо очень дорого',
                    code: 'syst_1',
                },
                {
                    text: 'является экологически чистым и не представляет опасности для природы и человека',
                    code: 'syst_2',
                },
                {
                    text: 'не доступно в использовании',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_3',
        },
        {
            text: 'С чем не связан компьютерный эксперимент:',
            answers: [
                {
                    text: 'проведением сложных математических расчетов (численное моделирование)',
                    code: 'syst_1',
                },
                {
                    text: 'построением и исследованием наглядных и/или динамических моделей (компьютерное моделирование)',
                    code: 'syst_2',
                },
                {
                    text: 'разработкой реальной модели (макетирование)',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_3',
        },
        {
            text: 'Инструмент исследования моделей, а не природных или социальных явлений – это:',
            answers: [
                {
                    text: 'компьютерный эксперимент',
                    code: 'syst_1',
                },
                {
                    text: 'компьютерный расчет',
                    code: 'syst_2',
                },
                {
                    text: 'лабораторный эксперимент',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
        {
            text: 'Математическая модель в науке – это:',
            answers: [
                {
                    text: 'результат  формализации реального объекта или явления',
                    code: 'syst_1',
                },
                {
                    text: 'результат эксперимента',
                    code: 'syst_2',
                },
                {
                    text: 'результат расчетов',
                    code: 'syst_3',
                },
            ],
            correct: 'syst_1',
        },
    ],
}

  module.exports = params;
