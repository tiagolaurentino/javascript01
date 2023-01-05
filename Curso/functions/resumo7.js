let family = {
    receitas: [2000.20, 500, 1250.50, 200],
    despesas: [578, 2010, 597.20, 300.10]
}

function soma(array) {
    let total = 0;

    for(let value of array){
        total += value

    }//uma função q ira somar as receitas

    return total
}

function calcularBalanço() {
    const calcularReceitas = soma(family.receitas)
    const calcularDespesas = soma(family.despesas)

    const total = calcularReceitas - calcularDespesas

    const itsok = total >= 0

    let balanceText = 'negativo'

    if(itsok) {
        balanceText = 'positivo'
    }
    console.log(`Seu saldo é ${balanceText} total é: ${total.toFixed(2)}`)
}
 
calcularBalanço()