class Pig{


  constructor(x,y,w,h){
  var options = {
   restitution : 0.8,
   friction : 0.3,
   density : 1
  }

    this.with = w
    this.height = h
    this.body = Bodies.rectangle (x,y,w,h,options)
    World.add(world,this.body)
  }
     Appear(){
     var pos = this.body.position 
     var angle = this.body.angle
     push ()
     translate (pos.x,pos.y)
     rotate (angle)
     fill("purple")
     stroke ("blue")
     rectMode (CENTER)
     rect (0,0,this.with,this.height);
     pop ()

     }
}