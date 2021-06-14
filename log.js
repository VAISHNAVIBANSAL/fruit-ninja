class Log{


    constructor(x,y,h,a){
    var options = {
     restitution : 0.8,
     friction : 0.3,
     density : 1
    }
  
      this.width = 20
      this.height = h
      this.body = Bodies.rectangle (x,y,20,h,options);
      Matter.Body.setAngle(this.body,a);
      World.add(world,this.body);
    }
       Appear(){
       var pos = this.body.position 
       var angle = this.body.angle
       push ()
       translate (pos.x,pos.y)
       rotate (angle)
       fill("green")
       stroke ("yellow")
       rectMode (CENTER)
       rect (0,0,this.width,this.height);
       pop ()
  
       }
  }