class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            // 'friction':0,
            // 'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 32, 45, options);
        this.width = 30;
        this.height = 45;
        // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}