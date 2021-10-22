let seuVotoPara = document.querySelector('.divisao-1-1 span');
let cargo = document.querySelector('.divisao-1-2 span');
let descricao = document.querySelector('.divisao-1-4 span');
let aviso = document.querySelector('.divisao-2 span');
let lateral = document.querySelector('.divisao-1-right span');
let numeros = document.querySelector('.divisao-1-3 span');

let etapaAtual = 0;
let numero = '';


function comecarEtapa() {
    let etapa = etapas[etapaAtual];
    
    let numeroHtml = '';
    
    for(let i=0;i<etapa.numeros;i++) {
        numeroHtml += '<div class="numero"></div>';
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}
function atualizaInterface() {
    
}


function clicou(n) {
    alert("Clicou em "+n);
}
function branco() {
    alert("Clicou em BRANCO");
}
function corrige() {
    alert("Clicou em CORRIGE");
}
function confirma() {
    alert("Clicou em CONFIRMA");
}

comecarEtapa();