// 1 Переменные
//variable
//var name ='Vladilen' // старое, лучше не использовать
//const firstName = 'Vladilen'
//const lastName = 'Minin'// string
//const age = 26 //numder
//const isProgrammer = true // boolean




//const _ = 'private' // можно
//const $ = 'some value'  // можно

//const if = 'mkef'// нельзя, ошибка

//const withNum5 = '5' // можно
//const 5withNum = '5' //нельзя начинать название переменной с цифры, ошибка

// 2 Мутирование
//console.log('Имя человека: ' + firstName + ' ,а возраст человека: ' + age)
//const lastName = prompt('Введите фамилию')
//alert(firstName + ' ' + lastName)

//3 Операторы
//let currentYear = 2022
//const birthYear = 1986

//const age = currentYear + birthYear

//const a = 10
//const b = 5
//let  c = 32
//c = c + a
//c += a //32+10=42
//c -= a //42-10=32
//c *= a //32*10=320
//c /= a // 320/10=32

//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//console.log(++currentYear)
//console.log(--currentYear)

//console.log(c)

// 4 Типы данных
//const isProgrammer = true
//const name = 'Vladilen'
//const age = 26
//let x
//null
//console.log(typeof isProgrammer )
//console.log(typeof name)
//console.log(typeof age)
//console.log(typeof x)
//console.log(null)

// 5 Приоритет операторов
//const fullAge = 26
//const birthYear = 1993
//const currentYear = 2020
// операторы сравнения > < >= <=
//const isFullAge = currentYear - birthYear >= //fullAge // 27 >= 26
//console.log(isFullAge)

// 6 Условные операторы
//const courceStatus = 'fail' // ready, fail, pending
//if (courceStatus === 'ready') {
    //console.log('Курс уже готов и его уже можно походить')
//}
//else if (courceStatus === 'pending') {
   //console.log('Курс находится в процессе разработки')
//}
//else {
    //console.log('Курс не получился')
//}

//const isReady = true

//if (isReady === true) {
   // console.log('Все готово!')
//}else {
    //console.log('Все не готово!')
//}
//if (isReady === true) = if (isReady)
// тернарное выражение стр. 90 = стр. 83-88
//isReady ? console.log('Все готово!') : console.//log('Все не готово!')


//const num1 = 42 //numder
//const num2 = '42' // string

//console.log(num1 === num2)
// == приводит к одному типу данных. В данном случае приводит к типу данных строка и проверяет их значению (ответ true); === для тогоЮ чтобы проверялось не только по значению но и еще и по типу данных (ответ false)

// 7 Булевая логика
 // смотри mdn

 // Функциии
 function calculateAge(year) {
return 2020 - year
 }

 //const myAge = calculateAge( 1993 )
 //console.log(calculateAge(1993))
 //console.log(calculateAge(1986))
 //console.log(calculateAge(2030))

 function logInfoAbout(name, year) {
const age = calculateAge(year)
 }





