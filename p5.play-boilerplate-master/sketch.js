var movingRect , fixedRect;

function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400, 200, 50, 50);
 fixedRect = createSprite(600, 200, 50 , 50);

 movingRect.shapeColor = "Blue";
 fixedRect.shapeColor = "Blue";
}

function draw() {
  background(0);
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2) {

    movingRect.shapeColor = "Green";
    fixedRect.shapeColor = "Green";
  }
  else {
    movingRect.shapeColor = "Blue";
    fixedRect.shapeColor = "Blue";
  }

  drawSprites();
}