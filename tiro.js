var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 500, 300);

var raio = 10;

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function desenhaAlvo(x, y) {

    desenhaCirculo(x, y, raio + 20, 'red');
    desenhaCirculo(x, y, raio + 10, 'white');
    desenhaCirculo(x, y, raio, 'red');
}

var xAleatorio;
var yAleatorio;

function sorteiaPosicao(maximo) {

    return Math.floor(Math.random() * maximo);
}

function limpaTela() {

    pincel.clearRect(0, 0, 500, 300);

}

function atualizaTela() {

    if (condicao) {

        limpaTela();
        xAleatorio = sorteiaPosicao(500);
        yAleatorio = sorteiaPosicao(300);
        desenhaAlvo(xAleatorio, yAleatorio);

    }
}

setInterval(atualizaTela, 3000);

var pontuacao = 0;
var condicao = true;
var disparos = 0;

function dispara(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;


    if (condicao) {

        disparos++;

        if ((x > xAleatorio - raio - 20)
            && (x < xAleatorio + raio + 20)
            && (y > yAleatorio - raio - 20)
            && (y < yAleatorio + raio + 20)) {

            pontuacao = pontuacao + 1;

            if ((x > xAleatorio - raio - 10)
                && (x < xAleatorio + raio + 10)
                && (y > yAleatorio - raio - 10)
                && (y < yAleatorio + raio + 10)) {

                pontuacao = pontuacao + 1;

                if ((x > xAleatorio - raio)
                    && (x < xAleatorio + raio)
                    && (y > yAleatorio - raio)
                    && (y < yAleatorio + raio)) {

                    pontuacao = pontuacao + 1;

                }

            }

        }
        document.getElementById('pontuacao').innerText = 'Sua pontuação: ' + pontuacao;
        document.getElementById('disparos').innerText = 'Seus disparos: ' + disparos;
    }

    decisao();

}

tela.onclick = dispara;

var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;


function start() {
    pontuacao = 0;
    disparos = 0;
    cron = setInterval(() => { timer(); }, tempo);
    document.getElementById('pontuacao').innerText = 'Sua pontuação: ' + pontuacao;
    document.getElementById('disparos').innerText = 'Seus disparos: ' + disparos;
}

function stop() {
    clearInterval(cron);
    mm = 0;
    ss = 0;

    pontuacao = 0;
    disparos = 0;

    document.getElementById('pontuacao').innerText = 'Sua pontuação: ' + pontuacao;
    document.getElementById('disparos').innerText = 'Seus disparos: ' + disparos;
    document.getElementById('counter').innerText = 'Seu Tempo: 00:00';

    cadastrar();
}


function timer() {
    ss++;

    if (ss == 60) {
        ss = 0;
        mm++;

        if (mm == 60) {
            mm = 0;
        }
    }

    var format = 'Seu Tempo: ' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    document.getElementById('counter').innerText = format;

    return format;


}





function cadastrar(){



}

if (mm == 1 && ss == 30){
    
    cadastrar();
}