
// Simulador de Financiamento
'use strict';

function simularFinanciamento() {
  const valorInput = document.getElementById('valor');
  const taxaInput = document.getElementById('taxa');
  const parcelasInput = document.getElementById('parcelas');
  const financiamentoBody = document.getElementById('financiamentoBody');

  const valor = Number(valorInput.value);
  const taxa = Number(taxaInput.value);
  const parcelas = Number(parcelasInput.value);

  // Validação
  if (Number.isNaN(valor) || Number.isNaN(taxa) || Number.isNaN(parcelas)) {
    alert('Digite valores válidos para todos os campos.');
    return;
  }

  if (valor <= 0 || taxa < 0 || parcelas <= 0) {
    alert('O valor e número de parcelas devem ser maiores que zero.');
    return;
  }

  // Limpar tabela anterior
  financiamentoBody.innerHTML = '';

  // Calcular parcela fixa
  const valorParcela = valor / parcelas;
  let saldoDevedor = valor;

  // Simular mês a mês
  for (let mes = 1; mes <= parcelas; mes += 1) {
    const jurosDoMes = saldoDevedor * (taxa / 100);
    const totalDoMes = valorParcela + jurosDoMes;
    saldoDevedor -= valorParcela;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${mes}</td>
      <td class="col-parcela">R$ ${valorParcela.toFixed(2)}</td>
      <td class="col-juros">R$ ${jurosDoMes.toFixed(2)}</td>
      <td class="col-total">R$ ${totalDoMes.toFixed(2)}</td>
      <td class="col-saldo">R$ ${Math.max(0, saldoDevedor).toFixed(2)}</td>
    `;

    financiamentoBody.appendChild(tr);
  }
}

const botaoSimular = document.getElementById('simular');
if (botaoSimular) {
  botaoSimular.addEventListener('click', simularFinanciamento);
}
