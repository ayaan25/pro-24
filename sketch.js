
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
var canvas=	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground = new Ground(600,390,1200,20);
  box1 = new Box(1000,320,10,100);
  box2 = new Box(1050,370,120,10);
  box3 = new Box(1100,320,10,100);
  paper = new PaperClass(100,100,20);

  
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  ground.display();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:83,y:-60});
  }
}

