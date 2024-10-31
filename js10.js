//* 1-8 завдання повинно бути виконане через цикл forEach.
//1. Напишіть цикл, який виводить всі парні числа від 20 до 32.
console.log('* 1-8 завдання повинно бути виконане через цикл forEach. 1. Напишіть цикл, який виводить всі парні числа від 20 до 32.');
const arr1 = [];
for (let i = 20; i <= 32; i++) {
    arr1[arr1.length] = i;
}
arr1.forEach(el => {
    if (el % 2 === 0) {
        console.log(el);
    }
});
//2. Створіть масив зі списком:
//вашого улюбленого фрукту,
//вашого улюбленого кольору,
//ім'я,
//рандомного числа,
//вашого віку.
//Виведіть цей проітерований масив на консоль і визначте його тип даних.
console.log('2. Створіть масив зі списком:вашого улюбленого фрукту,вашого улюбленого кольору,імя,рандомного числа,вашого віку.Виведіть цей проітерований масив на консоль і визначте його тип даних.');
const arr2 = ['banana', 'black', 'Yaroslav', '7', '30']
arr2.forEach((el, ind) => {
    console.log(typeof arr2, el, ind);
});
//3. Напишіть цикл який виводить всі непарні числа від 17 до 39.
console.log('3. Напишіть цикл який виводить всі непарні числа від 17 до 39.');
const arr3 = [];
for (let i = 17; i <= 39; i++) {
    arr3[arr3.length] = i;
}
arr3.forEach(el => {
    if (el % 2 === 1) {
        console.log(el);
    }
});
//4. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи
console.log('4. Даний масив [1, 5, true, hello, false, null, iiii, 54, null], виведіть парні елементи');
const arr4 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
arr4.forEach((el, ind) => {
    if(ind % 2==0) {
        console.log(el); 
    }
});
//5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи
console.log('5. Даний масив [1, 5, true, hello, false, null, iiii, 54, null], виведіть не парні елементи');
const arr5 = [1, 5, true, 'hello', false, null, 'iiii', 54, null];
arr5.forEach((el, ind) => {
    if(ind % 2==1) {
        console.log(el);
    }
});
//6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.
console.log('6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.');
const arr6 = [1, 2, 4, 2, 3, 55, 66, 777, 12];
let res = 0;
arr6.forEach(el => {
    res += el;
    console.log(res);
});
//7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.
console.log('7. Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.');
const arr7 = [1, 2, 4, 2, 3, 5, 6, 7, 1];
let res1 = 1;
arr7.forEach(el => {
    res1 *= el;
    console.log(res1);
});
//8. Створіть prompt в якому потрібно проітерувати число з 0. 
//Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.
//Якщо це числа 100 і більше, завершити ітерацію.
console.log('8. Створіть prompt в якому потрібно проітерувати число з 0. Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.Якщо це числа 100 і більше, завершити ітерацію.');
let num = +prompt('Введіть число');
const arr8 = [];
for(i = 0; i < num; i++) {
    arr8[arr8.length] = i;
}
arr8.forEach(el => {
    if (el >= 5 && el <= 10) return;
    if (el >= 100) return;
    console.log(el);
});
//* Використовуємо Math
//9. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до меншого числа і повертає значення.
console.log('* Використовуємо Math* 9. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до меншого числа і повертає значення.');
const floor = n => Math.floor(n);
console.log(floor(1.34));
//10. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до більшого числа і повертає значення.
console.log('10. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до більшого числа і повертає значення.');
const ceil = n => Math.ceil(n);
console.log(ceil(55.43));
//11. Створіть функцію яка генерує рандомне число (випадкове) від 0 до 1000 і повертає його.
console.log('11. Створіть функцію яка генерує рандомне число (випадкове) від 0 до 1000 і повертає його.');
const random = n => Math.round(Math.random(n)*1000);
console.log(random(4));
//12. Створіть функцію яка приймає 2 числа та виодить степіть перше число основне, друге сама степіть.
console.log('12. Створіть функцію яка приймає 2 числа та виодить степіть перше число основне, друге сама степіть.');
const numbe = (num1, num2) => num1 ** num2;
console.log(numbe(2, 4));
//13. Створіть функцію яка приймає число, виводить з нього корінь, заокруглює його і повертає.
console.log('13. Створіть функцію яка приймає число, виводить з нього корінь, заокруглює його і повертає.');
const sqrt = n => Math.round(Math.sqrt(n));
console.log(sqrt(100));
//* Використовувати методи масивів* 14. Дано масив [1, 5, true], додати в кінець масиву 'Hello'
console.log('* Використовувати методи масивів 14. Дано масив [1, 5, true], додати в кінець масиву Hello');
let ar1 = [1, 5, true];
ar1.push('Hello')
console.log(ar1);
//15. Дано масив [1, 5, true], додати в початок масиву 'HelloArray'
console.log('15. Дано масив [1, 5, true], додати в початок масиву HelloArray');
ar1.unshift('HelloArray')
console.log(ar1);
///16. Дано масив [1, 5, true], видалити останній елемент з масиву
console.log('16. Дано масив [1, 5, true], видалити останній елемент з масиву');
ar1.pop();
console.log(ar1);
//17. Дано масив [1, 5, true], видалити перший елемент з масиву
console.log('17. Дано масив [1, 5, true], видалити перший елемент з масиву');
ar1.shift()
console.log(ar1);
//18. Дано масив [5, true, 'hello', false, null, 5] вирізати *в новий масив* з 1 по 5 індекс
console.log('18. Дано масив [5, true, hello, false, null, 5] вирізати *в новий масив* з 1 по 5 індекс');
let ar2 = [5, true, 'hello', false, null, 5];
console.log(ar2);
let newar2 = ar2.slice(1, 6);
console.log(newar2);
//19. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс дані
console.log('19. Дано масив [5, true, hello, false, null, 5] вирізати з 1 по 5 індекс дані');
let ar3 = [5, true, 'hello', false, null, 5];
console.log(ar3);
ar3.splice(1, 5)
console.log(ar3);
//20. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс та вставити 10, 100, 111, 222
console.log('20. Дано масив [5, true, hello, false, null, 5] вирізати з 1 по 5 індекс та вставити 10, 100, 111, 222');
console.log(ar2);
ar2.splice(1, 5, 10, 100, 111, 222)
console.log(ar2);
//21. Створені масиви під час виконанняцього завдання об'єднайте в рядок, а потім назад приведіть рядок в масив.
console.log('21. Створені масиви під час виконанняцього завдання обєднайте в рядок, а потім назад приведіть рядок в масив.');
let nevarr = ar1.concat(ar2,ar3);   // тут використав метод "concat" за наступного уроку який ми вивчили (добре,що пізніше почав робити цю дз, знадобився)).
console.log(nevarr);
let string = nevarr.join(', ');
console.log(nevarr, string);
let arrString = string.split()
console.log(arrString);