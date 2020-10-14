class Chain{
    constructor(bodyA, anchor){
        var options={
            bodyA : bodyA,
            pointB : anchor,
            stiffness:.004,
            length: 10
        }
        this.bodyA = bodyA;
        this.pointB = anchor;
        this.chain  = Constraint.create(options);
        World.add(world,this.chain);
        
    }
    attach(body){
        this.chain.bodyA = body;
    }
    fly(){
        this.chain.bodyA = null;
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }  
    }
}