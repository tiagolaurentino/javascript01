//funçao em um liquidificador

function fazerSuco(fruta1, fruta2, fruta3){
    return 'suco de: '  + fruta1 + ' e ' + fruta2 + ' e ' + fruta3
}

const copo = fazerSuco('banana','maça','pera')

console.log(copo)

//função de um prato

function fazerAlmoço(comida1, comida2, comida3){
    return 'almoço de: ' + comida1 + ' e ' + comida2 + ' e ' + comida3
}

const prato = fazerAlmoço('feijão', 'arroz', 'peixe')

console.log(prato)

function fazerBolo(bolo1, bolo2, bolo3){
    return 'bolo de: '+ bolo1 + ' e ' + bolo2 + ' e ' + bolo3
}

const forma = fazerBolo('laranja', 'chocolate', 'baunilha')

console.log(forma)



function comprarCarro(carro1, carro2, carro3){
   
    return `Comprei o ${carro1} o ${carro2} e o ${carro3}`
}

let garage = comprarCarro('uno', 'Hb20', 'palio')

console.log(garage)