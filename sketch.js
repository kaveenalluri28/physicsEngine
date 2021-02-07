const Engine = Matter.Engine; // the force that puts physical laws into bodies

const World = Matter.World; // world for all the bodies
const Bodies = Matter.Bodies; // soul creation for body ( bodies on the said earth)

var engine,world,body; // objects of above classes
var ground;



function setup() {
  createCanvas(800,800);

  engine = Engine.create(); // engine object gets created with Engine class properties;
  world = engine.world; // attaching world object to engine object
 
// giving some options to normal soul
 var options = {

  isStatic : true

 }


// creating the soul part for dummy body
   body = Bodies.rectangle(600,100,50,50,options); // soul part
   World.add(world,body); // adds the soul into the world

   

   console.log("hello");
   console.log(body);

}

function draw() {
  background(0);  

  Engine.update(engine); // updates the engine object (like reset)

  rectMode(CENTER); // changing the rect dynamics to center point - for every rect body
  rect(body.position.x,body.position.y,50,50);// dummy bodies ( will not follow engine unless there is soul attached)
// attach soul to dummy using x,y positions of dummy body)
 
}



//. add matter.js into index.html

// -------------before setup - in sketch file------------------

// nameSpacing - addes const Bodies = Matter.Bodies....etc
// create objects for classes

// -------------setup---------------------

// create engine, world objects and attach them to their classes
// create a soul ( options - create options for soul as well)
// add soul to the world


// ----------------draw function-------------

// update the engine
//make the dummy body's rectMode to CENTER - positioning
// make the dummy body
// attach dummy to the soul by rewriting the x, y positions ( attach soul)