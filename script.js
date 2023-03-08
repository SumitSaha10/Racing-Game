let player = document.getElementById("player");
let blueCar = document.getElementById("bluecar");
let gameContainer = document.getElementById("gamecontainer")
let gameOverShow = document.getElementById("gameover");
let scoreShow = document.querySelector(".score");
let sound = new Audio("jumpsound.mp3");

let score = 0;

document.addEventListener("keydown",function(e) {
    //If right arrow key pressed 
    if (e.key==="ArrowRight") {
        sound.play();
        let carLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if (carLeft<280) {
            player.style.left = carLeft + 140 + "px";
        
        }
        
    }
    //If left arrow key pressed 
    else if(e.key==="ArrowLeft"){
        sound.play();
        let carLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if (carLeft>0) {
            player.style.left = carLeft - 140 + "px";
        
        }
        
    }
})


//After completing one iteration randomly generates the blue car position
document.addEventListener("animationiteration",function(e){
    let position = Math.floor(Math.random()*3) * 140;
    blueCar.style.left = position + "px";
    score++;
})


const gameOver = ()=>{
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

    let obstacleLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    let obstacleTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"));

    if(playerLeft===obstacleLeft && obstacleTop>230){
        gameContainer.style.display = "none";
        gameOverShow.style.display = "flex";
        scoreShow.innerHTML = "Score "+score;
        
    }
    
    
}

//Function which keeps checking game over
setInterval((e) => {
    gameOver();
}, 100);