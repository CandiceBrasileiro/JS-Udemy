// com objetos

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

for (let valor of pessoa) {
    console.log(valor);
};
//TypeError: pessoa is not iterable at Object.

// For clássico - geralmente com iteráveis (arrays ou strings)
// For in - retorna o índice ou chave (string, array ou objetos)
// For of - retorna o valor em si (iteráveis, arrays ou strings)

// for (let chave in pessoa) {
//     console.log(chave, pessoa[chave]);
// }



// com array
//            0123...
// const nome = ['Candice', 'Lopes', 'Brasileiro'];

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// console.log('#######');

// for (let i in nome) {
//     console.log(nome[i]);
// }

// console.log('#######');

// for (let valor of nome) {
//     console.log(valor);
// }

// nome.forEach(function(valor, indice, array) {
//     console.log(valor, indice, array);    
// });