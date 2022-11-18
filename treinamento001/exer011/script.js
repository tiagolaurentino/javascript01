alert('Olá')

    function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var saida = document.querySelector('div#saida')
    
        if(fano.value.length == 0 || Number(fano.value) > ano) {
            window.alert('[erro] Verificar os dados e digitar novamente!!')
        }else{
            var fsex = document.getElementsByName('radsex') 
           var idade = ano - Number(fano.value)
           var gênero = ''
          //   var img = document.createElement('img')
          // img.setAttribute('id, foto')
          var img = document.getElementById('imagem')
         // var fimg = document.getElementById('foto')
           
          if(fsex[0].checked) {
               gênero = 'homem'
               if(idade >= 0 && idade < 10){
               // criança
               img.src = '../exer011/menino.jpg'
             //  img.setAttribute('../exer011/menino.jpg')
                }else if(idade < 21) {
                  //  jovem
                  img.src = '../exer011/jovem-homem.jpg'
                 //   img.setAttribute('foto-exer011/jovem-homem.jpg')
                }else if(idade < 50) {
                  //  adulto
                  img.src = '../exer011/homem.jpg'
                }else{
                   // idoso
                   img.src ='../exer011/idoso-homem.jpg'
                } 
           } else if(fsex[1].checked) {
               gênero = 'mulher'
               if(idade >= 0 && idade < 10){
                img.src = '../exer011/menina.jpg'
                // criança
                 }else if(idade < 21) {
                   //  jovem
                    img.src = '../exer011/jovem-mulher.jpg'
                 }else if(idade < 50) {
                   //  adulto
                   img.src = '../exer011/mulher.jpg'
                 }else{
                    // idoso
                    img.src = '../exer011/idosa-mulher.jpg'
                 }
           }
           saida.style.textAlign = 'center' 
           saida.innerHTML = `Detectamos ${gênero} com ${idade} anos`
          // saida.appendChild(img)
        } 
        
    }
    
   