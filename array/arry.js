/*const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat', //Criação de um objeto dentro array N émuito certo fazer isso.
        age: 3
    }

]

console.log(animals[2])

let animais = [
    {
        nome: 'leão',
        anos: '10',
        peso: '230'
    },
    {
        nome: 'macaco',
        anos: 20,
        peso: 250,

        
    }
   
]
console.log(animais[0]) */

let pessoas = {
    nome: 'Joana',
    peso: 90,
    altura: 1.68,
    correu: 20,
   
    correr(correu=0){
       
        this.c += correu
    }
}

pessoas.correr()
    console.log(`${pessoas.nome} tem ${pessoas.peso}kg e ${pessoas.altura} de altura, e correu ${pessoas.correu}km.`)



