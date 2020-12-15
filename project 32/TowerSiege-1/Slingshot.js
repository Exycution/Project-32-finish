class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 15
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.pointB = pointB;
    }
    
        attach(body){
            this.sling.bodyA = body;

        }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        // image(this.sling1,200,20);
        // image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            stroke(48,22,8);
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}