class Bird{


    constructor(x,y){
    var options = {
     restitution : 0.8,
     friction : 0.3,
     density : 1
    }
  
      this.width = 50
      this.height = 50
      this.body = Bodies.rectangle (x,y,50,50,options)
      World.add(world,this.body)
    }
       Appear(){
       var pos = this.body.position 
       pos.x = mouseX
       pos.y = mouseY
       var angle = this.body.angle
       push ()
       translate (pos.x,pos.y)
       rotate (angle)
       fill("yellow")
       stroke ("lightblue")
       rectMode (CENTER)
       rect (0,0,this.width,this.height);
       pop ()
  
       }
  }