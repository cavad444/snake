const box = document.querySelector(".box");
const apple = document.querySelector(".apple");
const boxes = document.querySelector('.boxes');
const snakeBox = document.querySelector('.snake-box');
const loseText = document.querySelector('lose-text');
let topDistance = 0;
let leftDistance = 0;
let i = 0;
var randomLeftApple;
var randomTopApple;
let sizeX = 0;
let sizeY = 0;



function createDivFunction(){
    const createDiv = document.createElement("div");
    createDiv.style.backgroundColor = "black";
    createDiv.style.width = 20 + "px";
    createDiv.style.height = 20 + "px";
    return createDiv;
}

function getRandomTop(){
    return Math.floor(Math.random() * 37) * 10;
}

function getRandomLeft(){
    return Math.floor(Math.random() * 57) * 10; 
}

function randomApplePosition(){
    
    randomTopApple = getRandomTop();
    randomLeftApple =  getRandomLeft();
    apple.style.top = `${randomTopApple}px`;
    apple.style.left = `${randomLeftApple}px`;
   }
randomApplePosition();

document.addEventListener("keydown", (e) => {   
   
    switch(e.key){
        
        case "ArrowDown":
            
            if(topDistance!=380){
            topDistance +=10;
            boxes.style.top = `${topDistance}px`;
            
            }else{
                snakeBox.style.display = "none";
                loseText.innerText = "GAME OVER!"
            }
           
            break;
        case "ArrowUp":
            
            if(topDistance!=0){
            topDistance -=10;
            boxes.style.top = `${topDistance}px`;
            }else{
                snakeBox.style.display = "none";
                loseText.innerText = "GAME OVER!"
            }
           
            break;
        case "ArrowLeft":
            if(leftDistance!=0){
                leftDistance-=10;
                boxes.style.left = `${leftDistance}px`;
            }else{
                snakeBox.style.display = "none";
                loseText.innerText = "GAME OVER!"
            }
            break;
        case "ArrowRight":
            
            if(leftDistance!=600 - positionX * 20){
                leftDistance+=10;
                boxes.style.left = `${leftDistance}px`;
            }else{
                snakeBox.style.display = "none";
                loseText.innerText = "GAME OVER!"
            }

        }
        if(topDistance == randomTopApple && leftDistance == randomLeftApple || topDistance == randomTopApple && randomLeftApple - sizeX == leftDistance ){
            sizeX += 20;
            console.log(boxes.style.top);
            console.log(topDistance);
            console.log("same position");
            randomApplePosition();
            boxes.appendChild(createDivFunction());
            positionX ++;
        }   
});

positionX = 1;
positionY = 1;



