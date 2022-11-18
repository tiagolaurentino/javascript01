

function carregar() {
    var msg = document.getElementById('mensagem')
    var img = document.getElementById('imagem')
    var data = new Date() //pegar a data atual
    var hora = data.getHours()
       // var hora = 19

    msg.innerHTML = `Agora são ${hora} horas!!`
    if(hora >= 0 && hora < 12) {
            document.body.style.background = '#e2cd9f'
            img.src = '../treinamento001/imagem/manhã.jpg'
           
    }else if (hora >= 12 && hora < 18) {
            img.src = '../treinamento001/imagem/tarde.jpg'
            document.body.style.background = '#b9846f'
    }else{
        img.src = '../treinamento001/imagem/noite.jpg'
        document.body.style.background = '#515154'
    }
}

