
var agora = new Date()
var horas = agora.getHours()
console.log(`Agora é exatamente ${horas} horas!!`)
if(horas < 12){
    console.log('Bom dia!!')
}else if(horas >= 12 && horas <= 18) {  // mexer no consele para sair o resultado apertar a tecla F8
    console.log('Boa tarde!!')
}else{
    console.log('Boa noite !!')
}

/*var horas = 10
console.log(`Agora é exatamente ${horas} horas!!`)
if(horas < 12){
    console.log('Bom dia!!')
}else if(horas >= 12 && horas <= 18) {  // mexer no consele para sair o resultado apertar a tecla F8
    console.log('Boa tarde!!')
}else{
    console.log('Boa noite !!')
}*/