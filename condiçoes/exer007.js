var agora = new Date()            
var Semana = agora.getDay()   // dia da semana   
/* 0 = domingo
    1 = segunda
    2 = terça     dia da semana
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sabado  */
    console.log(Semana)

   // Semana = 4
    switch(Semana) {
        case 0:
            console.log('Domingo')  // switch só funciona com numeros inteiros e cacteres
            break
        case 1:
            console.log('Segunda') //muito util situações pontuais
            break
        case 2:
            console.log('Terça')
            break
        case 3: 
            console.log('Quarta')
            break
        case 4:
            console.log('Quinta')
            break
        case 5:
            console.log('Sexta')
            break
        case 6:
            console.log('Sabado')
            break
          default:
            console.log('[ERRO] Dia inválido')  
            
    }