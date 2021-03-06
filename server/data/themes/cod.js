const params = {
  tabTitle: 'Информация и ее кодирование',
  styleFile: 'theme',
  title: 'Информация и ее кодирование',
  content: [
    { type: "parag", text: `В мире идет постоянный обмен потоками информации.
    Источниками могут быть люди, технические устройства, различные вещи, объекты неживой и живой природы. Получать сведения может как один объект, так и несколько.`},
    { type: "img", link: '/img/cod_1.jpg', desc: 'Карикатура' },
    { type: "parag", text: `Для более качественного обмена данными одновременно осуществляется кодирование и обработка информации на стороне передатчика
    (подготовка данных и преобразование их в форму, удобную для трансляции, обработки и хранения), пересылка и декодирование на стороне приемника (преобразование кодированных данных в исходную форму).
    Это взаимосвязанные задачи: источник и приемник должны обладать сходными алгоритмами обработки сведений, иначе процесс кодирования-декодирования будет невозможен.
    Кодирование и обработка графической и мультимедийной информации обычно реализуются на основе вычислительной техники.`},
    { type: "img", link: '/img/cod_2.jpg', desc: 'Монитор с информацией'},
    { type: "header", text: `Кодирование информации на компьютере`},
    { type: "parag", text: `Есть много способов обработки данных (тексты, числа, графика, видео, звук) с помощью компьютера.
    Вся информация, обрабатываемая компьютером, представлена в двоичном коде — с помощью цифр 1 и 0, называемых битами.
    Технически этот способ реализуется очень просто: 1 — электрический сигнал присутствует, 0 — отсутствует.
    С точки зрения человека, такие коды неудобны для восприятия — длинные строчки нулей и единиц, представляющие собой кодированные символы, очень сложно сходу расшифровать.
    Зато такой формат записи сразу наглядно показывает, что такое кодирование информации.
    Например, число 8 в двоичном восьмиразрядном виде выглядит как следующая последовательность бит: 000001000.
    Но то, что сложно человеку, просто компьютеру. Электронике проще обработать множество простых элементов, чем небольшое количество сложных.`},
    { type: "img", link: '/img/cod_3.jpg', desc: 'Рабочий стол'},
    { type: "header", text: `Кодирование текстов`},
    {type: "parag", text: `Когда мы нажимаем кнопку на клавиатуре, компьютер получает определенный код нажатой кнопки, ищет его в стандартной таблице символов ASCII (американский код для обмена информацией),
    «понимает» какая кнопка нажата и передает этот код для дальнейшей обработки (например, для отображения символа на мониторе). Для хранения символьного кода в двоичном виде используется 8 разрядов,
    поэтому максимальное число комбинаций равняется 256. Первые 128 символов используется под управляющие символы, цифры и латинские буквы.
    Вторая половина предназначается для национальных символов и псевдографики.`},
    {type: "parag", text: `Легче будет понять, что такое кодирование информации, на примере. Рассмотрим коды английского символа «С» и русской буквы «С».
    Заметим, что взяты символы заглавные, и их коды отличаются от строчных. Английский символ будет выглядеть как 01000010, а русский - 11010001.
    То, что для человека на экране монитора выглядит одинаково, компьютер воспринимает совершенно по-разному.
    Необходимо также обратить внимание на то, что коды первых 128 символов остаются неизменны,
    а начиная от 129 и далее одному двоичному коду могут соответствовать различные буквы в зависимости от используемой кодовой таблицы.
    К примеру, десятичный код 194 может соответствовать в КОИ8 букве «б», в СР1251 - «В», в ISO - «Т», а в кодировках СР866 и Мас вообще этому коду не соответствует ни один символ.
    Поэтому, когда при открытии текста мы вместо русских слов видим буквенную-символьную абракадабру, это означает,
    что такое кодирование информации нам не подходит и нужно выбрать другой конвертор символов.`},
    {type: "header", text: `Кодирование чисел`},
    {type: "parag", text: `В двоичной системе исчисления берутся всего два варианта значения — 0 и 1.
    Все основные операции с двоичными числами использует наука под названием двоичная арифметика. Эти действия имеют свои особенности.
    Возьмем, к примеру, число 45, набранное на клавиатуре. Каждая цифра имеет свой восьмиразрядный код в кодовой таблице ASCII, поэтому число занимает два байта (16 бит): 5 - 01010011, 4 - 01000011.
    Для того чтобы использовать это число в вычислениях, оно переводится по специальным алгоритмам в двоичную систему исчисления в виде восьмиразрядного двоичного числа: 45 - 00101101.`},
    {type: "img", link: '/img/cod_4.jpg', desc: 'Рабочий стол'},
    {type: "header", text: `Кодирование и обработка графической информации`},
    {type: "parag", text: `В 50-х годах на компьютерах, которые чаще всего использовались в научных и военных целях, впервые реализовали графическое отображение данных.
    Сегодня визуализация информации, получаемой от компьютера, является обычным и привычным для любого человека явлением, а в те времена это произвело необычайный переворот в работе с техникой.
    Возможно, сказалось влияние человеческой психики: наглядно представленная информация лучше усваивается и воспринимается.
    Большой рывок в развитии визуализации данных произошел в 80-х годах, когда кодирование и обработка графической информации получили мощное развитие.`},
    {type: "img", link: '/img/cod_5.jpg', desc: 'Графика'},
    {type: "header", text: `Аналоговое и дискретное представление графики`},
    {type: "parag", text: `Графическая информация бывает двух видов: аналоговая (живописное полотно с непрерывно изменяющимся цветом) и дискретная (картинка, состоящая из множества точек разного цвета).
    Для удобства работы с изображениями на компьютере их подвергают обработке — пространственной дискретизации, при которой каждому элементу назначается конкретное значение цвета в виде индивидуального кода.
    Кодирование и обработка графической информации похожи на работу с мозаикой, состоящей из большого количества мелких фрагментов.
    Причем качество кодирования зависит от размеров точек (чем меньше размер элемента - точек будет большее количество на единицу площади, — тем выше качество)
    и размера палитры используемых цветов (чем больше цветовых состояний может принимать каждая точка, соответственно, неся больше информации, тем лучше качество).`},
    {type: "header", text: `Создание и хранение графики`},
    {type: "parag", text: `Есть несколько основных форматов изображений — векторный, фрактальный и растровый.
    Отдельно рассматривается сочетание растровой и векторной — широко распространенная в наше время мультимедийная 3D-графика
    представляющая собой приемы и методы построения трехмерных объектов в виртуальном пространстве.
    Кодирование и обработка графической и мультимедийной информации различна для каждого формата изображений.`},
    {type: "img", link: '/img/cod_6.jpg', desc: 'Форматы'},
    {type: "header", text: `Растровое изображение`},
    {type: "parag", text: `Суть этого графического формата в том, что рисунок разбивается на мелкие разноцветные точки (пиксели). Верхняя левая точка контрольная.
    Кодирование графической информации всегда начинается с левого угла изображения построчно, каждый пиксель получает код цвета.
    Объем растровой картинки можно вычислить умножением количества точек на информационный объем каждого из них (который зависит от количества вариантов цвета).
    Чем выше разрешающая способность монитора, тем больше количество строк растра и точек в каждой строке, соответственно, выше качество изображения.
    Для обработки графических данных растрового типа можно использовать двоичный код, так как яркость каждой точки и координаты ее расположения можно представить в виде целых чисел.`},
    {type: "img", link: '/img/cod_7.jpg', desc: 'Разница'},
    {type: "header", text: `Векторное изображение`},
    {type: "parag", text: `Кодирование графической и мультимедийной информации векторного типа сводится к тому, что графический объект представляется в виде элементарных отрезков и дуг.
    Свойствами линии, являющейся базовым объектом, являются форма (прямая или кривая), цвет, толщина, начертание (пунктир или сплошная линия).
    Те линии, которые являются замкнутыми, обладают еще одним свойством — заполнение другими объектами или цветом.
    Положение объекта определяется точками начала и конца линии и радиусом искривления дуги.
    Объем графической информации векторного формата значительно меньше растрового, но требует специальных программ для просмотра графики этого типа.
    Существуют также программы — векторизаторы, преобразующие растровые изображения в векторные.`},
    {type: "img", link: '/img/cod_8.jpg', desc: 'Векторное изображение'},
    {type: "header", text: `Фрактальная графика`},
    {type: "parag", text: `Этот тип графики, как и векторный, основан на математических расчетах, но ее базовой составляющей является сама формула.
    В памяти компьютера нет необходимости хранить никаких изображений или объектов, сама картинка рисуется только по формуле.
    Графикой такого типа удобно визуализировать не только простые регулярные структуры, но и сложные иллюстрации, имитирующие, например, ландшафты в играх или эмуляторах.`},
    {type: "img", link: '/img/cod_9.jpg', desc: 'Векторное изображение'},
    {type: "header", text: `Звуковые волны`},
    {type: "parag", text: `Что такое кодирование информации, еще можно продемонстрировать на примере работы со звуком. Мы знаем, что наш мир переполнен звуками.
    С древних времен люди разобрались, как рождаются звуки - волны сжатого и разреженного воздуха, воздействующие на барабанные перепонки уха.
    Человек может воспринимать волны с частотой от 16 Гц до 20 кГц (1 Герц — одно колебание в секунду). Все волны, частоты колебаний которых попадают в этот диапазон, называются звуковыми.`},
    {type: "header", text: `Свойства звука`},
    {type: "parag", text: `Характеристиками звука являются тон, тембр (окраска звука, зависящая от формы колебаний), высота (частота, которая определяется частотой колебаний в секунду) и громкость,
    зависящая от интенсивности колебаний. Любой реальный звук состоит из смеси гармонических колебаний с фиксированным набором частот.
    Колебание с самой низкой частотой называют основным тоном, остальные — обертонами. Особую окраску звуку придает тембр — различное количество обертонов, присущее именно этому звуку.
    Именно по тембру мы можем узнавать голоса близких людей, отличать звучание музыкальных инструментов.`},
    {type: "header", text: `Программы для работы со звуком`},
    {type: "parag", text: `Условно программы по функционалу можно разделить на несколько видов: служебные программы и драйверы для звуковых плат, работающие с ними на низком уровне,
    аудио редакторы, которые производят различные операции со звуковыми файлами и применяют к ним различные эффекты, программные синтезаторы и преобразователи аналого-цифровые (АЦП) и цифро-аналоговые (ЦАП).`},
    {type: "img", link: '/img/cod_10.jpg', desc: 'Звуковые волны'},
    {type: "header", text: `Кодирование звука`},
    {type: "parag", text: `Кодирование мультимедийной информации состоит в преобразовании аналоговой природы звука в дискретную для более удобной ее обработки. АЦП получает на входе аналоговый сигнал,
    измеряет его амплитуду в определенные промежутки времени и выдает на выходе цифровую последовательность с данными об изменениях амплитуды. Никаких физических преобразований не происходит.`},
    {type: "parag", text: `Выходной сигнал является дискретным, поэтому, чем чаще частота измерения амплитуды (сэмпл), тем точнее выходной сигнал соответствует входному, тем лучше проходит кодирование и обработка мультимедийной информации.
    Сэмплом также принято называть упорядоченную последовательность цифровых данных, полученных через АЦП. Сам процесс при этом называется сэмплированием, по-русски — дискретизацией.`},
    {type: "img", link: '/img/cod_11.jpg', desc: 'Графики звука'},
    {type: "parag", text: `Обратное преобразование происходит при помощи ЦАП: на основании поступающих на вход цифровых данных в определенные моменты времени происходит генерация электрического сигнала необходимой амплитуды.`},
    {type: "header", text: `Параметры дискретизации`},
    {type: "parag", text: `Основными параметрами сэплирования являются не только частота измерения, но и разрядность — точность измерения изменения амплитуды за каждый сэмпл. Чем точнее передается при оцифровке значение амплитуды
    сигнала в каждую единицу времени, тем выше качество сигнала после АЦП, тем выше достоверность восстановление волны при обратном преобразовании.`},
  ],


}

module.exports = params;
