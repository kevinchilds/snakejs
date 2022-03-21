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
        console.log(SNAKE_SIZE)
        this.posX += SNAKE_SIZE;
        console.log(this.posX);
    }

    moveLeft(){
        this.posX -= SNAKE_SIZE;
    }

    moveUp(){
        this.posY -= SNAKE_SIZE;
    }

    moveDown(){
        this.posY += SNAKE_SIZE;
    }

}
