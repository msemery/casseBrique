var canvas;
var context;
var ball;
//initialise le canvas
function initCanvas() {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    initBall();
}
//création d'un objet ball avec ses paramètres par défaut
function initBall() {
    ball = {
        x : canvas.width/2,
        y : canvas.height - 30,
        dx : 2,
        dy : -2,
        size : 10
    }
}


//initialise les briques
function drawBricks() {
    var howBricksPerRow = 10; //combien de briques par rangées
    var howManyRow = 3; //combien de rangées
    var brickHeight = 25; //hauteur d'une brique
    var brickGap = 5; //espace entre les briques
    //couleur des briques gérer aléatoirement
    var brickColors = ["#f4427a", "#ef53be", "#d252ef", "#8653ed", "#53a4ef", "#53efed", "#54eab1", "#52e56d", "#9edb4e", "#e0c150"];

    //calcul de la longueur d'une brique
    var widthBrick = (canvas.width / howBricksPerRow) - brickGap;

    //première boucle for génère le nombre de row
    //à l'intérieur la boucle génère la ligne de briques
    for (let i = 0; i < howManyRow; i++) {
        for (let i = 0; i < howBricksPerRow; i++) {
            context.beginPath();
            //calcul de la position dans le coin du canvas
            var brickAbssis = (brickGap * i) + ( i * widthBrick);
            var brickOrdonnee = (brickGap * i) + ( i * brickHeight);
            // context.rect(abssis, 10, 40, 40);
            // brickGap += 50;
            //couleur aléatoire des briques
            context.fillStyle = brickColors[i];
            context.rect(brickAbssis, brickOrdonnee, widthBrick, brickHeight);
            context.fill();
            context.closePath();
            
        }
    }
}



// context.fill();
// var abssis = 5;
// for (let i = 0; i < 10; i++) {

//     context.rect(abssis, 10, 40, 40);
//     abssis += 50;
//     context.fillStyle = colors[i];
//     context.fill();   
// }
// abssis = 5;
// for (let i = 0; i < 10; i++) {

//     context.rect(abssis, 60, 40, 40);
//     abssis += 50;
//     context.fillStyle = colors[i];
//     context.fill();
// }
// abssis = 5;
// for (let i = 0; i < 10; i++) {

//     context.rect(abssis, 110, 40, 40);
//     abssis += 50;
//     context.fillStyle = colors[i];
//     context.fill();
// }
// context.closePath();
// drawBall();



//fonction pour initialiser la balle, on récupére des élèments de l'objet
function drawBall() {
    
    context.beginPath();
    context.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
  
}

//fonction avec position de la balle et mouvement
function ballWhoToMove() {
    ball.x = ball.x + ball.dx;
    ball.y = ball.y + ball.dy;
    //pour faire rebondir la balle sur les coins
    if (ball.x >= canvas.width || ball.x <= 0){
        ball.dx = -ball.dx;
    }

    if (ball.y >= canvas.height ||ball.y <= 0){
        ball.dy = -ball.dy;
    }
}
  
// efface l'écran
function clearScreen(){
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// coordonne le tout !
function draw(){
    clearScreen();
    drawBricks(); // on efface l'écran à chaque fois, il faut donc redessiner les briques !
    drawBall();
    ballWhoToMove();
}

initCanvas();
setInterval(ballWhoToMove, 10);

