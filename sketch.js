var track_image;
var path;
var jogger;
var jogger_animation;
var invis_bound1;
var invis_bound2;

function preload(){
  //pre-load images
 track_image=loadImage("path.png");
 jogger_animation=loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
 path=createSprite(200,200);
 path.addImage(track_image);
 path.velocityY=4;
 path.scale=1.2;
 jogger=createSprite(200,150);
 jogger.addAnimation(jogger_animation);
 invis_bound1=createSprite(10);
 invis_bound1.visible=false;
 invis_bound2=createSprite(390);
 invis_bound2.visible=false;
}

function draw() {
  background("black");
drawSprites();
if(path.y>400){
  path.y=height/2
  jogger.x=World.mouseX;
  jogger.collide(invis_bound1);
  jogger.collide(invis_bound2)
}
}

if(keydown("a")){
  jogger.velocityX=1;
}
if(keydown("d")){
  jogger.velocityX=-1;
}