const Engine = Matter.Engine;
const Composite = Matter.Composite;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var backgroundImg;


function preload() {
    backgroundImg = loadImage("./sprites/golf-background.jpg");
}

function setup() {
    canvas = createCanvas(1600, 600);
    engine = Engine.create();
    world = engine.world;
    angleMode(RADIANS);

    ground = new Ground(width / 2, height - 10, width, 20);
    golfCart = new GolfCart(650, 200, 300, 300);
    rock1 = new Rock(300, 200);
    rock2 = new Rock(950, 200);
    flag = new Flag(1200, 200, 150, 150);
    log1 = new Log(250, 120, 150, PI / 7);
    log2 = new Log(1000, 120, 150, -PI / 7);
    golfBall = new GolfBall(100, 100);
    sling = new Slingshot({ x: 100, y: 400 }, golfBall.body);

}

function draw() {
    background(backgroundImg);
    Engine.update(engine);

    ground.display();
    golfCart.display();
    rock1.display();
    rock2.display();
    flag.display();
    log1.display();
    log2.display();
    sling.display();
    golfBall.display();

}

function mouseDragged() {
    Matter.Body.setPosition(golfBall.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    sling.fly();
}