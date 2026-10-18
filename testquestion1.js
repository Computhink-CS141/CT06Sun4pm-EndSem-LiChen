let posX, xSpeed;

function setup(){
    createCanvas(600, 400);
    
    posX = width/ 2;
    xSpeed = 5;
    
}

function draw() {
    background("lightblue");
    fill('limegreen');
    circle(posX, height/2, 50);
    posX += xSpeed;
    if (posX >= width-25 || posX <= 25) {
        xSpeed = -xSpeed;
    }
}


// let posX;
// let ballX;
// let ballSize = 50;
// let ballSpeed = 5;
// function setup() {
//     createCanvas(600, 400);
//     background("lightblue");
//     posX = width/ 2;
// }

// function draw() {
//     fill('limegreen');
//     circle(posX, height/2, ballSize);
//     ballX = ballX + ballSpeed;
//     if (ballX - ballSize/2 <= 0 || ballX + ballSize/2 >= width) {
//         ballSpeed = ballSpeed * 5
//     }
//     noStroke;
// }


