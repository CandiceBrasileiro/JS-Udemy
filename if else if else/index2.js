const numero = 10;

//if (numero >= 0 && numero <=5) {
//    console.log('O número está entre 0 e 5.');
//} else {
//    console.log('O número NÃO está entre 0 e 5')
//}


// apenas 1 condição de todo bloco if vai ser retornado verdadeiro

if ( numero <= 10) {
    console.log('O número é menor ou igual a 10');
}

if (numero >= 0 && numero <= 5) {
    console.log('O numero está entre 0 e 5');
} else if (numero >= 6 && numero <= 8) {
    console.log('O numero está entre 0 e 6');
} else if (numero >= 9 && numero <= 11) {
    console.log('O numero está entre 9 e 11');
} else { 
    ('O numero não está entre 0 e 11');
}