const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops;
var walkingMan,walkingManImg;
var thunder1,thunder2,thunder3,thunder4;

function preload(){
 walkingManImg=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");  
thunder1=loadImage("images/thunderbolt/1.png");
thunder2=loadImage("images/thunderbolt/2.png");
thunder3=loadImage("images/thunderbolt/3.png");
thunder4=loadImage("images/thunderbolt/4.png");


}

function setup(){
  canvas = createCanvas(400,600);

  walkingMan =createSprite(150,450,10,10);
  walkingMan.addAnimation("Walking",walkingManImg);
  walkingMan.scale=0.45;

  // canvas = createCanvas(400,600);
   drops=new Drops(100,100,2); 
   

}

function draw(){
  background(0);

fill("blue");
 drops.display();
 drops.velocityY=10;
 drops.velocityX=0;
reposition();
Thunder();

 drawSprites();   
}   

function reposition(){
    drops.update();
    //console.log("aathira");
}
function Thunder(){
  rand=Math.round(random(1,4));
  if (frameCount%80===0){
  thunderCreatedFrame=frameCount;
  thunder= createSprite(random(10,370),random(30,60),10,10);
  switch(rand){
    case 1: thunder.addImage(thunder1);
    break;
    case 2: thunder.addImage(thunder2);
    break;
    default: break;
  }
  thunder.scale=random(0.3,0.6);
  thunder.lifetime=12;
}

}

