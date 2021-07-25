var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost=createSprite(200,200,20,30);
  ghost.addImage(ghostImg);
  ghost.scale=0.5;

  doorsGroup=new Group();
  climbersGroup=new Group();
  
}

function draw() {
  background(200);

  if(gameState==="play"){
 
    spookySound.play(); 

  if(tower.y > 400){
      tower.y = 300
    }
  if(keyIsDown(LEFT_ARROW)){
 ghost.x-=3;

  }
 if (keyIsDown(RIGHT_ARROW)){
   ghost.x+=3;
 }

 if(keyDown("space")){
   ghost.velocityY=-5;
 }
 ghost.velocityY+=0.5;

spawnDoors();

 if (climbersGroup.isTouching(ghost)||doorsGroup.isTouching(ghost)||ghost.y>600){
  doorsGroup.setVelocityYEach(0);
  climbersGroup.setVelocityYEach(0);
  ghost.destroy();
  tower.velocityY=0;

  gameState="end";
 
 }
 
 } 
 if (keyIsDown(UP_ARROW)){
  reset();
}
 
drawSprites();
textSize (19);
  
if(gameState==="end"){
 
  text("GAME OVER ",250,300)
  text("PLEASE PRESS THE UP ARROW KEY TO RESTART THE GAME",25,350)
  }
  
}
function reset(){

gameState="play";
doorsGroup.destroyEach();
climbersGroup.destroyEach();

}


function spawnDoors(){
 if(frameCount%200===0) {
door=createSprite(200,50);
door.addImage(doorImg);
door.x=Math.round(random(120,400));
door.velocityY=1;
doorsGroup.add(door);
door.lifetime=600;

climber=createSprite(200,110);
climber.addImage(climberImg);
climber.x=door.x;
climber.velocityY=1;
climbersGroup.add(climber);
climber.lifeTime=600
 }
}


















