class Sling{
    constructor(body1, point2) {
        var options = {
            bodyA: body1,
            pointB: point2,
            //stiffness = 1,
            angularStiffness: 1,
            length: 520
        }
        this.pointB = point2;
        this.pointX = body1.x;
        this.pointY = body1.y - 250;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    display() {
        var pointA = this.sling.bodyA.position
        var pointB = this.pointB;
        push();
        strokeWeight(3.5);
        stroke("#fff");
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
    }
}