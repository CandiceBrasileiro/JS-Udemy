// FOR IN -> lê os índices ou chaves do objeto

// const frutas = ['Pêra', 'Maçã', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
    //console.log(frutas[i]);
//}

// for (let indice in frutas) { //acho que é equivalente ao faça ... até
//     console.log(frutas[indice]);
// }

// a palavra após o let substitui o que no for classico usamos o i

const pessoa = {
    nome: 'Candice',
    sobrenome: 'Lopes',
    idade: 34
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

