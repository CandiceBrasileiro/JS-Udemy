/** OPERADORES ARITIMÉTICOS + - / *
 + ADIÇÃO E CONCATENAÇÃO

 ** potenciação console.log(num1 ** num2);

 % resto da divisão

 As contas respeitam ordem de precedência -> () ** * / % + -


 

const num1 = 10;
const num2 = 5;
console.log(num1 % num2);

let contador = 1;
contador++; //2
contador++; //3
console.log(contador);

// ++contador; //2
// ++contador++; //3
// console.log(contador);

// console.log(contador++); //resultado 1
// console.log(contador); // resultado 2

// console.log(++contador); resultado 2
// let contador = 10;
// console.log(--contador); resultado 9

// Incremento ++
// Decremento --

// NaN - Not a Number
const num1 = 10;
const num2 = 'Luiz';
console.log(num1*num2); resultado NaN




let contador = 2;
contador **= 2;
contador **= 2;
contador **= 2;
console.log(contador);
*/

const num1 = 10;
// const num2 = parseInt('5.2'); //pode ser parseFloat(decimais)
const num2 = Number('5');

console.log(num1 + num2);
console.log(typeof num2);