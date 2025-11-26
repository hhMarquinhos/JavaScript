function carregar () { 
var msg = document.getElementById ('msg')
var foto = document.getElementById ('imagem')
var hora = 12
msg.innerHTML= `Agora são ${hora} horas.`

if (hora  >= 4 && hora < 12) { 
    foto.src = 'imagem/imgMANHA.jpg'
    document.body.style.background = '#e2cd9f'
    
    
}
else if (hora >= 12 && hora < 18) {
     foto.src = 'imagem/imgTARDE.jpg'
      document.body.style.background = 'red'
}
else { 
     foto.src = 'imagem/imgNOITE.jpg'
    document.body.style.background = 'black'
}
}
