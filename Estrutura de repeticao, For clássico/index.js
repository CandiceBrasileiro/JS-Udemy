// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');

 //(variável, condição, incrementar ou decrementar a 
 //variável de controle)
// i - index
// for (let i = 0; i <= 100; i++) {
//     console.log(`Linha ${i} `);
// } //não tem ';'

// for (let i = -10; i <= 10; i += 10) {
//     console.log(`Linha ${i} `);
// }

// for (let i = 100; i >= 80; i -= 10) {
//     console.log(`Linha ${i} `);
// }

// for (let i = 0; i <=10 ; i++) {
//     const par = i % 2 === 0;
//     console.log(i, par);
// }

// for (let i = 0; i <=10 ; i++) {
//     const par = i % 2 === 0 ? 'par' : 'ímpar';
//     console.log(i, par);
// }

const frutas = ['maça', 'pêra', 'uva', 'banana', 'morango', 'caja'];
console.log(frutas.length);

for (let i = 0; i < frutas.length; i++) {
    //console.log(i);
    console.log(`Índice ${i}`, frutas[i]);
}