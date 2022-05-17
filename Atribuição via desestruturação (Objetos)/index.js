const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'av Brasil',
        numero: 320
    }
};

//const nome = pessoa.nome; //atribuição normal


//Atribuição via desestruturação
// const { nome, sobrenome, idade } = pessoa;
// console.log(nome, sobrenome);

// const { nome: n = '', sobrenome } = pessoa;
// console.log(n, sobrenome);

// const { endereco } = pessoa;
// console.log(rua);

// const { endereco: { rua, numero } } = pessoa;
// console.log(rua);

// const { endereco: { rua, numero }, endereco } = pessoa;
// console.log(rua, numero, endereco);

// const { endereco: { rua: r = 12345, numero }, endereco } = pessoa;
// console.log(r, numero, endereco);

const { nome, ...resto } = pessoa;
console.log(nome, resto);