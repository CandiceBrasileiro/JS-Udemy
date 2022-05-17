// let a = 'A'; //B
// let b = 'B'; //C
// let c = 'C' //A

// // const numeros = [1, 2, 3];
// // [a, b, c] = numeros;

// const letras = [b, c, a];
// [a, b, c] = letras;

// console.log(a, b, c);
//               0  1  2  3  4  5  6  7  8  índice
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //valor
// //const [primeiroNumero, segundoNumero, ...resto] = numeros;
// const [um, , tres, , cinco, , sete] = numeros;
// // ...rest, ...spread
// console.log(um, tres, cinco);
// //console.log(resto);

//                    0          1          2       coluna
//                 0  1  2    0  1  2    0  1  2    linha
// const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

// console.log(numeros[1][2]);

//                    0          1          2       coluna
//                 0  1  2    0  1  2    0  1  2    linha
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;

console.log(lista3[2]);

// {}