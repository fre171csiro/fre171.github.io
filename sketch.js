var canvasX = 800
var canvasY = 600
var randX =50;
var randY= 50;

//This is my colour library
const navyBlue = "#283154"
const darkMauve = "#A367FF"
const lightMauve = "#96C0E3"
const darkGreen = "#69B3A7"
const lightGreen = "#6ECCBE"
const darkTurq = "#91CACC";
const darkPink = "#B360B3"
const medPink = "#FFA3FF"
const lightPink = "#FFC9FF"
const lightYellow = "#FFF1BD"
const white = "#FDFFFF"
const brightMauve = "#D0AFFD"

//These colours are associated with certain shapes, so that the code is easier to maintain.
const spaceShipBase = lightGreen
const spaceShipCockpit = lightMauve;
const spaceShipRayGround = darkMauve;
const spaceShipRay = brightMauve;

function setup() {
  createCanvas(canvasX, canvasY);
  textSize(200);
  textAlign(CENTER);
  frameRate(10);  
}

function draw() {
  backgroundColor();
  twinklyStars();
  groundHorizon();
  landScape();
  spaceShip();
  textName(canvasX/2, canvasY/3);
}

function backgroundColor(){
 background(navyBlue);
}

function groundHorizon() {
  fill(medPink);
  stroke(medPink);
  curve(0, canvasY, 0, canvasY / 1.2, canvasX, canvasY / 1.2, canvasX, canvasY);
  rect(0, canvasY / 1.2, canvasX, canvasY / 6);
}

function landScape(){
craterPit(canvasX/2.07, canvasY/1.15, 150, 15);
craterPit(canvasX/11, canvasY/1.21, 90, 9);
craterPit(canvasX/2+75, canvasY/1.24, 60, 6);
craterPit(canvasX/1.2, canvasY/1.1, 180, 18);
craterPit(canvasX/11, canvasY, 200, 20);
craterPit(canvasX/1.15, canvasY/1.15, 100, 10);
}

function craterPit(xCoord, yCoord, width, height) {
  let X = xCoord;
  let Y = yCoord;
  let w = width;
  let h = height;
  
  beginShape();
  stroke(lightPink);
  strokeWeight(4);
  fill(darkPink);
  ellipse(X, Y, w, h);
  noFill();
  bezier(X-w/2, Y, X-w/2, Y+h, X-w/2, Y+h, X-(w/2)-10, Y+h);
  bezier(X+w/2, Y, X+w/2, Y+h, X+w/2, Y+h, X+(w/2)+10, Y+h);
  endShape(CLOSE);
}

function spaceShip(){
  spaceShipPlacement();

  beginShape();
  littleAlien();
  transparentSpaceShipBits()
  spaceShipBody();
  endShape(CLOSE);
}

//This function dictates the randomised placement of the spaceship
function spaceShipPlacement() {
  randXLowerLimit = canvasX * 0.5;
  randXUpperLimit = canvasX * 0.5 + 5;
  randX = random(randXLowerLimit, randXUpperLimit);
  randYLowerLimit = canvasY * 0.55;
  randYUpperLimit = canvasY * 0.55 + 5;
  randY = random(randYLowerLimit, randYUpperLimit);
}

function spaceShipBody() {
  stroke(darkGreen);
  fill(spaceShipBase);
  ellipse(randX, randY, canvasX/2, canvasY/6);
  fill(darkTurq);
  ellipse(randX, randY, canvasX/2, canvasY/60);
}

function littleAlien() {
  fill(lightPink);
  ellipse(randX, randY-canvasY/14, 40, 40);
  fill(lightPink);
  rect(randX-2, randY-canvasY/7, 3, 20);
  ellipse(randX, randY-canvasY/7, 20, 20);
  ellipse(randX-20, randY-canvasY/11, 3, 20);
  ellipse(randX+20, randY-canvasY/11, 3, 20);
  noStroke();
  fill(white);
  ellipse(randX, randY-canvasY/7, 18, 18);
  fill(darkTurq);
  ellipse(randX, randY-canvasY/7, 10, 10);
  fill(darkPink);
  ellipse(randX, randY-canvasY/10, 5, 5);
  

}

function transparentSpaceShipBits() {
  stroke(white);
  fill(colorAlpha(spaceShipCockpit, 0.5));
  arc(randX, randY, canvasX/4, canvasY/3, canvasX/84.21, canvasY/12, 0, PIE/2);
  noStroke(0);
  fill(colorAlpha(spaceShipRay, 0.7));
  rect(randX-canvasX/16, randY, canvasX/8, canvasY/3);
  fill(colorAlpha(spaceShipRayGround, 0.7));
  ellipse(randX, randY+canvasY/3, canvasX/8, 20);
}

function twinklyStars() {
  noStroke()
  fill(lightYellow);
  var i;
  for (i = 0; i < 50; i++) { 
    dotStar();
  }
  for (i = 0; i < 2; i++) { 
    largeStar();
  }
  
  fill(white);
  var i;
  for (i = 0; i < 50; i++) { 
    dotStar();
  } 
  for (i = 0; i < 2; i++) { 
    largeStar();
  }
}

function largeStar() {
  star(random(canvasX), random(canvasY), canvasX / 200, canvasY / 12, 4);
  star(random(canvasX), random(canvasY), canvasX / 800, canvasY / 3, 4);
  star(random(canvasX), random(canvasY), canvasX / 160, canvasY / 7.5, 4);
}

function dotStar() {
  ellipse(random(canvasX), random(canvasY), canvasX / 160, canvasY / 120);
}


// Code below was taken from (https://p5js.org/examples/form-star.html)
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function textName(xCoord, yCoord) {
  let X = xCoord;
  let Y = yCoord;
  var offSet = 15;
  var name = "Clare";
  noStroke();
  fill(medPink);
  text(name, X + offSet, Y);
  fill(lightMauve);
  text(name, X , Y);
  fill(lightYellow);
  text(name, X - offSet, Y);
}

//The code below is copied from https://gist.github.com/bcardiff/3b39ba8e2d00fed68435
function colorAlpha(aColor, alpha) {
  var c = color(aColor);
  return color('rgba(' +  [red(c), green(c), blue(c), alpha].join(',') + ')');
}

function keyTyped() {
  if (key === "P") {
	saveCanvas("nametag.png");
  }
}
