
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var pendulum1;

function setup() {
	canvas = createCanvas(windowWidth / 2, windowHeight / 1.1);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Matter.Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	}
	mConstraint = Matter.MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

	pendulum1 = new Pendulum(width / 2 + 240, height / 2, 60, 'white');
	pendulum2 = new Pendulum(width / 2 + 120, height / 2, 60, 'white');
	pendulum3 = new Pendulum(width / 2, height / 2, 60, 'white');
	pendulum4 = new Pendulum(width / 2 - 120, height / 2, 60, 'white');
	pendulum5 = new Pendulum(width / 2 - 240, height / 2, 60, 'white');

	sling1 = new Sling(pendulum1.body, {x: pendulum1.body.position.x, y: pendulum1.body.position.y - 420})
	sling2 = new Sling(pendulum2.body, {x: pendulum2.body.position.x, y: pendulum2.body.position.y - 420})
	sling3 = new Sling(pendulum3.body, {x: pendulum3.body.position.x, y: pendulum3.body.position.y - 420})
	sling4 = new Sling(pendulum4.body, {x: pendulum4.body.position.x, y: pendulum4.body.position.y - 420})
	sling5 = new Sling(pendulum5.body, {x: pendulum5.body.position.x, y: pendulum5.body.position.y - 420})

	Engine.run(engine);
  
}


function draw() {
	background(0)

  Engine.update(engine);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}
