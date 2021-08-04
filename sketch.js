var START = 2;
var PLAY = 1;
var END = 0;
var gameState = START;

var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score, lives;

var redB, greenB, blueB, pinkB, arrowGroup;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");

  red_balloonImage = loadImage("red_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  //score variable value is 0
  score = 0;

  //lives remaining variable value is 3
  lives = 3;

  //creating groups for each color balloon
  redB = new Group();
  greenB = new Group();
  blueB = new Group();
  pinkB = new Group();
  //creating group for arrow
  arrowGroup = new Group();
}

function draw() {
 background(0);
  

  
 drawSprites();

  if(gameState === START){
    //welcome text
    textSize(50);
    text("WELCOME",50,200);
    textSize(20);
    text("PRESS SPACE TO START",60,230);
    if(keyDown("space")){
      gameState = PLAY;
    }
  } else if(gameState === PLAY){
      // moving ground
      scene.velocityX = -3 
 
      if (scene.x < 0){
        scene.x = scene.width/2;
      }
      //moving bow
      bow.y = World.mouseY
   
      // release arrow when space key is pressed
      if (keyWentDown("space")) {
       createArrow();
      }
     
      //creating continous balloons
      var select_balloon = Math.round(random(1,4));
 
   //if (World.frameCount % 100 == 0) {
     //if (select_balloon == 1) {
      // redBalloon();
    // } else if (select_balloon == 2) {
      // blueBalloon();
    // } else if (select_balloon == 3) {
      // greenBalloon();
     //} else {
     //  pinkBalloon();
    // }
   //}
 
 
    // OR 
 
 
   if (World.frameCount % 100 == 0) { 
     switch(select_balloon){
       case 1: redBalloon();
       break;
       case 2: blueBalloon();
       break;
       case 3: greenBalloon();
       break;
       case 4: pinkBalloon();
       break;
       default: break;
   }
   }
       //if arrow touches red balloon,arrow and red balloon are destroyed
   //score increases too
   if (arrowGroup.isTouching(redB)) {
     redB.destroyEach();
     arrowGroup.destroyEach();
     score = score + 1;
   }
   //if arrow touches green balloon,arrow and green balloon are destroyed
   //score increases too
   if (arrowGroup.isTouching(greenB)) {
     greenB.destroyEach();
     arrowGroup.destroyEach();
     score = score + 2;
   }
   //if arrow touches blue balloon,arrow and blue balloon are destroyed
   //score increases too
   if (arrowGroup.isTouching(blueB)) {
     blueB.destroyEach();
     arrowGroup.destroyEach();
     score = score + 3;
   }
   //if arrow touches pink balloon,arrow and pink balloon are destroyed
   //score increases too
   if (arrowGroup.isTouching(pinkB)) {
     pinkB.destroyEach();
     arrowGroup.destroyEach();
     score = score + 4;
   } 
   
     //Shows different texts for game based on random number
     var rand = Math.round(random(1,5));
     textSize(30);
     if (World.frameCount % 60 == 0) { 
     switch(rand){
       case 1: text("You Got It!!",100,200);
       break;
       case 2: text("Keep Trying",100,200);
       break;
       case 3: text("Pop The Balloons",130,200);
       break;
       case 4: text("Keep Going!!",100,200);
       break;
       case 5: text("Don't Give Up",100,200);
       break;
       default: break;
     }
     }
 
     if (lives <= 0 || score >= 10){
       gameState = END;
     }

  }
  else if(gameState === END){

     //stops scene from moving
     scene.velocityX = 0;
     //destroys other sprites
     bow.destroy();
     arrowGroup.destroyEach();
     redB.destroyEach();
     pinkB.destroyEach();
     blueB.destroyEach();
     greenB.destroyEach();
     //shows game over
     textSize(50);
     text("GAME OVER",60,200);

   }

  //shows score
  textSize(20);
  text("Score: "+score,270,30);
  
  //shows lives
  text("Lives: "+lives,70,30);
  
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;

  //adding the arrow to the arrow group
  arrowGroup.add(arrow);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

  //adding the red balloon to the red group
  redB.add(red);

}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 4;
  blue.lifetime = 150;
  blue.scale = 0.1;

  //adding the blue balloon to the blue group
  blueB.add(blue);

}

function greenBalloon() {
  //write code for spwaning green balloons
  //write code for spwaning blue balloons
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 5;
  green.lifetime = 150;
  green.scale = 0.1;

  //adding the green balloon to the green group
  greenB.add(green);

}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 6;
  pink.lifetime = 150;
  pink.scale = 1.2;

    //adding the pink balloon to the pink group
    pinkB.add(pink);

}
