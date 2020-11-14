const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 670, width, 20);
	dustbin1 = new Dustbin(1300, 665, 170, 20);
	dustbin2 = new Dustbin(1200, 615, 20, 120);
	dustbin3 = new Dustbin(1395, 615, 20, 120);
	ball = new Ball(200, 450, 40);

	Engine.run(engine);
  
}


function draw() {
 rectMode(CENTER);
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ball.display();
  
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) {
 Matter.Body.applyForce(ball.body,ball.body.position,{x:90,y:-90}); 
} 
}


