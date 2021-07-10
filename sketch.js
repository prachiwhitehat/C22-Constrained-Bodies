const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ball;


function setup() {
    createCanvas(400,400);

    engine= Engine.create();
    world= engine.world;

    var ball_options={
        restitution:0.8,
        frictionAir:0.01
    }

    ball = Bodies.circle(200,50,20,ball_options);

    World.add(world,ball);

   
    
    constraint=Matter.Constraint.create({
        pointA:{x:220,y:20},
        bodyB:ball,
        pointB:{x:0,y:0},
        
        length:100,
        stiffness:0.1
    })
    World.add(world,constraint)

  
}

function draw() 
{
  background('black');

  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)

  push();
  strokeWeight(3);
  stroke('white');
  line(constraint.pointA.x,constraint.pointA.y,ball.position.x,ball.position.y);
  pop();
}
function keyPressed(){
    if(keyCode==UP_ARROW){
     Matter.Body.applyForce(ball,{x:0,y:0},{x:1.5,y:0})
    }
}
