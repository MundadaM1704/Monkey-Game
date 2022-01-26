var monkey , monkey_running;
var banana ,bananaImage;
var obstacle, obstacleImage;
var ground;
var FoodGroup, obstacleGroup;
var survivalTime;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}

function setup() {
  createCanvas(600,400);
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
   
  monkey = createSprite(40,350,900,10);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}

function draw() {
  background(255);
  
  if(ground.x<100){ 
      ground.x=ground.width/2;
    } 
  
  if(keyDown("space")) {
      monkey.velocityY = -10; 
  } 
  
  monkey.velocityY = monkey.velocityY + 0.3;
  monkey.collide(ground);
  
  drawSprites();
  
  Food();
  Obstacle();
  
  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50);
}

function Food(){
  if(frameCount%80 === 0){
    banana = createSprite(400,160,50,50);
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.12;
    banana.lifetime = 600;
    FoodGroup.add(banana);
 }
}

function Obstacle(){
  if(frameCount%300 === 0){
    obstacle = createSprite(450,316,50,50);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.15;
    obstacle.lifetime = 600;
    obstacleGroup.add(obstacle);
 }
}
