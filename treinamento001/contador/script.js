

function contar() {
    var comeco1 = window.document.getElementById('começo')
    var fim1 = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var res = window.document.getElementById('res')

    if(comeco1.value.length == 0 || fim1.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] falta dados!!!')
    } else  {
        res.innerHTML = 'Contando'
        var comeco2 = Number(comeco1.value)
        var fim2 = Number(fim1.value) //transformar a variavel em numero
        var passo1 = Number(passo.value)
        if(passo1 <= 0){
            window.alert('Passo invalido!! Considerando PASSO 1')
        }
        if(comeco2 < fim2) {
            //contagem crescente
            for(var contador = comeco2; contador <= fim2; contador += passo1){
                res.innerHTML += `${contador} \u{1F449}` //U+1F44C esse é o codigo pego no google p mudar é só alterar no javascript
            }
        }else{
            //contagem regresciva
            for(var contador = comeco2; contador >= fim2; contador -= passo1) {
                res.innerHTML += `${contador} \u{1f44c}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
        
}