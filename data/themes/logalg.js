const params = {
  tabTitle: 'Логика и алгоритмы',
  styleFile: 'theme',
  title: 'Логика и алгоритмы',
  content: [
    { type: 'header', text: 'Булева алгебра' },
    { type: 'table', text: `В основе булевой алгебры лежат 16 основных функций. Наиболее часто применяемые из них:` },
    { type: 'line', text: 'логическое отрицание (инверсия) – « не »; ¬ ; ¯ ;'},
    { type: 'line', text: 'логическое умножение (конъюнкция) – « и »; & ; ^ ; • ;'},
    { type: 'line', text: 'логическое сложение (дизъюнкция) – « или »; + ; v ;'},
    { type: 'line', text: `функция Вебба (отрицание дизъюнкции) – ИЛИ-НЕ ;`},
    { type: 'line', text: `функция Шеффера (отрицание конъюнкции) – И-НЕ ;`},
    { type: 'img', link: '/img/logalg_1.jpg', desc: 'Таблица истинности' },
    { type: 'header', text: 'Законы логики' },
    { type: 'img', link: '/img/logalg_2.jpg', desc: 'Законы логики' },
    { type: 'parag', text: `Как и любая точная наука, булева алгебра имеет свои законы, которые позволяют упростить работу со значениями.
    Эти законы указаны в таблице выше.` },
    { type: 'header', text: `Возможные ловушки и проблемы` },
    { type: 'line', text: `Можно «забыть» отрицание (помните, что правильный ответ – всего один!)` },
    { type: 'line', text: `Можно перепутать порядок операций (скобки, «НЕ», «И», «ИЛИ», «импликация»)` },
    { type: 'line', text: `Нужно помнить таблицу истинности операции «импликация», которую очень любят составители тестов.` },
    { type: 'line', text: `Этот метод проверяет только заданные числа и не дает общего решения, то есть не определяет все множество значений X, при которых выражение истинно.` },
  ],


}

module.exports = params;
