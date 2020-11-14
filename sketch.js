var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var wall1Body, wall2Body, wall3Body, wall1Sprite, wall2Sprite, wall3Sprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	wall1Sprite = createSprite(400,650,220,20);
	wall1Sprite.shapeColor=color("red");

	wall2Sprite = createSprite(300,590,20,100);
	wall2Sprite.shapeColor=color("red")

	wall3Sprite = createSprite(500,590,20,100);
	wall3Sprite.shapeColor=color("red")


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.01, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 

	 wall1Body = Bodies.rectangle(width/2,650,220,20, {isStatic:true} )
	 World.add(world, wall1Body);


	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

    
  wall1Sprite.x = wall1Body.position.x
  wall1Sprite.y = wall1Body.position.y
  packageSprite.bounceOff(wall1Sprite);
  if (keyDown("down")){
	Matter.Body.setStatic(packageBody, false);
  }
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



