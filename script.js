const agora = new Date();
const dianumber = agora.getDate()
const diasem = agora.getDay();
const  mes = agora.getMonth();
const ano = agora.getFullYear();
let mestxt = document.getElementById('mes');
let diatxt = document.getElementById('ndia');
let diasemtxt = document.getElementById('diasem');
let anotxt = document.getElementById('anotx')


switch(diasem){
    case 0 :
        diasemtxt.innerHTML = `Domingo`
        break;
    case 1 :
        diasemtxt.innerHTML = `Segunda-Feira`;
        break;
    case 2 :
        diasemtxt.innerHTML = `Terça-Feira`;
        break;
    case 3 :
        diasemtxt.innerHTML = `Quarta-Feira`;
        break;
    case 4 : 
        diasemtxt.innerHTML = `Quinta-Feira`;
        break;
    case 5 :
        diasemtxt.innerHTML = `Sexta-Feira`;
        break;
    case 6 :
        diasemtxt.innerHTML = `Sabado`;
        break;
    default :
        diasemtxt.innerHTML = `Invalido!!`
        break;     
}
switch(mes){
    case 0 :
        mestxt.innerHTML = 'JANEIRO';
        break;
    case 1 :
        mestxt.innerHTML = 'FEVEREIRO';
        break;
    case 2 :
        mestxt.innerHTML = 'MARÇO';
        break;
    case 3 :
        mestxt.innerHTML = 'ABRIL';
        break;
    case 4 :
        mestxt.innerHTML = 'MAIO';
        break;
    case 5 :
        mestxt.innerHTML = 'JUNHO';
        break;
    case 6 : 
        mestxt.innerHTML = 'JULHO';
        break;
    case 7 :
        mestxt.innerHTML = 'AGOSTO';
        break;
    case 8 :
        mestxt.innerHTML = 'SETEMBRO';
        break;
    case 9 :
        mestxt.innerHTML = 'OUTUBRO';
        break;
    case 10 :
        mestxt.innerHTML = 'NOVEMBRO';
        break;
    case 11 :
        mestxt.innerHTML = 'DEZEMBRO';
        break;
    default :
        mestxt.innerHTML = 'MES INVALIDO !!!';
}
diatxt.innerHTML = dianumber
anotxt.innerHTML = ano

function lado(){
let calen = document.getElementById('calendariotx');
let header = document.getElementById('mestxt')
let detalhes = document.getElementById('detailstxt')
calen.style.display = 'flex'
calen.style.flexDirection = 'row-reverse'
let semana = document.getElementById('diasem')
header.style.borderRadius = '0 2rem 2rem 0';
header.style.display = 'flex';
header.style.alignItems = 'center';
header.style.justifyContent = 'center';
header.style.padding = '1.5rem'
header.appendChild(anotxt);
header.style.flexDirection = 'column';
header.style.maxWidth = '50%'
detalhes.style.borderRadius = '1rem 0 0 1rem'
detalhes.style.padding = '2rem'
detalhes.style.maxWidth = '50%'


semana.style.fontSize = '1.5rem'
}
function normal(){

    let calen = document.getElementById('calendariotx');
    let header = document.getElementById('mestxt')
    let detalhes = document.getElementById('detailstxt')
    calen.style.display = 'flex';
    calen.style.flexDirection = 'column';
    header.style.borderRadius = '0 0 0 0';
    header.style.display = 'block';
    header.style.maxWidth = '100%'  
    
    detalhes.style.borderRadius = '0 0 2rem 2rem';
    detalhes.style.padding = '1rem'
    detalhes.style.maxWidth = '100%'

}