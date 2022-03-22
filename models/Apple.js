class Apple{

    constructor(){
        this.posX;
        this.posY;
        this.width = SNAKE_SIZE;
        this.height = SNAKE_SIZE;


        do {
            this.posX = this.randomNum(canvWidth)  
        } while (this.posX % snake.width != 0);

        do {
            this.posY = this.randomNum(canvWidth)    
        } while (this.posY % snake.height != 0);

        ctx.fillStyle = "red";
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
        ctx.fillStyle = "lightgreen";
    }

    randomNum(max){
        return (Math.random() * max).toFixed(1);
    }
}