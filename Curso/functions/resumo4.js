//função construtora
function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + ' está andando e bebendo!!'
    }
}//letra maiscula 
const tiago = new Person('Antonio')
const joao = new Person('João')
console.log(tiago.walk())
console.log(joao.walk())
/*Crio função normal escrevo, Person com letra maiuscula, agora vou criar uma variavel chamdo de tiago
tiago é uma pessoa, depois usar uma expressão new Person, ai esta segredo quando usa a expressão new seguido da função Person
ela se torna uma função construtora, essa expressao ira retornar p a variavel tiago um novo objeto,quando colocar o console log maik vamos 
ver um objeto Person, dentro da função temos uma palavra chave especial q se chama this ela ira referenciar p mayk q esta la fora entao 
this.namevai receber name q é passado como parametro dentro da função Person(name) ao criar uma nova Person vou passar como argumento 
new Person('Tiago')
 agora mayk tem uma propriedade chamada name, posso criar uma nova var: const joao = new Person('João') ira ser criado outra pessoa com mesma 
 estrutura entao posso criar quantos objeto q eu quiser. Quando definir um novo valor this.walk = function() walk é andar é uma funcionalidade 
 retorna andando estarei estanciando ja mayk e joao usando a mesma função construtora eles tem os mesmo atributos e funcionalidade*/
//canetas
 function Objeto(caneta) {
    this.caneta = caneta
    this.escrever = function(){
        return this.caneta + ' para fazer a prova !!'
    }
 }
   let caneta = new Objeto('caneta azul') 
   console.log(caneta.escrever())
 
   //exemplos
 let nome = new String('manoel')
 console.log(nome)

 let data = new Date()
 console.log(data)

 function Automovel(carro) {
    this.carro = carro
    this.andar = function() {
       return this.carro + ' está andando'
    }
 }
 const carro = new Automovel('palio')
 const car = new Automovel('BB20')
 console.log(carro.andar())
 console.log(car.andar())


 //Alteração de um tipo de dado p outro tipo de dado 

 console.log('9' + 5)/* 9 em maneira de string + 5 causou uma concatenação
 o java script  o 9 ema string e concatenou com 5 resultado 95*/

 console.log(Number('9') + 5) /* usando uma função do tipo Number que vai mudar a string p numero
 entao foi entendido q era transformar em um number resultado 14
  */