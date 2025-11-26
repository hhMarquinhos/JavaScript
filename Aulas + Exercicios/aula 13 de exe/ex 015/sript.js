function verificar () { 
    var data = new Date ()
   // var data = 2025
    var ano = data.getFullYear()
    //var ano = 2025
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')
    if (fano.value.length == 0 || fano.value > ano ) { 
        window.alert ('ERRO')
    } else { 
        var fsex = document.getElementsByName ('radsex') 
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id' , 'foto')



        if (fsex[0].checked) { //Se o que tiver marcado no [0] significa que é masculino , checked corresponde a checkin 
            genero = 'Homem'

            if (idade >=0 && idade < 10 ) {
                img.setAttribute ('src', 'imagens./bebeH.jpg' )
            } else if ( idade < 21) {
                  img.setAttribute ('src', 'imagens./jovemH.jpg' )
                //Jovem

            } else if (idade < 50 ) {
                  img.setAttribute ('src', 'imagens./adultoH.jpg' )
                 //adulto
            } else { 
                  img.setAttribute ('src', 'imagens./idosoH.jpg' )
                //idoso
            }
                


        }  else  { 
        genero = 'Mulher'

         if (idade >=0 && idade < 10 ) {
              img.setAttribute ('src', 'imagens./bebeM.jpg' )
                //Criança
            } else if ( idade < 21) {
                  img.setAttribute ('src', 'imagens./jovemM.jpg' )
                //Jovem

            } else if (idade < 50 ) {
                  img.setAttribute ('src', 'imagens./adultoM.jpg' )
                 //adulto
            } else { 
                  img.setAttribute ('src', 'imagens./idosaM.jpg' )
                //idoso
            }


        }
        res.style.textAlign = 'center' //Alinha o texto de resposta
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}