
// Simulador de Financiamento
'use strict';

function calcularFinanciamento() {
  const valorInput = document.getElementById('valor');
  const parcelasInput = document.getElementById('parcelas');
  const resultadoDiv = document.getElementById('resultado');
    const valor = Number(valorInput.value);
    const parcelas = Number(parcelasInput.value);

  if (Number.isNaN(valor) || Number.isNaN(parcelas)) {
    alert('Digite valores válidos para o valor e o número de parcelas.');
    return;
  }

    if (valor <= 0 || parcelas <= 0) {
    alert('O valor e o número de parcelas devem ser maiores que zero.');
    return;
  }

    const taxaJuros = 0.01; // Taxa de juros mensal (1%)
    const valorParcela = (valor * taxaJuros) / (1 - Math.pow(1 + taxaJuros, -parcelas));
    const valorTotal = valorParcela * parcelas;
    resultadoDiv.textContent = `Valor da Parcela: R$ ${valorParcela.toFixed(2)} | Valor Total: R$ ${valorTotal.toFixed(2)}`;
}

const botaoCalcular = document.getElementById('calcular');
if (botaoCalcular) {
  botaoCalcular.addEventListener('click', calcularFinanciamento);
}
