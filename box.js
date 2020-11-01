class Box{
    constructor(x,y,width,height){
        var options = {
         restitution:0.5,
         density:1.0,
         friction:0.3
        }
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.width=width;
   this.height=height;
   World.add(world,this.body);
   this.body.color="red";

   
    }
   display(){ 
   var pos = this.body.position
   var angle = this.body.angle;
   push ();
   translate(pos.x,pos.y);
   rotate (angle);
   rectMode(CENTER);
   fill ("green");
   rect(0,0,this.width,this.height);
   pop ();
   }
   
   
   }