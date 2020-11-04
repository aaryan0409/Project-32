const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var ground1,backgroundImg;
var polygonimg,polygon;
var score=0;
var bg="day.png";

function preload(){
  getBackgroundImg();
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
 
  ground1=new Ground(400,395,800,10);
  stand1=new Ground(400,330,200,20);
  stand2=new Ground(650,250,200,20);
  block1=new Box(325,305,50,50);
  block2=new Box(375,305,50,50);
  block3=new Box(425,305,50,50);
  block4=new Box(475,305,50,50);
  block5=new Box(350,255,50,50);
  block6=new Box(400,255,50,50);
  block7=new Box(450,255,50,50);
  block8=new Box(375,205,50,50);
  block9=new Box(425,205,50,50);
  block10=new Box(400,155,50,50);
  block11=new Box(575,225,50,50);
  block12=new Box(625,225,50,50);
  block13=new Box(675,225,50,50);
  block14=new Box(725,225,50,50);
  block15=new Box(600,175,50,50);
  block16=new Box(650,175,50,50);
  block17=new Box(700,175,50,50);
  block18=new Box(625,125,50,50);
  block19=new Box(675,125,50,50);
  block20=new Box(650,75,50,50);
  polygon=new Polygon(50,200,20);
  
  slingshot=new SlingShot(polygon.body,{x:150,y:200});

  Engine.run(engine);
}

function draw() {
  if(backgroundImg){
  background(backgroundImg); 
  }
  drawSprites();
  text("SCORE:"+score,730,40);
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
    
  ground1.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  polygon.display();
  slingshot.display();
  
  
}

function mouseDragged(){
  
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  
  
}


function mouseReleased(){
  slingshot.fly();
  
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
      bg = "day.jpg";
  }
  else{
      bg = "night.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}