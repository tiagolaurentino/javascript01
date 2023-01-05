/*let tiago = function(number01, number02){
    console.log(number01 + number02)

}
//tiago(2,5)*/

let estudante = [
   ' tiago', 
    'joao',
    'Pedro',
    'Maria',
    'Antonio',
]

console.log(estudante[2])

const animais ={
    nome: 'cavalo',
    speed: 50,
    nome1: 'leão',
    speed1: 70,
    nome2: 'cachorro',
    speed2: 45,
    nome3: 'onça',
    speed3: 90, 

    correr(correr=0){
        console.log('correu')
        this.speed += correr
    }
}
console.log(`${animais.nome} correu ${animais.speed} kh e o ${animais.nome1} correu ${animais.speed1} kh
o ${animais.nome2} correu ${animais.speed2} kh a ${animais.nome3} correu ${animais.speed3} kh
`)