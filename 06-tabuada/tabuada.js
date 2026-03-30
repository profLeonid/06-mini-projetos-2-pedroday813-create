'use strict';

function gerarTabuada() {
  const numeroInput = document.getElementById('numero');
  const tabuadaBody = document.getElementById('tabuadaBody');

  const numero = Number(numeroInput.value);

  if (Number.isNaN(numero)) {
    alert('Digite um número válido antes de gerar a tabuada.');
    return;
  }

 //   if (numero < '1') {
 //     alert('Digite um número maior ou igual a 1.');
 //     return;
 //   }

  tabuadaBody.innerHTML = '';

  for (let i = 1; i <= 10; i += 1) {
    const adicao = numero + i;
    const subtracao = numero - i;
    const multiplicacao = numero * i;
    const divisao = (numero / i).toFixed(2);

    if (adicao < 0 || subtracao < 0 || multiplicacao < 0 || divisao < 0) {
      tabuadaBody.textContent = "ERRO: A resposta é negativa, entao nao sera exibida.";
      tabuadaBody.classList.add('negativo');
      return;
    }

    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${i}</td>
      <td>${adicao}</td>
      <td class="${subtracao < 0 ? 'negativo' : ''}">${subtracao}</td>
      <td>${multiplicacao}</td>
      <td>${divisao}</td>
    `;

    tabuadaBody.appendChild(tr);
  }
}

const botao = document.getElementById('gerarTabuada');
if (botao) {
  botao.addEventListener('click', gerarTabuada);
}
