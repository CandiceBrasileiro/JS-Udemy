// (condicao) ? 'valor para verdadeiro' : 'valor para falso'
const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);

//if (pontuacaoUsuario >= 1000) {
//    console.log("usuário VIP");
//} else {
//    console.log("usuário normal");
//}

