
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var world,engine;
var boy, tree, stone, mango1, mango2, mango3, mango4, ground;
function preload()
{
	boy = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1200, 700);
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 800,
		  height: 700,
		  wireframes: false
		}
	  });


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(width/2,700,width,20);
	//Create the Bodies Here.
	tree = new Tree(900,1000);
	stone = new Stone(200,750,30);
	mango1 = new Mango(900,200,30);
	mango2 = new Mango(800,300,30);
	mango3 = new Mango(980,250,30);
	mango4 = new Mango(920,330,30);
	chain = new Chain(stone.body,{x:140,y:530});
	
	
	Engine.run(engine);
  
}


function draw() {
 
  background("purple");
  //Engine.update(engine);
  image(boy,110,450,200,300)
  tree.display();
  ground.display();
  
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  
  chain.display();

  //detectCollision(stone,mango1);
  //detectCollision(stone,mango2);
  //detectCollision(stone,mango3);
  //detectCollision(stone,mango4);
  
 
  drawSprites();

}


function mouseReleased(){
    chain.fly();
    
}

function mouseDragged(){
    
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance <= lmango.r + lstone.r){
		Matter.body.setStatic(lmango.body,false);
	}

}


  
  


function keyPressed(){
    if(keyCode === 32){
	   Matter.Body.setPosition(stone.body, {x:140,y:530})
	   chain.attach(stone.body);
        
    }
}


