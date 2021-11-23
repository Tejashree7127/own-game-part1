var waterIm,factoryIm,skyIm
var test
var gamestate=0
var manIm


function preload() {
  waterIm = loadImage("./pic/water.png");
 factoryIm = loadImage("./pic/factory.png");
skyIm = loadImage("./pic/sky.png");
manIm = loadImage("./pic/man.png");


}
  


function setup() {
  createCanvas(windowWidth,windowHeight);
  test= createSprite(500,400,100,100);
  test.addImage("boy",manIm)
  test.scale=0.5
  
  
}

function draw() {
 // background(factoryIm); 
//0 gamestate
  if(gamestate==0){
    background(factoryIm);
  }

  //downarrow
  if(gamestate==1){
    background(waterIm);
   
  } 

  //1 gamestate
  
//up arrow
 
  //gamestate 2
  if(gamestate==2){
    background(skyIm)
  }

  drawSprites();
}

function keyPressed(){
  if(keyCode==DOWN_ARROW){
    gamestate=1
    
      }
      console.log(gamestate);

      if(keyCode==UP_ARROW){
        gamestate=2
      }
    console.log("test");
}