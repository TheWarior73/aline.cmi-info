var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Debug POS (X;Y)
canvas.onmousedown = function (e) {
    console.log(e.offsetX, e.offsetY);
}

// Canvas
var x = canvas.width / 2; // Centre du canvas
var y = canvas.height - 30;

// balle
var dx = 2; // vitesse de la balle
var dy = -2;
var ballRadius = 10; // Rayon, couleur
var color = "#0095DD"

// raquette
var paddleHeight = 10; // param raquette
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

// si touche droite est pressée ou touche gauche, ou aucune
var rightPressed = false;
var leftPressed = false;

// Briques
var brickRowCount = 3;
var brickColumnCount = 5; // default = 5
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
// console.log((canvas.width - (2*brickOffsetLeft)))
// console.log((canvas.width - (2*brickOffsetLeft))/brickColumnCount)
// console.log((canvas.width - (2*brickOffsetLeft))/brickColumnCount - brickPadding)
var brickWidth = ((canvas.width - (2 * brickOffsetLeft)) / brickColumnCount) - brickPadding; // default = 75

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

// score
var score = 0;

// vies
var lives = 3;

function drawBall(color) { // Dessin de la balle
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() { // dessin de la raquette
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
            var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            if (bricks[c][r].status == 1) {
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            } else {
                ctx.beginPath();
                ctx.lineWidth = 1;
                ctx.strokeStyle = "#5dc1f3";
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}

function draw() { // fonction principale
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall(color);
    drawPaddle();
    collisionDetection();
    drawBricks();
    drawScore();
    drawLives();

    x += dx;
    y += dy;

    // colission avec les bords, si x+dx > largeur - rayon de la balle ou x + dx < rayon de la balle, pareil mais pour l'autre axe (y).
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        color = "#" + randomColor;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {
            lives--;
            if (!lives) {
                var body = document.querySelector("body");
                body.innerHTML = "<img src='game_over.png'>";
                alert("GAME OVER"); // popup embétante (rip la console avec ce truc)
                document.location.reload(); // rechargement de la page
            } else {
                x = canvas.width / 2;
                y = canvas.height - 30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width - paddleWidth) / 2;
            }
        }
    }
    // Collisions coté et haut
    if (rightPressed) {
        paddleX += 7;
        if (paddleX + paddleWidth > canvas.width) { // si en partant de l'origine, la taille dépasse celle du canva, on ne vas pas plus loins
            paddleX = canvas.width - paddleWidth;
        }
    } else if (leftPressed) { // si l'origine est negative, alors on reste dans le canva
        paddleX -= 7;
        if (paddleX < 0) {
            paddleX = 0;
        }
    }
requestAnimationFrame(draw);
}

// Events
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

// Handlers
function keyDownHandler(e) {
    // console.log(e.key) // BONUS : Log de la touche dans la console au besoins
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "m") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "k") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight" || e.key == "m") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "k") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX < (paddleWidth/2)) {
        paddleX = 0;
    } else if (relativeX > (canvas.width-(paddleWidth/2))) {
        paddleX = canvas.width - paddleWidth ;
    } else {
        paddleX = relativeX - paddleWidth / 2;
    }
}

function collisionDetection() {
    for (var c = 0; c < brickColumnCount; c++) {
        for (var r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                if (
                    x > b.x &&
                    x < b.x + brickWidth &&
                    y > b.y &&
                    y < b.y + brickHeight
                ) {
                    dy = -dy;
                    b.status = 0;
                    score = score + 2;
                    if (score/2 == brickRowCount * brickColumnCount) {
                        alert("C'est gagné, Bravo ! Score: " + score);
                        document.location.reload();
                    }
                }
            }
        }
    }
}

// Score
function drawScore() {
    ctx.font = "16 px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20)
}

// Vies
function drawLives() {
    ctx.font = "16 px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Vies: " + lives, canvas.width - 65, 20)
}

draw(); // Premier appel de draw avant récursion
