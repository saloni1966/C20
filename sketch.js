var movingRect,fixedRect;


function setup() {
  createCanvas(800,400);
  movingRect= createSprite(600, 200, 50, 100);
  movingRect.shapeColor ='green'
  fixedRect= createSprite(400, 200, 50, 60);
  fixedRect.shapeColor = 'green'
}

function draw() {
  background('hotpink'); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  console.log(movingRect.x - fixedRect.x)

  if(movingRect.x - fixedRect.x < movingRect.width/2+fixedRect.width/2 
    &&
    fixedRect.x - movingRect.x < movingRect.width/2+fixedRect.width/2 
    
    ) {
    movingRect.shapeColor ='red'
    fixedRect.shapeColor = 'red'
  }
  else{
    movingRect.shapeColor ='green'
    fixedRect.shapeColor = 'green'
  }
  drawSprites();
}