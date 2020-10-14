class Tree{
    constructor(x,y){
        var options={
            isStatic: true,
            restitution: 0,
            friction: 1
            //use from dustbin class
        }

        this.x = x;
        this.y = y;

        this.dustbinWidth=400;
		this.dustbinHeight=600;
		this.wallThickness=20;
        this.body = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.dustbinHeight,options);
        
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, options);
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight*2, this.wallThickness, this.dustbinHeight,options);
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight*2, this.wallThickness, this.dustbinHeight, options);
        
       
        this.image=loadImage("sprites/tree.png");
        World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
        World.add(world, this.rightWallBody);
        World.add(world, this.body);

    }
    display(){
    var posBottom = this.body.position;
    
    push();
    translate(posBottom.x,posBottom.y);
    imageMode(CENTER);
    image(this.image,0,-this.dustbinHeight, this.dustbinWidth, this.dustbinHeight);
    pop();
    }

}