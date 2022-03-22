function init(){
    canvas = document.getElementById("game");
    canvas.style.backgroundColor = CANVAS_COLOR;
    canvas.style.width = `${Math.floor(window.innerWidth)}px`;
    canvas.style.height = `${Math.floor(window.innerHeight)}px`;
    ctx = canvas.getContext("2d");
    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);  
}


function playGame(){
    DIRECTION = "RIGHT";
    playGamePopUp.style.display = "none"    
    gameOverPopUp.style.display = "none"

    snake = new Snake();
    apple = new Apple();

    interval = setInterval(() => {
        loop();
    }, SPEED);
}

function loop(){
    ctx.fillStyle="limegreen"
    snake.changeDirection();

    checkGameOverConditions();
}

function gameOver(){
    ctx.clearRect(0,0, canvWidth, canvHeight);
    clearInterval(interval);
    gameOverPopUp.style.display = "block";
}


function checkGameOverConditions(){

    if(snake.posX >= canvWidth){
        gameOver();
    }else if(snake.posX <= 0 - SNAKE_SIZE){
        gameOver();
    }else if(snake.posY >= canvHeight){
        gameOver();
    }else if(snake.posY <= 0 - SNAKE_SIZE){
        gameOver();
    }
}

window.onload = () => {
    init();
}
