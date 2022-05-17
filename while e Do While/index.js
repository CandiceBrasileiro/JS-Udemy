//                      WHILE

// const nome = 'Luiz';
// let i = 0;

// while (i < nome.length) {
//     console.log(nome[i]);
//     i++; //se esquecer de colocar o ++ ele se torna infinito, pq o 0 sempre vai ser menor igual a 10
// }

// console.log('Segue a vida');

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
console.log('######');

//################ DO WHILE #####################

do {
    console.log(rand);
} while(rand !== 0);