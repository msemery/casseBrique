var canvas;
var context;
//initialise le canvas
function initCanvas() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    context.beginPath();
    context.fill();
    var abssis = 5;
    var colors = ["#f4427a", "#ef53be", "#d252ef", "#8653ed", "#53a4ef", "#53efed", "#54eab1", "#52e56d", "#9edb4e", "#e0c150"];
    for (let i = 0; i < 10; i++) {

        context.rect(abssis, 10, 40, 40);
        abssis += 50;
        context.fillStyle = colors[i];
        context.fill();   
    }
    abssis = 5;
    for (let i = 0; i < 10; i++) {

        context.rect(abssis, 60, 40, 40);
        abssis += 50;
        context.fillStyle = colors[i];
        context.fill();
    }
    abssis = 5;
    for (let i = 0; i < 10; i++) {

        context.rect(abssis, 110, 40, 40);
        abssis += 50;
        context.fillStyle = colors[i];
        context.fill();
    }
    context.closePath();
}

//fonction avec position de la balle et mouvement
var x;
var y;
var dx = 2;
var dy = -2;
//fonction pour initialiser la balle
function drawBall() {
    x = canvas.width / 2;
    y = canvas.height - 30;
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI * 2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}
function ballWhoToMove() {
    x = canvas.width / 2;
    y = canvas.height - 30;
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    }

setInterval(ballWhoToMove, 10);
