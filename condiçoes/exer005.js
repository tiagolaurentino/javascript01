/*var idade = 19
if(idade < 16) {
    console.log('Não vota')
}else{
    if(idade >= 16 && idade < 18){
        console.log('Voto opcional')
    }else{
        console.log('voto obrigatório')
    }
} */

var idade = 66    // mexer no consele para sair o resultado aprtar a tecla F8
console.log(`Você tem ${idade} anos`)
if(idade < 16) {
    console.log('Não vota')
}else if(idade >= 16 && idade < 18 || idade > 65){   //duas maneiras de fazer.
    console.log('Voto opcional')
}else{
    console.log('Voto obrigatório!!')
}