/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925
Luiz Otávio Nasceu em 1980
*/

const nome= 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;

let calculoIMC = peso/(altura*altura)
console.log(calculoIMC)

let anoNascimento = 2021 - idade
console.log(anoNascimento);

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem ' + altura + ' de altura e seu IMC é de '+ calculoIMC);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);