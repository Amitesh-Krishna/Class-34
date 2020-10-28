const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function setup(){
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height,width,20);

	box1 = new Box(950,100,70,70);
	box2 = new Box(950,100,70,70);
	box3 = new Box(950,100,70,70);
	box4 = new Box(950,100,70,70);
	box5 = new Box(950,100,70,70);
	box6 = new Box(950,100,70,70);

	box7 = new Box(1020,100,70,70);
	box8 = new Box(1020,100,70,70);
	box9 = new Box(1020,100,70,70);
	box10 = new Box(1020,100,70,70);
	box11 = new Box(1020,100,70,70);
	box12 = new Box(1020,100,70,70);

	box13 = new Box(1090,100,70,70);
	box14 = new Box(1090,100,70,70);
	box15 = new Box(1090,100,70,70);
	box16 = new Box(1090,100,70,70);
	box17 = new Box(1090,100,70,70);
	box18 = new Box(1090,100,70,70);

	ball = new Ball(500,100,30);

	rope = new Rope(ball.body,{x:600,y:100})

	Engine.run(engine);
}

function draw(){
	background(127.5);

	ground.display();
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();

	box7.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();

	box13.display();
	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();

	ball.display();

	rope.display();
	//console.log(box1.y);
}

function mouseDragged(){

	Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}