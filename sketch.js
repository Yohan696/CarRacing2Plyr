var canvas;
var backgroundImage;
var car1Image, car1, car2Image, car2;
var bgImg,trackImg;
var database;
var form, player;
var playerCount;
var gameState;
var cars =[];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Image = loadImage("/assets/car1.png");
  car2Image = loadImage("/assets/car2.png");
  trackImg = loadImage("/assets/track.jpg");
}

function setup() {
  //making the game device friendly to take the fullscreen 
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  //creating a game object from the Game class
  game = new Game();
  //function call of the start function in the game class 
  game.start();

}

function draw() {
  background(backgroundImage);
  if (playerCount === 2){
    game.update(1);
  }

  if (gameState === 1){
    game.play();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
