'use strict'

function criarListaNumeros(quantidade) {
    let ListaNumeros = []
    
    for (i=1; i <= quantidade; i++) {
        ListaNumeros.push(i)
    }
    return ListaNumeros
}

function criarListaNumerosPares(quantidade) {
    let ListaNumerosPares = []
    for (i=1; i <= quantidade; i++) {
        ListaNumerosPares.push(i)
    }
    return ListaNumerosPares
}

function criarListaNumerosImpares(quantidade) {
    let ListaNumerosImpares = []
    for (i=1; i <= quantidade; i++) {
        ListaNumerosImpares.push(i)
    }
    return ListaNumerosImpares
}

function criarListaPotencia2 (quantidade){
    let listaPotencia2
    for (let i=0; i<quantidade; 1++){
        listaPotencia2.push(2 ** i)
    }
    return listaPotencia2
}



