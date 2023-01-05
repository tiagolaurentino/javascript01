//function scope
let pensei = 'ola tudo bem'

function createPensar(pensei) {
    pensei = 'pensamento' //esse nome pensei vai se chamar obrigatoriamente pensamento
    return pensei
}
//console.log(pensei)
console.log(createPensar(pensei))
console.log(pensei)

/*os 2 consoles ira escrever "Ola tudo bem" */