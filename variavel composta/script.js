let num = [5, 8, 2, 9, 3]
num.push(1)    //adicionar novo elemento sempre colocar do sort
num.sort()      //vai por em ordem o vetor começando do menor ao maior numero
num.length //comprimento do vetor que é 

console.log (num)
console.log(`O vetor tem ${num.length} posições`) //comprimento do vetor
console.log(`O primeiro numero do vetor é ${num[0]}`) //vetor sempre começa do 0

let pos = num.indexOf(9) //vai achar em qual posição do valor, exemplo o 5 esta na posição(chave)3
if(pos == -1){
    console.log('O valor não foi encontrado!!')//ao não encontrar o numero ele mostra -1
}else {

console.log(`O valor esta na posição ${pos}`) //ira mostrar a posição do valor 
}