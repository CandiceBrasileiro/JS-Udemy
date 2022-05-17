const verdadeira = true;

//Let tem escopo de bloco { ... bloco} 
//Var só tem escopo de função

let nome = 'Luiz'; //criando
var nome2 = 'Luiz';

var nome2 = 'Otavio'; //redeclarada

if (verdadeira) {
    let nome = 'Otávio'; //criando
    var nome2 = 'Otávio'; //Rederclarada
    //console.log(nome, nome2);

    if (verdadeira) {
        var nome2 = 'Otávio'; //Redeclarada
        let nome = 'Outra coisa';
        console.log(nome, nome2);
    }
}