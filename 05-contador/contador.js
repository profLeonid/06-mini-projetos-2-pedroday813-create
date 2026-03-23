'use strict'

import { criarListaNumeros, criarListaNumerosPares, criarListaNumerosImpares, criarListaPotencia2 } from "./listaNumericas.js"




const gerarnumeros = document.getElementById("gerarnumeros")




function preencherLista() {
    const quantidade = Number(document.getElementById("Quantidade").value)
    const tabela = document.getElementById("tabela")

    const listaNumeros = criarListaNumeros(quantidade)
    const listaNumerosPares = criarListaNumerosPares(quantidade)
    const listaNumerosImpares = criarListaNumerosImpares(quantidade)
    const listaPotencia2 = criarListaPotencia2(quantidade)

    const tr = document.createElement("tr")
    const tdNumeros = document.createElement("td")
    const tdNumerosPares = document.createElement("td")
    const tdNumerosImpares = document.createElement("td")
    const tdPotencia2 = document.createElement("td")
}


gerarnumeros.addEventListener("click", preencherLista)