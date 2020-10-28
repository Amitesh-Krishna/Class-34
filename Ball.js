class Ball {
	constructor(x,y,r){
		var options = {
			frictionAir:0.02,
			density:1.2
		}
		this.width = width;
		this.height = height;
		this.body = Bodies.circle(x,y,r,options);
		World.add(world,this.body);
		this.r = r;
	}

	display(){
		push();
		var angle = this.body.angle;
		var pos = this.body.position;
		translate(pos.x,pos.y);
		rotate(angle);
		strokeWeight(4);
		stroke("red");
		fill("brown");
		ellipseMode(RADIUS);
		ellipse(0,0,this.r,this.r)
		pop();
	}
}
