const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var circulo1;
var piedra1;
var hierro1;
var minipelota1,minipelota2,minipelota3,minipelota4,minipelota5;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    circulo1=new Rubber(800,300,90);
    piedra1=new stone(300,300,50,50);
    hierro1=new hierro(200,300,25,40);
    minipelota1=new minipelota(250,300,10);
    minipelota2=new minipelota(260,300,10);
    minipelota3=new minipelota(270,300,10);
    minipelota4=new minipelota(280,300,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    circulo1.display();
    piedra1.display();
    hierro1.display();
    minipelota1.display();
    minipelota2.display();
    minipelota3.display();
    minipelota4.display();
 
}