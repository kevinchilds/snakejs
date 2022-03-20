function init(){
    canvas = document.getElementById("game");
    canvas.style.backgroundColor = CANVAS_COLOR;
    canvas.style.width = `${Math.floor(window.innerWidth)}px`;
    canvas.style.height = `${Math.floor(window.innerHeight)}px`;
    canvasW = canvas.width;
    canvasH = canvas.height;
}





function playGame(){
    console.log("PLAY")
    playGamePopUp.style.display = "none"
    
    gameOverPopUp.style.display = "none"
}

window.onload = () => {
    init();
}
