// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

//const data = new Date(); //função construra sempre que começa com a primeira letra maiuscula

//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras + umDia); //01/01/1970 TimeStamp unix ou época unix marco zero

//const data = new Date(2022, 3, 20, 15, 14, 27); //janeiro começa do 0, abril é mês 3 ano, mes, dia, hora, minutos, segundos, milesimos de segundos

// const data = new Date(1649365149991);
// console.log('Dia', data.getDate());
// console.log('mês', data.getMonth() + 1); //mes começa do 0
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay());
// console.log(data.toString());  
//console.log(Date.now())

function formataData(data) {
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`; 
}
const data = new Date();
const dataBrasil = formataData(data);
formataData(data);