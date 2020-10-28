class Box {
	constructor(x,y,width,height){
		var options = {
			friction:1,
			restitution:0.1,
			density:0.4
		}
		this.width = width;
		this.height = height;
		this.body = Bodies.rectangle(x,y,width,height,options);
		World.add(world,this.body);
	}

	display(){
		push();
		var angle = this.body.angle;
		var pos = this.body.position;
		translate(pos.x,pos.y);
		rotate(angle);
		strokeWeight(4);
		stroke("brown");
		fill("red");
		rect(0,0,this.width,this.height);
		pop();
	}
}
