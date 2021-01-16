class Ball{

    constructor(x,y, radius){
    var options = {
        restitution : 0.9,
        friction : 0.7,
        density : 0.2
    }
    this.body = Bodies.circle(x,y,radius,options)
    this.radius = radius;
    World.add(world, this.body);
    }



display(){
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    translate(pos.x, pos.y);
    rotate(this.body.angle);
    fill("brown");
    ellipse(0, 0, this.radius, this.radius);
    pop();
}
}