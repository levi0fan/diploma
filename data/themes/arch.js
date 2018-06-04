const params = {
  tabTitle: `Архитектура компьютеров и компьютерных сетей`,
  styleFile: 'theme',
  title: `Архитектура компьютеров и компьютерных сетей`,
  content: [
    { type: 'header', text: 'Архитектура компьютера' },
    { type: 'parag', text: `Под архитектурой компьютеров понимают все их составляющие, а также принципы их работы. Если соединить между собой несколько компьютеров, то мы можем получить готовую компьютерную сеть.` },
    { type: 'table', text: `Есть две основные составляющие, которые необходимы для создания компьютерной сети:` },
    { type: 'line', text: `Специальное оборудование для образования сети;`},
    { type: 'line', text: `Программное обеспечение, позволяющее всем компьютерам работать вместе.`},
    { type: 'size_3', text: `Компьютерной сетью называются несколько компьютеров, соединенных между собой специальным оборудованием, управляемая специальными программами, тем самым обеспечивая обмен и общее пользование информацией, хранящейся в компьютерной сети.`},
    { type: 'size_3', text: `Линия связи – это среда, способная объединить между собой компьютеры в компьютерную сеть, именно по средствам линий связи происходит передача информации.`},
    { type: 'parag', text: `Если некая информация передается непосредственно между некоторыми абонентами. То это происходит по средствам канала связи.
    Объединенные линии связи – это и есть каналы. Одна линия связи может принадлежать нескольким каналам связи.` },
    { type: 'parag', text: `Компьютерные сети могут быть локального пользования (на местах, на предприятии), региональные (принадлежащие определенному региону), глобальные сети.` },
    { type: 'img', link: '/img/arch_1.jpg', desc: 'Принцип объединения сетей' },
    { type: 'header', text: 'Виды компьютерной сети' },
    { type: 'parag', text: `Давайте разберемся подробнее, что такое локальная, региональная и глобальная сеть.`},
    { type: 'size_3', text: `Локальная сеть - это сеть, которая объединяет те компьютеры, которые находятся на небольшом расстоянии друг от друга, обычно это бывает на территории какого-то здания или даже этажа.`},
    { type: 'parag', text: `Большим достоинством данной сети является то, что все компьютеры находятся на небольшом расстоянии, что увеличивает скорость передачи информации, а также расширяет возможности такой сети.`},
    { type: 'size_3', text: `Если некоторая сеть объединяет пользователей на больших расстояниях, то такая сеть называется глобальной.`},
    { type: 'parag', text: `Для таких сетей используют самые разнообразные линии связи, некоторые из которых изначально использовались в других целях (например, телефонные или телеграфные линии).
    Однако благодаря современному подходу практически все соединяющие линии заменены на радиолинии или оптоволокно.`},
    { type: 'size_3', text: `Если несколько локальных сетей объединяется в одну сеть, то она называется региональной.`},
    { type: 'parag', text: `Эти сети объединяют все локальные сети города, района или региона.`},
    { type: 'size_3', text: `Так же существуют корпоративные сети – сети, объединяющие компьютеры одной организации или отрасли промышленности для обмена рабочей информацией.`},
    { type: 'parag', text: `Для таких сетей компьютеры не обязательно должны находится на территории одного здания.`},
    { type: 'size_3', text: `Архитектура сети – это набор параметров, правил, протоколов, алгоритмов, карт, которые позволяют изучать сеть.`},
    { type: 'size_3', text: `Протокол – это набор правил, которые предполагают обозначения типов данных, которые могут передаваться по сети.`},
    {type: 'header', text: `Топология сети`},
    { type: 'size_3', text: `Топология сети – это план, описывающий места соединений компьютеров, а также их узлов.`},
    { type: 'parag', text: `Существует несколько видов топологий, которые определяются количеством компьютеров, какое расстояние между компьютерами, какие параметры используются, а также многие другие характеристики.`},
    { type: 'parag', text: `Существует несколько основных видов топологий: «Точка», «Шина», «Кольцо», «Звезда».`},
    { type: 'size_3', text: `«Точка»`},
    { type: 'img', link: '/img/arch_2.jpg', desc: '«Точка»' },
    { type: 'parag', text: `Технология «Точка» объединяет между собой два компьютера последовательно друг к другу.`},
    { type: 'size_3', text: `«Шина»`},
    { type: 'img', link: '/img/arch_3.gif', desc: '«Шина»' },
    { type: 'parag', text: `По рисунку можно заметить, что все компьютеры сети подключаются к одному каналу связи.`},
    { type: 'size_3', text: `«Кольцо»`},
    { type: 'img', link: '/img/arch_4.jpg', desc: '«Кольцо»' },
    { type: 'size_3', text: `«Звезда»`},
    { type: 'img', link: '/img/arch_5.jpg', desc: '«Звезда»' },
  ],


}

module.exports = params;
