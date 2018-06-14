const params = {
  tabTitle: 'Системы счисления',
  styleFile: 'theme',
  title: 'Системы счисления',
  content: [
    { type: 'header', text: 'Перевод чисел: из десятичной в двоичную' },
    { type: 'parag', text: `Перевод в системах счисления чисел происходит по определенным правилам.
    Наиболее часто встречается перевод из двоичной в десятичную систему и наоборот.` },
    { type: 'parag', text: `Для того, чтобы перевести число из десятичной системы в двоичную, необходимо последовательно делить его на основание системы счисления, то есть, число два.
    При этом, остаток от каждого деления необходимо фиксировать. Так будет происходить до тех пор, пока остаток от деления не будет меньше или равен единице.
    Проводить вычисления лучше всего в столбик. Затем полученные остатки от деления записываются в строку в обратном порядке.` },
    { type: 'img', link: '/img/syst_1.jpg', desc: 'Перевод числа из десятичной системы счисления в двоичную' },
    { type: 'parag', text: `Например, переведем число 9 в двоичную систему:` },
    { type: 'parag', text: `Делим 9, так как число не делится нацело, то берем число 8, остаток будет 9 – 1 = 1.` },
    { type: 'parag', text: `После деления 8 на 2 получаем 4. Снова делим его, так как число делится нацело – получаем в остатке 4 – 4 = 0.` },
    { type: 'parag', text: `Проводим ту же операцию с 2. В остатке получаем 0.` },
    { type: 'parag', text: `В итоге деления у нас получается 1.` },
    { type: 'parag', text: `Далее записываем все полученные нами остатки в обратном порядке, начиная с итога деления: 1001.` },
    { type: 'parag', text: `Вне зависимости от итоговой системы счисления, перевод чисел из десятичной в любую другую будет происходить по принципу деления числа на основу позиционной системы.` },
    { type: 'parag', text: `Перевод чисел: из двоичной в десятичную` },
    { type: 'parag', text: `Довольно легко переводить числа и в десятичную систему счисления из двоичной. Для этого достаточно знать правила возведения чисел в степень.
    В данном случае, в степень двойки.` },
    { type: 'parag', text: `Алгоритм перевода следующий: каждую цифру из кода двоичного числа необходимо умножить на двойку, причем, первая двойка будет в степени m-1, вторая – m-2 и так далее, где m – количество цифр в коде.
   Затем сложить результаты сложения, получив целое число.` },
    { type: 'parag', text: `Для школьников этот алгоритм можно объяснить проще:` },
    { type: 'parag', text: `Для начала берем и записываем каждую цифру, умноженную на двойку, затем проставляем степень двойки с конца, начиная с нуля.
    Потом складываем полученное число.` },
    { type: 'img', link: '/img/syst_2.jpg', desc: 'Перевод числа из двоичной системы счисления в десятичную' },
    { type: 'parag', text: `Для примера разберем с вами полученное ранее число 1001, переведя его в десятичную систему, и заодно проверим правильность наших вычислений.` },
    { type: 'parag', text: `Выглядеть это будет следующим образом:` },
    { type: 'parag', text: `1*23 + 0*22+0*21+1*20= 8+0+0+1 =9.` },
    { type: 'parag', text: `При изучении данной темы удобно использовать таблицу со степенями двойки. Это существенно уменьшит количество времени, необходимое для проведения вычислений.` },
  ],


}

module.exports = params;