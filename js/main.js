
libLetras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','w'];


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

document.onkeypress = function(evt){
    str = keyPressed(evt);

    if( str == libLetras[posKey]){
        // alert('Acertou');
        gameLoop();
        geraDesafio();
    }else{
        alert('Errou');
    }
}

function geraDesafio(){
    posKey = geraPosicao(0,26);
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