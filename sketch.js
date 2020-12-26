var a,b;

function setup() {
  createCanvas(800,400);
  a=createSprite(200, 50, 50, 50);
  a.shapeColor="red";
  b=createSprite(200,300,80,50);
  b.shapeColor="green";
a.velocityY=2;
b.velocityY=-2;

}

function draw() {
  background(0);
if(a.x-b.x<=a.width/2+b.width/2 && b.x-a.x <=a.width/2+b.width/2){
  a.velocityX=a.velocityX*(-1);
  b.velocityX=b.velocityX*(-1);
}
if(a.y-b.y<=a.height/2+b.height/2 && b.y-a.y <=a.height/2+b.height/2){
  a.velocityY=a.velocityY*(-1);
  b.velocityY=b.velocityY*(-1);
}
  drawSprites();
}