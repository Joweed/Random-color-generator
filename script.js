function gerarCorAleatoria() {
    let numero = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return '#' + numero;
}
let hue = 0;
let saturation = 100;
let lightness = 50;

const slider = document.getElementById("brightness");

let corAtual = null;

const listaCores = document.querySelectorAll('#listaCores li');
let historicoCores = [];

const btnCopiar = document.querySelector('#copiar');
const msgCopiada = document.querySelector('#corCopiada');
const preview = document.querySelector('#preview');
const btnGerar = document.querySelector('#button');
const btnReset = document.querySelector('#reset');
const containerTexto = document.getElementById("containerTexto");
const btnVariacao = document.querySelector ('#variacoesBtn');
const cores = document.querySelectorAll('.cor')
const corBase = localStorage.getItem('corSelecionada');

if (btnCopiar) btnCopiar.style.display = 'none';
if (msgCopiada) msgCopiada.style.display = 'none';


function mostrarMensagem(cor){
    msgCopiada.style.display = 'block';
    msgCopiada.textContent = 'Cor copiada: ' + cor;

    // setTimeout(() => {
    //     msgCopiada.style.display = 'none';
    // },1500);
}


function atualizarHistorico(){

    listaCores.forEach((li,index)=>{

        if(historicoCores[index]){

            li.style.background = historicoCores[index];

            li.onclick = () => {

                // 🔁 volta a cor pro preview
                corAtual = historicoCores[index];
                preview.style.background = corAtual;

                // opcional: esconder mensagem
                msgCopiada.style.display = 'none';
            };

        }else{

            li.style.backgroundColor = 'transparent';

        }

    });

}


// botão gerar
btnGerar.addEventListener('click',function(){

    corAtual = gerarCorAleatoria();

    console.log('Cor gerada:',corAtual);

    preview.style.background = corAtual;

    historicoCores.unshift(corAtual);

    if(historicoCores.length > 9){
        historicoCores.pop();
    }

    atualizarHistorico();

    btnCopiar.style.display = 'inline-block';

    msgCopiada.style.display = 'none';

});


// clicar no preview copia a cor
preview.addEventListener('click',()=>{

    if(!corAtual) return;

    navigator.clipboard.writeText(corAtual);
    mostrarMensagem(corAtual);

});


// botão copiar
btnCopiar.addEventListener('click',function(){

    if(!corAtual){
        alert("Gere uma cor primeiro!");
        return;
    }

    navigator.clipboard.writeText(corAtual);
    mostrarMensagem(corAtual);

});


// reset
btnReset.addEventListener('click',function(){

    corAtual = null;

    preview.style.background = '';

    document.body.style.background = 'white';

    msgCopiada.style.display = 'none';

});

btnVariacao.addEventListener('click', function(){

    if (!corAtual) {
        alert("Gere uma cor primeiro!");
        return;
    }

    localStorage.setItem('corSelecionada', corAtual);
    window.location.href = 'palette.html';

});