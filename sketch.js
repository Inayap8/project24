
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ground;
var box1,box2,box3;
var groundSprite

function preload()
{
	
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	 groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="white"

	ground = Matter.Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 	
	 ball1=new paper(100,10,15)
	 box1=new dustbin(900,682,30,150)
	 
	 box2=new dustbin(960,742,150,30)
	 
	 box3=new dustbin(1045,682,30,150)
	 
	}


function draw() {
	background("yellow")
 	Matter.Engine.update(engine)
  rectMode(CENTER);
  
  groundSprite.x=ground.position.x
  groundSprite.y=ground.position.y
  drawSprites();
 ball1.Display()
 box1.Display()
 box2.Display()
 box3.Display()
 
 
}
function keyPressed(){

	if (keyCode===(UP_ARROW)){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:13,y:-10})
	}
}


