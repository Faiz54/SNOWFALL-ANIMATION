function preload(){
  bgImage = loadImage("snow2.jpg");
  snowImage = loadImage("snowFlake.png");
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(400, 200, 800, 500);
  bg.addImage(bgImage);

  snow = createSprite(400, 50, 80, 50);
  snow.addImage(snowImage);
  snow.scale = 0.1;
  snow.velocityY=2;

  snow2 = createSprite(300, 50, 80, 50);
  snow2.addImage(snowImage);
  snow2.scale = 0.1;
  snow2.velocityY=1;

  snow3 = createSprite(200, 50, 80, 50);
  snow3.addImage(snowImage);
  snow3.scale = 0.1;
  snow3.velocityY=4;

  snow4 = createSprite(100, 50, 80, 50);
  snow4.addImage(snowImage);
  snow4.scale = 0.1;
  snow4.velocityY=3;


}

function draw() {
  background("white");  
  drawSprites();
}
