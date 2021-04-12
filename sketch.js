var space , spaceImage 
var planet , planetImage
function preload(){
  spaceImage = loadImage("images/space-background.png")
  plantImage = loadImage("images/sprite.png")
}



function setup() {
  createCanvas(800,400);
  planet = createSprite(400, 200, 50, 50);
 planet.addImage("planet" , planetImage)
}

function draw() {
  background(spaceImage);  
  drawSprites();
}