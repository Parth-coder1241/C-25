const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1110,500,50,50);
    box2 = new Box(990,500,50,50);
    box3 = new Box(1110,400,50,50);
    box4 = new Box(990,400,50,50);
    box5 = new Box(1050,280,50,50);
    ground = new Ground(200,height,2000,20);
    pig = new Pig(1050,500);
    pig2 = new Pig(1050,400);
    log= new Log(1045,400,200,PI/2);
    log2= new Log(1045,295,200,PI/2);
    log3= new Log(1045,280,100,PI/7);
    log4=new Log(1060,280,100,-PI/7);
    bird= new Bird(600,300)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    console.log(pig,log);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig2.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}