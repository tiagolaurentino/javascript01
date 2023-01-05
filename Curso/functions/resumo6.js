
/*let valor = 10

let valorA = valor >= 90 && valor <= 100
let valorB = valor >= 80 && valor <= 89
let valorC = valor >= 70 && valor <= 79
let valorD = valor >= 60 && valor <= 69
let valorF = valor < 60 && valor >= 0

let valorFinal

//console.log(valor >= 80 && valor <= 89) p testar

if(valorA){
    valorFinal = 'A'
} else if (valorB){
    valorFinal = 'B'
} else if (valorC){
    valorFinal = 'C'
} else if (valorD){
    valorFinal = 'D'
} else if (valorF){
    valorFinal = 'F'
} else {
    valorFinal = 'Valor invalido!!'
}

console.log(valorFinal)*/

//let valor = 50

function valorFinal(valor) {
    let valorA = valor >= 90 && valor <= 100
let valorB = valor >= 80 && valor <= 89
let valorC = valor >= 70 && valor <= 79
let valorD = valor >= 60 && valor <= 69
let valorF = valor < 60 && valor >= 0

let valorFinal

//console.log(valor >= 80 && valor <= 89) p testar

if(valorA){
    valorFinal = 'A'
} else if (valorB){
    valorFinal = 'B'
} else if (valorC){
    valorFinal = 'C'
} else if (valorD){
    valorFinal = 'D'
} else if (valorF){
    valorFinal = 'F'
} else {
    valorFinal = 'Valor invalido!!'
}

   return valorFinal
}

console.log(valorFinal(1))