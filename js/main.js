
libLetras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','w'];
naoRepete = [];

// Controle de dificuldade do jogo
defMin = 1;
defMax = 25;

function inicializa(){
    canvas = document.getElementById("jogo");
    context = canvas.getContext("2d");
    geraDesafio();  
}

function keyPressed(evt){
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    return String.fromCharCode(key); 
}

// --- A cada tecla apertada essa função é chamada
document.onkeypress = function(evt){
    str = keyPressed(evt);

    if( str == libLetras[posKey]){
        // alert('Acertou');
        gameLoop();
        geraDesafio();
        atualizaPlacar(1,0);
    }else{
        alert('Errou');
        atualizaPlacar(0,1);
    }
}

function geraDesafio(){
    posKey = geraPosicao(defMin,defMax);

    desafio = libLetras[posKey];

    var posX = geraPosicao(45,450);
    var posY = geraPosicao(45,450);

    exibeDesafio( desafio, posX, posY);
}

function exibeDesafio(valor, posX, posY){
	context.font = '40pt Calibre';
    context.fillstyle = 'blue';
    context.fillText(valor, posX, posY);
}

function geraPosicao(valMin, valMax){
	return Math.floor( Math.random()  * valMax ) + valMin ;
}

function gameLoop(){
    context.clearRect(0, 0, canvas.width+100, canvas.height+100);
}

//--Placar -------

function atualizaPlacar(pontAcerto, pontErro){
    var acerto = document.getElementById('acerto');
    var erro = document.getElementById('erro');

    if(pontAcerto == 1){
        ponto = parseInt(acerto.value);
        ponto = ponto + 1;
        acerto.value = ponto;
     }

     if(pontErro == 1){
        ponto = parseInt(erro.value);
        ponto = ponto + 1;
        erro.value = ponto;
     }    
}

