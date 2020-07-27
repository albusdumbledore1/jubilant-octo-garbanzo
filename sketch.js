var dustbinObject,paperObject,groundObject;
var world;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	dustbinObject = new Dustbin(900,650);
	paperObject = new Paper(200,450,20);
	paperObject.debug = true;
	groundObject = new Ground(width/2,670,width,20);
     

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paperObject.display();
 dustbinObject.display();
 groundObject.display();

 


}



function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-55});
	}
}



