
libLetras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','w'];
mapLetras = [65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91];

function inicializa(){
	barraAltura = 15;
    barraLargura = 90;
 
    jogadorPosicaoX = 0;
 
    canvas = document.getElementById("jogo");
    context = canvas.getContext("2d");

    context.font = '40pt Calibre';
    context.fillstyle = 'blue';

    desafio = libLetras[geraPosicao(0,2)];

    var posX = geraPosicao(45,450);
    var posY = geraPosicao(45,450);

    exibeDesafio( desafio, posX, posY);

    document.addEventListener('keydown', pegaTecla);

}

function pegaTecla(e){
	var tecla = e.keyCode;

	if(tecla == mapLetras[1] ){
		alert('Acertou' + tecla + " == " + mapLetras[1]);
	}else{
		alert('Errou '  + tecla + " == " + mapLetras[1]);
	}

		

}

function exibeDesafio(valor, posX, posY){
	context.font = '40pt Calibre';
    context.fillstyle = 'blue';
    context.fillText(valor, posX, posY);
}

function geraPosicao(valMin, valMax){
	return Math.floor( Math.random()  * valMax ) + valMin ;
}