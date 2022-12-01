let num = document.querySelector('input#fnum')
let lista = document.getElementById('flista')
let res = document.querySelector('div#res')
let valores = []   // vetor vazio para analizar os dados

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {  //vai verificar se é um numero 
        return false
    }

}

function inLista(n, l) {  //n e l são o numero e a lista
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))/*valores é o vetor e o push é p adicionar o numero q adicionar
        let item = document.createElement('option') //para adicionar o item na tag section tem criar uma tag option de forma dinamica,
        tem que criar um item, meu item vai ter um valor tex fazer uma extring com possibilidae de interpolação
        o valor adicionado foi {num.value} e p adicionar let lista appenchild que é o (item) */
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado `
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista!') //Vai verificar se é um numero e tambem se ja esta na lista
    }
    num.value = '' /*quando digitar e apagar automaticamente tem q saber o nome objeto q é num ponto atributo value que recebe = ''
    vazio p esvaziar*/
    num.focus()//focus() e como se clicasse com mouse p voltar o cursor piscar p digitar um novo numero
}

function finalizar(){ //essa função e´p verificar se o vetor esta vazio let valores = []
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!!')
    } else {
        let tot = valores.length  //saber o total de valores 
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = tot / soma //se eu sei a soma e total de elemento consigo a media
        res.innerHTML = '' //primeiro receber vazio, verificar se o resultado esta vazio
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrado!</p>`
        res.innerHTML += `<p>O maior numero informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor numero informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma desses numero foi ${soma}</p>`
        res.innerHTML += `<p>A media desse valor é ${media}<?p>`
    }
}