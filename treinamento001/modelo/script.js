function tabuada() {
    let digito = window.document.getElementById('num')
    let tab = window.document.getElementById('seltab')
    if(digito.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(digito.value) //transformar string em numero
        let c = 1
        tab.innerHTML = `` //ao digitar outra tabuada limpar a tabuada anterior
        while (c<=10) {
            let item = document.createElement('option') //criar 1 elemento
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item) //item é filho da tabela
            c++
        }
    }
}