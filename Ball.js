class Ball{
    constructor(x,y,width,height,angle){
        var options={
            density:1,
            FrictionAir:0.005
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("green");
        fill(255);
        ellipse(0, 0, this.width, this.height);
        pop();
      }
}