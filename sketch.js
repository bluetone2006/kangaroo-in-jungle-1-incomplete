/*--------------------------------------------------------*/
var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;

var kangaroo, kangaroo_running, kangaroo_collided;
var jungle, invisiblejungle;

var obstaclesGroup, obstacle1;

var score=0;

var gameOver, restart;

var invisibleground;

function preload(){
  kangaroo_running =   loadAnimation("assets/kangaroo1.png","assets/kangaroo2.png","assets/kangaroo3.png");
  kangaroo_collided = loadAnimation("assets/kangaroo1.png");
  jungleImage = loadImage("assets/bg.png");
  shrub1 = loadImage("assets/shrub1.png");
  shrub2 = loadImage("assets/shrub2.png");
  shrub3 = loadImage("assets/shrub3.png");
  obstacle1 = loadImage("assets/stone.png");
  gameOverImg = loadImage("assets/gameOver.png");
  restartImg = loadImage("assets/restart.png");
  jumpSound = loadSound("assets/jump.wav");
  collidedSound = loadSound("assets/collided.wav");
}

function setup() {
  createCanvas(800, 400);

  jungle = createSprite(400,100,400,20);
  jungle.addImage("jungle",jungleImage);
  jungle.scale=0.3
  jungle.x = width /2;

  kangaroo = createSprite(200,220,400,400);
  kangaroo.addAnimation ("running", kangaroo_running);
  kangaroo.scale = 0.2;
  
  invisibleground = createSprite(300,500,1000,200);
  invisibleground.visible = false;
  

  shrubsGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;

}

function draw() {
  background(255);
  
  kangaroo.x = camera.position.x-270;

  if (gameState === PLAY){
    jungle.velocityX = -0.5;
    if (keyCode === UP_ARROW){
      kangaroo.velocityX = 0.5
    }
  }

  if (jungle.x < 0){
    jungle.x = ground.width/2;
  }

  kangaroo.collide(invisibleground);
  
  drawSprites();

}
