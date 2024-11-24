const stakeInput = document.getElementById('stake');
const porcentagemLucroInput = document.getElementById('porcentagemLucro');
const oddInput = document.getElementById('odd');
const valorApostaInput = document.getElementById('valorAposta');
const aviso = document.getElementById('aviso');


function calcularValorAposta() {
    const stake = parseFloat(stakeInput.value);
    const porcentagemLucro = parseFloat(porcentagemLucroInput.value);
    const odd = parseFloat(oddInput.value);


    if (isNaN(stake) || isNaN(porcentagemLucro) || isNaN(odd) || stake <= 0 || porcentagemLucro <= 0 || odd <= 1) {
        valorApostaInput.value = "Valores inválidos";
        aviso.textContent = "A odd deve ser maior que 1";
        aviso.style.color = "red"


        return;
    }
    aviso.textContent = "";
    const valorAposta = (stake * porcentagemLucro / 100) / (odd - 1);
    valorApostaInput.value = valorAposta.toFixed(2);
}

stakeInput.addEventListener('input', calcularValorAposta);
porcentagemLucroInput.addEventListener('input', calcularValorAposta);
oddInput.addEventListener('input', calcularValorAposta);


calcularValorAposta(); // Calcula o valor inicial