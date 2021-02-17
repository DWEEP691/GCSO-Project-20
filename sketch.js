var speed, weight; 
var car, wall;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50,200,60,50);
  wall = createSprite(1500,200,60,height/2);

  speed = 0;
  weight = 0;

}

function draw() {
  background(0,0,0);

  speed = random(55,90);
  weight = random(400,1500);

  car.velocityX = speed;

  console.log(deformation);

  if(wall.x-car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;

    var deformation = 0.5*weight*speed*speed/22509;

   if(deformation<100) {
     car.shapeColor = color(0,255,0);
   }

   if(deformation>100 && deformation<180) {
     car.shapeColor = color(230,230,0);
   }

   if(deformation>180) {
     car.shapeColor = color(255,0,0);
   }
 }

drawSprites();

}