function gerarCorAleatoria() {
    let numero = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return '#' + numero;
}

let corAtual = null;  // Armazena a cor gerada

// referências aos elementos que dependem da geração de cor
const btnCopiar = document.querySelector('#copiar');
const msgCopiada = document.querySelector('#corCopiada'); // atualiza para o id real do HTML
// garantir estado inicial oculto
if (btnCopiar) btnCopiar.style.display = 'none';
if (msgCopiada) msgCopiada.style.display = 'none';

// Botão "Gerar" (assumindo id="button")
document.querySelector('#button').addEventListener('click', function() {
    corAtual = gerarCorAleatoria();
    console.log('Cor gerada:', corAtual);
    document.querySelector('#preview').style.backgroundColor = corAtual;  // Mostra prévia da cor
    // mostro o botão copiar quando há uma cor
    if (btnCopiar) btnCopiar.style.display = 'inline-block';
    // toda vez que gerar uma nova cor, escondemos a mensagem de cópia
    if (msgCopiada) msgCopiada.style.display = 'none';
});

// Botão "Aplicar" (assumindo id="aplicar")
document.querySelector('#aplicar').addEventListener('click', function() {
    if (corAtual) {
        document.body.style.backgroundColor = corAtual;
        console.log('Cor aplicada:', corAtual);
        this.disabled = true;  // Desabilita o botão Aplicar
        document.querySelector('#button').disabled = true;  // Desabilita o botão Gerar
        document.querySelector('#reset').style.display = 'block';
    } else {
        alert("Gere uma cor primeiro!");
        console.log('Gere uma cor primeiro!');
    }
});

// Botão "Reset"
document.querySelector('#reset').addEventListener('click', function() {
    document.querySelector('#button').disabled = false;
    document.querySelector('#aplicar').disabled = false;
    corAtual = null;
    document.querySelector('#preview').style.backgroundColor = '';
    document.body.style.backgroundColor = 'white';
    if (msgCopiada) msgCopiada.style.display = 'none';
    this.style.display = 'none';
});

// Botão "Copiar"
if (btnCopiar) {
    btnCopiar.addEventListener('click', function() {
    if (corAtual) {
        navigator.clipboard.writeText(corAtual).then(function() {
            // exibe a mensagem embaixo do botão copiar
            if (msgCopiada) {
                msgCopiada.style.display = 'block';
                msgCopiada.textContent = 'Cor copiada: ' + corAtual;
            } else {
                alert('corCopiada: ' + corAtual);
            }
        }).catch(function(err) {
            console.error('Erro ao copiar: ', err);
            alert('Erro ao copiar a cor.');
        });
    } else {
        alert("Gere uma cor primeiro!");
    }
});
}
