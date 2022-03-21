function init(){
    canvas = document.getElementById("game");
    canvas.style.backgroundColor = CANVAS_COLOR;
    canvas.style.width = `${Math.floor(window.innerWidth - 1)}px`;
    canvas.style.height = `${Math.floor(window.innerHeight - 1)}px`;
    ctx = canvas.getContext("2d");
    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);  
}


function playGame(){
    console.log("PLAY")
    playGamePopUp.style.display = "none"    
    gameOverPopUp.style.display = "none"

    snake = new Snake();
    apple = new Apple();

    setInterval(() => {
        loop();
    }, SPEED);
}


document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case "ArrowDown":
            DIRECTION = "DOWN"
            break;
        case "ArrowUp":
            DIRECTION = "UP"
            break;
        case "ArrowLeft":
            DIRECTION = "LEFT"
            break;
        case "ArrowRight":
            DIRECTION = "RIGHT"
            break;
        case " ":
            break; 
        default:
          return; // Quit when this doesn't handle the key event.
      }

});

function changeDirection(){
    switch (DIRECTION) {
        case "LEFT":
            snake.moveLeft();
            break;
        case "RIGHT":
            snake.moveRight();
            break;
        case "DOWN":
            snake.moveDown();
            break;
        case "UP":
            snake.moveUp();
            break;
        default:
            return;
    }
}

function loop(){
    ctx.fillStyle="limegreen"
    changeDirection();
    ctx.fillRect(snake.posX, snake.posY, snake.width, snake.height);
}

window.onload = () => {
    init();
}
