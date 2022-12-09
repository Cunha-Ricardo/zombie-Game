var altura = 0
var largura = 0
var vida = 1
var tempo = 25

var criaZombieTempo = 1000
var nivel = window.location.search
nivel =nivel.replace('?','')

if( nivel === 'facil'){
    //3000
    criaZombieTempo = 2000
}else if(nivel === 'medio'){
    //2000 
    criaZombieTempo = 1000
}else if(nivel === 'dificil'){
    //1000
    criaZombieTempo = 500
}else if(nivel === 'extremo'){
    ///250
    criaZombieTempo = 250
}

function ajustartamanhoPalcoJogo(){
    altura=window.innerHeight
    largura=window.innerWidth

    console.log(largura, altura)
}
ajustartamanhoPalcoJogo()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaZombie)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

function posicaoRandomica(){
    //remover os zombies anteriores 
    if(document.getElementById('zombie')){
        document.getElementById('zombie').remove()
        
        if(vida > 3) {

			window.location.href = 'game_over.html'
		} else {
			document.getElementById('v' + vida).src = "imagens/coracao_vazio.png"

			vida++
		}
	}

    var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX,posicaoY)

    //criando o elemento HTML
    var zombie = document.createElement('img')
	zombie.src = 'imagens/zombie_head.png'
    zombie.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    zombie.style.left = posicaoX + 'px'
    zombie.style.top = posicaoY + 'px'
    zombie.style.position = 'absolute'
    zombie.id='zombie'
    zombie.onclick=function(){
        this.remove()
    
    }

    document.body.appendChild(zombie)
}
function tamanhoAleatorio(){    
    var classe=Math.floor(Math.random() *3)

        switch(classe){
            case 0:
                return 'zombie1'
            case 1:
                return 'zombie2'
            case 2:
                return 'zombie3'
        }
}

function ladoAleatorio(){
    var classe=Math.floor(Math.random()*2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
