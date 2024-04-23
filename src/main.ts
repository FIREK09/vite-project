import './style.scss';




// практика 1

// let age = parseInt(prompt('Сколько вам лет','') as string)

// if (age >= 14 && age <= 90) {
//   age = alert('У вас осталось достаточно времени!')
// } else {
//   age = alert('Вы на палке о двух концах!')
// }

// практика 2 переменные

// let name = 'John'
// let admin = name
// alert(admin)

// практика 3 переменные?

// let earth = 'Earth'
// let userName = ;

// практика 4 переменные!!! рудимент
// alert('Давайте вычислим ваш возраст')

// let yearsOld = parseInt(prompt('В каком году вы родились? ', '2011') as string) as number
// let monthOld = prompt('В каком месяце вы родились? ', '9') рудимент
// let dayOld = prompt('В какой день вы родились? ', '11') рудимент

// let birthday = [dayOld, monthOld, yearsOld] рудимент

// let realYearsOld = ( 2024 - yearsOld )
// console.log(realYearsOld)

// alert(realYearsOld)

// и так ifelse
// введите число 1 || -1 || 0

// const userInput: number | null = parseFloat(
//   prompt("Введите число ", "1 / -1/ 0 ") as string
// ) as number;

// if (userInput) {
//   const userNumber: number = userInput;
//   if (!isNaN(userNumber)) {
//     correctNumber(userNumber);
//   } else {
//     console.log("Ошибка: введите число");
//   }
// }  else {
//   alert("Число отсутствует и/или равно нулю");
// }

// function correctNumber(userNumber: number) {
//   if (userNumber > 0) {
//     alert("Число положительное");
//   } else if (userNumber < 0) {
//     alert("Число отрицательное");
//   } else (userNumber = 0); {
//     alert("Число отсутстувует и/или равно нулю");
//   }
// }

// ifelse 2

// const userYearsOld: number | null = parseFloat(prompt('Введите ваш возраст','85')as string ) as number

// if (userYearsOld > 120) {
//  alert('Невероятно, а как вы живы?')
// } else if (userYearsOld < 1) {
//   alert('Удивительно, как не рожденный может рационально думать и отвечать на вопросы?')
// } else {
//   alert('Замечательно!')
// }

// ifelse 3

// function calculater(number: number): number {
//   if (userInput < 0) {
//     return -number;
//   } else {
//     return number;
//   }
// }

// const userInput: number = parseFloat(prompt('Введите число','5')as string )as number

// if (userInput) {
//   const number = userInput;

//   if (!isNaN(number)) {
//     const valueUserNumber: number =  calculater(number)
//     alert(`Модуль числа ${number} равен ${valueUserNumber}`)
//   } else {
//     console.log('Введите корректное число')
//   }
// } else {
//   console.log('Ну серьёзно не бесите введите число!')
// }

// ifelse 4

// function validateTime( hours: number, minutes: number, second: number ): boolean {
//   if(hours<0 || hours>23 || minutes<0 || minutes>59 || second<0 || second>59) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function userGlobalTime() {
//   const hours = parseInt(prompt('Введите часы (0-23)' || '0', '10')as string)as number;
//   const minutes = parseInt(prompt('Введите минуты (0-59) ','')as string)as number;
//   const second = parseInt(prompt('Введите секунды (0-59) ','')as string)as number
//   if(validateTime(hours, minutes, second)){
//     console.log(`Введенно корректное время ${hours}:${minutes}:${second}`);
//   } else {
//     console.log('Введенно некорректное время')
//   }
// }

// userGlobalTime();

// ifelse 5

// факториал введенного пользователем числа

// const factorialUser = parseInt(prompt('Введите число','')as string)as number
// let factorial = 1;
// let i: number = 1
// while (i <= factorialUser) {
//   factorial = factorial * i;
//   ++i
// }

// console.log(`Факториал числа ${factorialUser} равен ${factorial}`)

// while 1 #

// const userCechteg = parseFloat(prompt('Введите число','')as string)as number
// let i = 0
// while (i < userCechteg) {
//   console.log('#')
//   ++i
// }

// while 2 012345

// const userNumber = parseFloat(prompt('Введите число','')as string)as number
// let i = 0
// while ( i <= userNumber) {
//   let valueNull = isNaN(i) ? 0 : i++
//   console.log(valueNull)
// }

//  switch времена года

// let month: string = prompt("Введите месяц", "") as string;

// switch (month) {
//   case 'January':
//     console.log("Сейчас Январь");
//     break;
//   case 'February':
//     console.log("Сейчас Февраль");
//     break;
//   case 'March':
//     console.log("Сейчас Март");
//     break;
//   case 'April':
//     console.log("Сейчас Апрель");
//     break;
//   case 'May':
//     console.log("Сейчас Май");
//     break;
//   case 'June':
//     console.log("Сейчас Июнь");
//     break;
//   case 'July':
//     console.log("Сейчас Июль");
//     break;
//   case 'August':
//     console.log("Сейчас Август");
//     break;
//   case 'September':
//     console.log("Сейчас Сентябрь");
//     break;
//   case 'October':
//     console.log("Сейчас Октябрь");
//     break;
//   case 'November':
//     console.log("Сейчас Ноябрь");
//     break;
//   case 'December':
//     console.log("Сейчас Декабрь");
//     break;
// }

// switch calculater

// let num1 = prompt("Введите первое число", "") as unknown as number;
// let num2 = prompt("Введите второе число", "") as unknown as number;
// let operation = prompt("Введите операцию", "") as string;

// switch (operation) {
//   case "+":
//     console.log(+num1 + +num2);
//     break;
//   case "-":
//     console.log(+num1 - +num2);
//     break;
//   case "*":
//     console.log(+num1 * +num2);
//     break;
//   case "/":
//     console.log(+num1 / +num2);
//     break;
//   case "**":
//     console.log((+num1) ** +num2);
//     break;
//   case "%":
//     console.log(+num1 % +num2);
//     break;
//   default:
// }

// тернарный оператор

// let num1: number = parseInt(prompt('Введите первое число','55')as string )as number
// let num2: number = parseInt(prompt('Введите второе число','65')as string )as number

// num1 > num2 ? console.log(num1) : console.log(num2)

// if (num2 > num1) {
//   console.log(num2)
// } else {
//   console.log(num1)
// }

// тернарный оператор остаток от деления

// let userNumber: number = parseInt(prompt('Введите число:')as string)as number

// userNumber % 5 === 0 ? console.log('Число кратно 5') : console.log('Число не кратно 5')

// тернарный оператор "землянин, иношапатянин"

// let urPlaceOnGalaxy = prompt('На какой планете вы живете?: ')as string

// urPlaceOnGalaxy.toLowerCase() === 'земля' ? console.log('Приветствую Землянин!') : console.log('Приветствую Иношапатянин');

// координаты х у по четвертям

// const x = parseFloat(prompt('Введите координату x: ')as string)
// const y = parseFloat(prompt('Введите координату y: ')as string)

//     if (x === 0 && y === 0) {
//       console.log('Точка находится в начале координат');
//     } else if (x === 0) {
//       console.log('Точка находится на оси Y');
//     } else if (y === 0) {
//       console.log('Точка находится на оси X');
//     } else if (x > 0 && y > 0) {
//       console.log('Точка находится в первой четверти');
//     } else if (x < 0 && y > 0) {
//       console.log('Точка находится во второй четверти');
//     } else if (x < 0 && y < 0) {
//       console.log('Точка находится в третьей четверти');
//     } else {
//       console.log('Точка находится в четвертой четверти');
//     }

// while 1

// let value = parseInt(prompt('Введите число повторений ')as string)as number
// let i = 0

// while(i<value) {
//   console.log('#')
//   ++i
// }

// while 2

// let valueUser = parseInt(prompt('Введите число ')as string)as number
// let i = valueUser

// while(0 <= i) {
//   console.log(i)
//   --i
// }

//  while 3

// let number = parseInt(prompt('Введите число ')as string)as number
// let upper = parseInt(prompt('Введите степень ')as string)as number

// while(number ** upper) {
//   const numberUpper = number ** upper
//   alert(`Число ${number} в ${upper} степени равно ${numberUpper}`)
//   break
// }

// while 4

// function findSomeThing(a:number, b:number): number[] {
//   const massive: number[] = [];

//   let smaal = Math.min(a, b);

//   let i = 1;

//   while (i <= smaal) {
//     if (a % i === 0 && b % i === 0) {
//       massive.push(i);
//     }
//      ++i
//   }

//   return massive;

// }

//   let num1 = parseInt(prompt("Введите число ") as string) as number;
//   let num2 = parseInt(prompt("Введите число ") as string) as number;

// const finallyFind = findSomeThing(num1, num2);

// console.log(`Общие делители чисел ${num1} и ${num2}: ${finallyFind.join(', ')}`);

// while 5

// const userFactorial =  parseInt(prompt("Введите число факториала ") as string) as number;
// let factorial = 1;
// let i = 1;

// while(i <= userFactorial) {
//    factorial = factorial * i
//    i++
//   }

//   console.log(`Сумма факториала из ${userFactorial} равна: ${factorial}`)

// do while 1

// let allin: number = 2 + (2 * 2)

// do {
//   allin = parseInt(prompt(`Сколько равняется выражение: '2 + 2 * 2'? Введите ответ: 8, 4 или 6`, '')as string)as number
// } while (allin !== 6);

// console.log('Вы правы');

// do while 2

// let oneTauzend: number = 1000
// let delenie: number = oneTauzend
// let count = 0;

// do {
//   delenie = (delenie / 2)
//   let i = delenie
//   count++
//   console.log(i)
// } while(delenie >= 50);

// console.log(`Полученное число меньше 50: ${delenie}`);
// console.log(`Количество делений: ${count}`);

// function 1

// let num1 = 10
// let num2 = 20

// type numstr = number | string

// function sum( num1:numstr, num2:numstr ):numstr {

//   num1 =  10
//   num2 = 20
//   if ( num1 > num2 ) {
//       return num1
//       console.log(num1)
//     } else {
//         return num2
//         console.log(num2)
//       }                                                         это zombiecod
//       return num1 > num2? num1 : num2
//     }

//     console.log(function sum(num1:numstr , num2:numstr):numstr)

// let num1 = 10;
// let num2 = 20;
// type numstr = number | string;
// function sum(num1: numstr, num2: numstr): numstr {
//   if (typeof num1 === 'string' || typeof num2 === 'string') {
//     return 'Ошибка: оба аргумента должны быть числами';
//   }

//   if (num1 > num2) {
//     console.log(num1);
//     return num1;
//   } else {
//     // console.log(num2);
//     return num2;
//   }
// }

// console.log(sum(num1, num2));

// рекурсивные функции 1234

// function getReversedNumber(n: number): any {
//   if()
// }


// Вывести все числа от 1 до 100, которые кратные указанному
// пользователем числу.

// let i = 0;
// const numberMassive: number[] = []
// const userNumber = parseInt(prompt('Введите число от 1 до 100 ','20')as string )as number

// for(i = 1; i <= 100; i++ ) {
//   if(i % userNumber === 0) {
//      numberMassive.push(i)
//   } else {
//     console.warn('Тут ошибка Сеньор Разработчик')
//   }
// }

// numberMassive.forEach((element) => {
// console.log(element)
// //                                   смотрел в чем была ошибка
// //                           оказывается я написал вместо массива шаг и переменную i
// })

// console.log(`Числа кратные числу ${userNumber} это ${numberMassive}`)

//for 2

// Вывести каждый 4-й элемент из указанного пользователем
// диапазона. Пользователь указывает минимальное и максимальное
// значения диапазона.

// const userInputMax = parseInt(prompt('Введите максимальный диапазон','')as string)as number
// const userInputMin = parseInt(prompt('Введите минимальный диапазон','')as string)as number

// function getNumbers(userInputMin: number, userInputMax: number) {
//   for (let i = userInputMin; i <= userInputMax; i++) {

//   const numbs: number[] = [] as const

//   if (userInputMin % 4 == 0 && userInputMax % 4 == 0) {
//     if (i % 4 == 0) {
//       numbs.push(i)
//       console.log(numbs[0]);
//     }
//   } else {
//     console.log('Введите корректный диапазон');
//     break
//   }
// }
// }

// getNumbers(userInputMin, userInputMax)

//       /\
//      /  \
//     /    \
//    /      \
//   /        \
//  /          \
// /!!доделано!!\

//for 3

// Запросить число и проверить, простое ли оно. Простое
// число делится без остатка только на себя и на единицу

// const userInputNumber = parseInt(
//   prompt('Введите число ', '') as string
// ) as number;

// const i = 0;

// function saveThisSheet(i: number) {
//   for (i = 0; i < userInputNumber; i++) {

//     const result = userInputNumber % i <= 1;

//     i = 2

//     if (i >= 2) {
//       if (userInputNumber % i == 0) {
//         console.log('Число составное');
//         break;
//       } else {
//         console.log('Число простое');
//         break
//       }
//     } else {
//       console.log(result);
//     }
//     console.log(i);
//     break
//   }
// }

// if (userInputNumber % 1 === 0) saveThisSheet(i);


// const saveUserAgeOld = parseInt(
//   prompt('Введите число ', '') as string
// ) as number;

// function setYourAge(saveUserAgeOld: number) {
//   const age = saveUserAgeOld;

//   if(age >= 14 && age <= 90) {
//     console.log('У вас осталось достаточно времени!')
//   } else if (age < 14 || age > 90) {
//     console.log('Вы на палке о двух концах!')
//   }

//   console.log(age);
// }

// setYourAge(saveUserAgeOld);

// for (let i = 0; i <= 10; i++) {

//   if (i % 2 === 0 && i >= 2) {
//     console.log(i);
//   } else {
//     continue
//   }

// }

// введение в js 4 задания без нумерования все разом

// const i = parseInt(prompt('Введите число ')as string)as number
// const a = parseInt(prompt('Введите число ')as string)as number

// i > a ? console.log(i) : console.log(a)

// if(i > a) {
//   console.log(i)
// } else {
//   console.log(a)
// }

// const i = parseInt(prompt('Введите число ')as string)as number
// const a = parseInt(prompt('Введите степень ')as string)as number

// while(i) {
//   const result = i ** a
//   console.log(result)
//   break
// }

// const num1 = prompt("Введите первое число", "") as unknown as number;
// const num2 = prompt("Введите второе число", "") as unknown as number;
// const operation = prompt("Введите операцию", "") as string;

// switch (operation) {
//   case "+":
//     console.log(+num1 + +num2);
//     break;
//   case "-":
//     console.log(+num1 - +num2);
//     break;
//   case "*":
//     console.log(+num1 * +num2);
//     break;
//   case "/":
//     console.log(+num1 / +num2);
//     break;
//   case "**":
//     console.log((+num1) ** +num2);
//     break;
//   case "%":
//     console.log(+num1 % +num2);
//     break;
//   default:
// }


// const userNum = prompt("Введите число", "") as unknown as number;

// function table(userNum: number) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${userNum} * ${i} = ${userNum * i}`);
//   }
// }

// table(userNum)

// const maxUserNumbers = parseInt(
//   prompt('Введите максимальный диапазон', '') as string
// ) as number;
// const minUserNumbers = parseInt(
//   prompt('Введите минимальный диапазон', '') as string
// ) as number;
// const count = parseInt(
//   prompt('Введите тип чисел', '') as string
// ) as number;

// // function getTrueOrFalseNumbers(minUserNumbers: number, maxUserNumbers: number) {
// //   for (let i = minUserNumbers; i <= maxUserNumbers; i++) {
// //     const numbers: boolean | number[] = [] as const;

// //     if (i % 2 === 0) {
// //       if (i % 2 === 0) {
// //         numbers.push(i);
// //         console.log(numbers[0]);
// //       }
// //     } else {
// //       continue;
// //     }
// //   }
// // }

// // getTrueOrFalseNumbers(minUserNumbers, maxUserNumbers);


// Написать функцию, которая выводит все четные или не-
// четные числа, в указанном пользователем диапазоне. Какие
// числа выводить, определяется третьим параметром типа
// boolean (true – четные, false – нечетные).


// let i = 0;

// function getTrueOrFalseNumbers(minUserNumbers: number, maxUserNumbers: number) {
//   for (i = minUserNumbers; i <= maxUserNumbers; i++) {
//     const numbs: number[] = [] as const;

//     if (minUserNumbers % 2 == 0 && maxUserNumbers % 2 == 0 && count === 1) {
//       if (i % 2 == 0) {
//         numbs.push(i);
//         console.log(numbs[0]);
//       }
//     }

//     if (minUserNumbers % 1 == 0 && maxUserNumbers % 1 == 0 && count === 0) {
//       if (i % 1 == 0 && i % 2 != 0) {
//         numbs.push(i);
//         console.log(numbs[0]);
//       }
//     } else {
//       continue
//     }
//   }
// }

// console.log(getTrueOrFalseNumbers(minUserNumbers, maxUserNumbers));


// const num1 = parseInt(prompt('Введите первое число', '')as string)as number;
// const num2 = parseInt(prompt('Введите второе число', '')as string)as number;
// const num3 = parseInt(prompt('Введите третье число', '')as string)as number;
// const num4 = parseInt(prompt('Введите четвертое число', '')as string)as number;
// const num5 = parseInt(prompt('Введите пятое число', '')as string)as number;

//   function comparison(num1: number, num2: number, num3: number, num4: number, num5: number) {
//     if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//       console.log(num1);
//     } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//       console.log(num2);
//     } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//       console.log(num3)
//     } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//       console.log(num4);
//     } else {
//       console.log(num5);
//     }
//   }

//   comparison(num1, num2, num3, num4, num5);


// const num1 = parseInt(prompt('Введите первое число', '')as string)as number;
// const num2 = parseInt(prompt('Введите второе число', '')as string)as number;
// const num3 = parseInt(prompt('Введите третье число', '')as string)as number;
// const num4 = parseInt(prompt('Введите четвертое число', '')as string)as number;
// const num5 = parseInt(prompt('Введите пятое число', '')as string)as number;

// function addition(num1:number, num2:number, num3:number, num4:number, num5:number) {
//   return num1 + num2 + num3 + num4 + num5
// }

// console.log(addition(num1, num2, num3, num4, num5));

// ну это совсем простенький счетчик времени и даты
// проверку на корректность данный я доделаю после
// сейчас хочу добить четные и нечетные числа

// function validateTime( hours: number, minutes: number, second: number ): boolean {
//   if(hours<0 || hours>23 || minutes<0 || minutes>59 || second<0 || second>59) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function userGlobalTime() {
//   const hours = parseInt(prompt('Введите часы (0-23)' || '0', '10')as string)as number;
//   const minutes = parseInt(prompt('Введите минуты (0-59) ','')as string)as number;
//   const second = parseInt(prompt('Введите секунды (0-59) ','')as string)as number
//   if(validateTime(hours, minutes, second)){
//     console.log(`Введено корректное время ${hours}:${minutes}:${second}`);
//   } else {
//     console.log('Введено некорректное время')
//   }
// }

// userGlobalTime();

// function validateDate(day: number, month: number, year: number): boolean {
//   if(day<=0 || day>31 || month<=0 || month>12 || year<1902 || year>2024) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function userGlobalDate() {
//   let day = parseInt(prompt('Введите день (1-31) ','')as string)as number;
//   const month = parseInt(prompt('Введите месяц (1-12) ','')as string)as number;
//   const year = parseInt(prompt('Введите год (1902-2024) ','')as string)as number;
//   if (validateDate(day, month, year)) {
//     day++
//     console.log(`Ваше время днем в будущем ${day}.${month}.${year}`);
//     day--
//     day--
//     console.log(`Ваше время днем в прошлом ${day}.${month}.${year}`);
//   } else {
//     console.log('Введено некорректное время')
//   }

// }

// userGlobalDate()

// Написать функцию, которая реализует работу оператора %.
// Функция принимает 2 параметра и возвращает остаток от
// деления первого параметра на второй. В функции использовать только + - * /, оператор % не использовать.



// 1

// const userFactorial = parseInt(prompt('Введите число ')as string)as number
// const subsume = 1
// const factorial = 1

// function factorialCalc(factorial: number, subsume: number) {
//   factorial = factorial * subsume
//   if (subsume < userFactorial) {
//     subsume++
//     return factorialCalc(factorial, subsume)
//   }
//   console.log(factorial)
// }

// factorialCalc(factorial, subsume)

// const userInput = parseInt(prompt('Введите число ')as string)as number
// let trueFactorial = 1
// let i = 0

// for (i = 1 ; i <= userInput; i++) {
//   trueFactorial = trueFactorial * i

// }

// console.log(trueFactorial)

// if (userInput > 0) {
//   while (i < userInput) {
//     console.log('(')
//     ++i
//   }
// } else if (userInput < 0) {
//   while (i > userInput) {
//     console.log(')')
//   }
// }

// obj

// class Point {
//   constructor(
//     public x: number,
//     public y: number
//   ) {}
// }

// class Rectangle {
//   constructor(
//     public top_left: Point,
//     public bottom_right: Point
//   ) {}

//   getInfo(): void {
//     console.log(
//       'Coordinates of the rectangle: (' +
//         (this.top_left.x + ', ' + this.bottom_right.y) +
//         ')'
//     );
//     console.log('Height of rectangle: (' + this.bottom_right.y + ')');
//     console.log('Width of rectangle: (' + this.top_left.x + ')');
//   }

//   getS(): number {
//     return Math.abs(this.bottom_right.y * this.top_left.x);
//   }

//   getP(): number {
//     return Math.abs(this.bottom_right.y * 2 + this.top_left.x * 2);
//   }

  // getWidth():number {
  //  return  Math.abs(this.bottom_right.x - this.top_left.x)
  // }

  // это ненужный код который я оставил лишь для того что бы показать что я не балбес который ничего не делает
  // но суть в том что данный блок кода никак не меняет итоговый результат что значит что либо я балбес который ничего не умеет либо то что этот код sheet

  // getHeigth():number {
  //  return  Math.abs(this.bottom_right.y - this.top_left.y)
  // }
// }

// const userChange = prompt('уменьшить или увеличить? ') as string;
// const userGrafics = prompt('ширина или высота? ') as string;
// const userNumber = parseInt(
//   prompt('введите величину изменений') as string
// ) as number;

// function getMassiveOfNumbers(
//   userChange: string,
//   userGrafics: string,
//   userNumber: number,
//   rectangle: Rectangle
// ): number {
//   if (userChange == 'уменьшить') {
//     if (userGrafics == 'ширина') {
//       return Math.abs(rectangle.top_left.x - userNumber);
//     } else if (userGrafics == 'высота') {
//       return Math.abs(rectangle.bottom_right.y - userNumber);
//     }
//     // else if (userGrafics == 'ширина и высота') {
//     // return Math.abs((rectangle.bottom_right.y - userNumber) || (rectangle.top_left.x - userNumber))
//     // }
//   } else if (userChange == 'увеличить') {
//     if (userGrafics == 'высота') {
//       return Math.abs(rectangle.bottom_right.y + userNumber);
//     } else if (userGrafics == 'ширина') {
//       return Math.abs(rectangle.top_left.x + userNumber);
//     }
//     // else if (userGrafics == 'ширина и высота') {
//     // return Math.abs((rectangle.bottom_right.y + userNumber) || (rectangle.top_left.x + userNumber))
//     // }
//   }
//   return 1;
// }

// const topLeftPoint = new Point(5, 0);
// const bottomRightPoint = new Point(0, 15);
// const rectangle = new Rectangle(topLeftPoint, bottomRightPoint);

// console.log(rectangle.getS());

// console.log(rectangle.getP());

// console.log(
//   getMassiveOfNumbers(userChange, userGrafics, userNumber, rectangle)
// );

// // console.log(rectangle.getHeigth())
// // console.log(rectangle.getWidth())

// rectangle.getInfo();


// obj 

// interface Rectangle {
//   top_left: {x:number, y:number}
//   bottom_right: {x:number, y:number}
// }

// const rectangle: Rectangle = {
//   top_left: {
//     x: 5,
//     y: 0
//   },
//   bottom_right: {
//     x: 0,
//     y: 15
//   }
// }

// // tl(x1,y1) br(x2,y2)

// // Функция принимает объект-прямоугольник и выводит
// // информацию о нем (где какая точка расположена).
// function getInfo(rect:Rectangle) {
//    return "top left: " + rect.top_left.x + ", " + "bottom right: " +rect.bottom_right.y
// }

// console.log("Coordinates points of rectangle (" + getInfo(rectangle) + ")")

// // Функция принимает объект-прямоугольник и возвращает
// // его ширину.
// function getWidth(rect:Rectangle):number {
//   return  Math.abs(rect.top_left.x - rect.bottom_right.x)
// }

// console.log("Width of rectangle: (" + getWidth(rectangle) + ")");

// // Функция принимает объект-прямоугольник и возвращает
// // его высоту.
// function getHeigth(rect:Rectangle):number {
//   return  Math.abs(rect.bottom_right.y - rect.top_left.y)
// }

// console.log("Height of rectangle: (" + getHeigth(rectangle) + ")");

// // Функция принимает объект-прямоугольник и возвращает
// // его площадь.
// function getSquareOfRectangle(rect:Rectangle) {
//   return Math.abs((rect.bottom_right.y - rect.top_left.y) * (rect.bottom_right.x - rect.top_left.x))
// }

// console.log("Square of rectangle: (" + getSquareOfRectangle(rectangle) + ")")
// // Функция принимает объект-прямоугольник и возвращает
// // его периметр.
// function getPerimeterOfRectangle(rect:Rectangle) {
//   return Math.abs(((rect.bottom_right.y - rect.top_left.y) - (rect.bottom_right.x - rect.top_left.x)) * 2)
// }
// console.log("Perimeter of rectangle : (" + getPerimeterOfRectangle(rectangle) + ")")

// // Функция изменения ширины прямоугольника. Она прини-
// // мает объект-прямоугольник и на сколько единиц изменить
// // ширину.
// function getChangeWidth(rect:Rectangle, addWidth:number) {
//   return rect.bottom_right.x += addWidth
// }

// console.log("Changed width of rectangle : (" + getChangeWidth(rectangle, 5) + ")")

// // Функция изменения высоты прямоугольника. Она прини-
// // мает объект-прямоугольник и на сколько единиц изменить
// // высоту.
// function getChangeHeigth(rect:Rectangle, addHeight:number) {
//   return rect.bottom_right.y += addHeight
// }

// console.log("Changed heigth of rectangle : (" + getChangeHeigth(rectangle, 5) + ")")

// // Функция изменения ширины и высоты прямоугольника.
// // Она принимает объект-прямоугольник и два значения –
// // для изменения ширины и высоты.
// function getChangeHeigthAndWidth(rect:Rectangle, change:number) {
//   return (rect.bottom_right.y += change) + ", " + (rect.bottom_right.x += change)
// }

// console.log("Changed heigth and width of rectangle : ("+ getChangeHeigthAndWidth(rectangle, 5) + ")")

// // Функция смещения прямоугольника по оси X. Она при-
// // нимает объект-прямоугольник и на сколько единиц его
// // сдвинуть.
// function moveRectangleOnXAxis(rect:Rectangle, change:number) {
//   rect.bottom_right.x += change, rect.top_left.x += change
// }

// moveRectangleOnXAxis(rectangle, 3)

// // Функция смещения прямоугольника по оси Y. Она при-
// // нимает объект-прямоугольник и на сколько единиц его
// // сдвинуть.
// function moveRectangleOnYAxis(rect:Rectangle, change:number) {
//   rect.bottom_right.y += change, rect.top_left.y += change
// }

// moveRectangleOnYAxis(rectangle, 1)

// // Функция смещения прямоугольника и по оси X и по
// // оси Y. Она принимает объект-прямоугольник и два значе-
// // ния: сдвиг по оси X и сдвиг по оси Y.
// function moveRectangleOnTwoAxis(rect:Rectangle, change:number) {
//   rect.bottom_right.x += change, rect.top_left.x += change
//   rect.bottom_right.y += change, rect.top_left.y += change
// }

// moveRectangleOnTwoAxis(rectangle, 5)

// // Функция для проверки, находится ли точка внутри пря-
// // моугольника. Она принимает объект-прямоугольник и
// // координаты точки.
// function checkingForValidityPoints(rect:Rectangle) {
//  return rect.top_left.x, rect.bottom_right.y
// }

// checkingForValidityPoints(rectangle)

// // в последнем не совсем понял принцип но если что спрошу в четверг если не забуду 
// // а так вроде все верно ну или хотя бы приблизительно :)

// // массивы задание 1

// // Создать массив из 10 случайных чисел и написать несколько
// // функций для работы с ним.
// const massiveOfNumbers: number[] = [1,3,8,2,0,7,5,9,4,6]

// // Функция принимает массив и выводит его на экран.
// function getMassive(massiveOfNumbers:number[]): number[] {
//   return massiveOfNumbers
// }
// console.log(getMassive(massiveOfNumbers))

// // Функция принимает массив и выводит только четные
// // элементы.
// function getEvenNumbers(massiveOfNumbers:number[]):number[] {
//   return massiveOfNumbers.filter(number => number % 2 === 0 || number === 0)
// }
// // с нулём при выводе массива разберемся позже

// console.log(getEvenNumbers(massiveOfNumbers))

// // Функция принимает массив и возвращает сумму всех
// // элементов массива.
// function getSumOfNumbers(massiveOfNumbers:number[]) {
//   return massiveOfNumbers.reduce((b, a) => b + a)
// }

// console.log(getSumOfNumbers(massiveOfNumbers))

// // Функция принимает массив и возвращает его максималь-
// // ный элемент.
// function getMaxNumber(massiveOfNumbers:number[]) {
//   return Math.max.apply(null, massiveOfNumbers)
// }

// console.log(getMaxNumber(massiveOfNumbers))

// // Функция добавления нового элемента в массив по ука-
// // занному индексу.
// function insertElementInMassive(massiveOfNumbers:number[]) {
//   massiveOfNumbers.splice(5, 0, 84)
//   return massiveOfNumbers
// }

// console.log(insertElementInMassive(massiveOfNumbers))

// // Функция удаления элемента из массива по указанному
// // индексу.

// function deleteElementInMassive(massiveOfNumbers:number[]) {
//   delete massiveOfNumbers[5]
//   return massiveOfNumbers
// }

// console.log(deleteElementInMassive(massiveOfNumbers))
// // ну вроде работает :)

// // массивы задание 2

// const arr2:number[] = [0, 5, 36, 12, 3]

// // Функция принимает 2 массива и возвращает новый мас-
// // сив, в котором собраны все элементы из двух массивов
// // без повторений.
// function getMassives(arr2:number[],massiveOfNumbers:number[]) {
//   return massiveOfNumbers.filter(element => arr2.includes(element))
// }

// console.log(getMassives(arr2, massiveOfNumbers))

// // Функция принимает 2 массива и возвращает новый массив,
// // в котором собраны общие элементы (то есть элементы,
// // которые встречаются и в первом и во втором массивах)
// // без повторений.
// function getSecondMassives(arr2:number[],massiveOfNumbers:number[]) {
//   return arr2.filter(element => massiveOfNumbers.includes(element))
// }

// console.log(getSecondMassives(arr2,massiveOfNumbers))


// Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.

// function transformString(str: string): string {
//   let transformedStr = '';

//   for (const char of str) {
//       if (/[A-ZА-Я]/.test(char)) {
//           transformedStr += char.toLowerCase();
//       } else if (/[a-zа-я]/.test(char)) {
//           transformedStr += char.toUpperCase();
//       } else if (/[0-9]/.test(char)) {
//           transformedStr += '_';
//       } else {
//           transformedStr += char;
//       }
//   }

//   return transformedStr;
// }

// const inputString: string = 'Пример строки 123 с Большими и Маленькими Буквами!';
// const transformedString: string = transformString(inputString);
// console.log(transformedString);

// Написать функцию, которая преобразует названия css-
// стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, text-
// align в textAlign.

// function transformCssStyle(cssStyle: string): string {
//   return cssStyle.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
// }

// const cssStyle1: string = 'font-size';
// const cssStyle2: string = 'background-color';
// const cssStyle3: string = 'text-align';

// console.log(transformCssStyle(cssStyle1)); // fontSize
// console.log(transformCssStyle(cssStyle2)); // backgroundColor
// console.log(transformCssStyle(cssStyle3)); // textAlign

// Написать функцию, которая принимает словосочетание
// и превращает его в абревиатуру.
// Например: cascading style sheets в CSS, объектно-
// ориентированное программирование в ООП.

// function createAbbreviation(phrase: string): string {
//   const words: string[] = phrase.split(' ');
//   let abbreviation: string = '';

//   for (const word of words) {
//       abbreviation += word[0].toUpperCase();
//   }

//   return abbreviation;
// }

// const phrase1: string = 'cascading style sheets';
// const phrase2: string = 'объектно-ориентированное программирование';

// console.log(createAbbreviation(phrase1)); // CSS
// console.log(createAbbreviation(phrase2)); // ООП

// * pz 7
// Написать функцию которая считает количество слов в
// предложении
const inputSum = document.getElementById('firtheen')as HTMLInputElement
const outputSum = document.getElementById('fifteen')as HTMLOutputElement
const btnSum = document.getElementById('btn_7')as HTMLButtonElement

function getValue(str:string) {
  const arr = str.split(' ');
  return arr.length;
}

btnSum.addEventListener('click', function(){
  const inputValue = inputSum.value 
  const getSum = getValue(inputValue)
  outputSum.value = getSum as unknown as string
})

// const result = getValue('crambole avokado')
// console.log(result)

// * pz 8
// Написать функцию, которая возвращает самое длинное
// слово из предложения
const inputLonger = document.getElementById('sixteen')as HTMLInputElement
const outputLonger = document.getElementById('seventeen')as HTMLOutputElement
const btnLonger = document.getElementById('btn_8')as HTMLButtonElement

// type arrStr = string|string[]

function getLonger(str:string) {
 const words:string[] = str.split(' ')
 let longestWord = ''
  words.forEach((word) => {
    if(word.length>longestWord.length) {
      longestWord = word
    }
  });
  console.log(longestWord)
  return longestWord
}


btnLonger.addEventListener('click', function(){
  const inputValue = inputLonger.value 
  const getFunctionLonger = getLonger(inputValue)
  outputLonger.value = getFunctionLonger
})

// * pz3 функция считает количество гласных в полученной строке


const inputCalculate = document.getElementById('six')as HTMLInputElement;
const outputCalculate = document.getElementById('seven')as HTMLOutputElement;
const btnCalculate = document.getElementById('btn_3')as HTMLButtonElement;
const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const rusUpper = rusLower.toUpperCase();
const enLower = 'abcdefghijklmnopqrstuvwxyz';
const enUpper = enLower.toUpperCase();
const rus = rusLower + rusUpper;
const en = enLower + enUpper;

function countVowels(str:string) {
  const vowelsEn = ['a', 'e', 'i', 'o', 'u', 'y'];
  const vowelsRu = ['а', 'о', 'у', 'ы', 'э', 'е', 'ё', 'и', 'ю', 'я'];
  let count = 0;
  
  for (const char of str.toLowerCase()) {
    if (en.includes(char) && vowelsEn.includes(char)) {
      count++;
    } else if (rus.includes(char) && vowelsRu.includes(char)) {
      count++;
    }
  }
  
  return count;
}

btnCalculate.addEventListener('click', function() {
  const inputValue = inputCalculate.value
  const vowelCount = countVowels(inputValue);
  outputCalculate.value = vowelCount as unknown as string;
});

// Написать функцию вывода текста по заданному шаблону.
// Функция принимает первым параметром шаблон, в тексте
// которого может использоваться %, после символа % ука-
// зывается индекс входного параметра. При выводе вместо
// %индекс необходимо вывести значение соответствующего
// входного параметра.
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
// 8, 2020) должна вывести “Today is Monday 10.8.2020”.

// function,print(template: string, ...values: any[]): void {
//   let result: string = template;

//   for (let i = 0; i < values.length; i++) {
//       const placeholder = new RegExp(`%${i + 1}`, 'g');
//       result = result.replace(placeholder, values[i]);
//   }

//   console.log(result);
// }

// print('Today is %1 %2.%3.%4', 'Monday', 10, 8, 2020);


// Написать функцию, которая преобразует названия css-
// стилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, text-
// align в textAlign.

// function transformCssStyle(cssStyle: string): string {
//   return cssStyle.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
// }

// const cssStyle1: string = 'font-size';
// const cssStyle2: string = 'background-color';
// const cssStyle3: string = 'text-align';

// console.log(transformCssStyle(cssStyle1)); // fontSize
// console.log(transformCssStyle(cssStyle2)); // backgroundColor
// console.log(transformCssStyle(cssStyle3)); // textAlign