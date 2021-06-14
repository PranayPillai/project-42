var iss, issImage
var spaceCraft, spaceCraft1, spaceCraft2, spaceCraft3, spaceCraft4
var hasDocked;
var backGround, backGroundImage

function preload(){
  issImage = loadImage("iss.png");
  spaceCraft1 = loadImage("spacecraft1.png");
  spaceCraft2 = loadImage("spacecraft2.png");
  spacecraft3 = loadImage("spacecraft3.png");
  spacecraft4 = loadImage("spacecraft4.png");
  backGroundImage = loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(800,400);
  backGround.addImage(backGroundImage);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImage);

  spaceCraft = createSprite(300,300,50,50);
  spaceCraft.addImage(spaceCraft1)
  
}

function draw() {
  backGround.addImage(backGroundImage)  
  if(spaceCraft.y <=(iss.y + 70) && spaceCraft.x <= (iss.x - 10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking Successful!" ,200, 300);
  }

  if(keyDown("LEFT_ARROW")){
    spaceCraft.addImage(spaceCraft4);
    spaceCraft.x = spaceCraft.x - 5;
  }

  if(keyDown("RIGHT_ARROW")){
    spaceCraft.addImage(spaceCraft3);
    spaceCraft.x = spaceCraft.x + 5;
  }

  if(keyDown("UP_ARROW")){
    spaceCraft.addImage(spaceCraft1);
    spaceCraft.y = spaceCraft.y + 5;
  }
  drawSprites();
}