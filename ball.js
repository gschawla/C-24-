class Ball{
    constructor(x, y) {
      var options = {
        isStatic:true,
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
        
      }
      this.body = Bodies.circle(x, y,2, options);
     // this.radius = radius;
     // this.width = width;
     // this.height = height;
      
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        
        translate(pos.x, pos.y);
      ellipse(0, 0,2);
      
      
    }
  };