class Snake{
    
    constructor(){
        this.posX = SNAKE_SIZE
        this.posY = SNAKE_SIZE;
        this.width = SNAKE_SIZE;
        this.height = SNAKE_SIZE;

        ctx.fillStyle = "limegreen";
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }

    moveRight(){
        this.posX += SNAKE_SIZE;
        this.displayMove();
    }

    moveLeft(){
        this.posX -= SNAKE_SIZE;
        this.displayMove();
    }

    moveUp(){
        this.posY -= SNAKE_SIZE;
        this.displayMove();
    }

    moveDown(){
        this.posY += SNAKE_SIZE;
        this.displayMove();
    }

    displayMove(){
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }

    changeDirection(){
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
