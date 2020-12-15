class Pendulum{
    constructor(x, y, r, color) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            frictionAir: 0.0,
            density: 1,
            slop: 1,
            inertia: Infinity
        }
        this.width = r * 2;
        this.body = Matter.Bodies.circle(x, y, r, options);
        this.color = color
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0, 0, this.width, this.width);
        pop();
    }
}