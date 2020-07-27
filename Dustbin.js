class Dustbin {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.dustbinWidth = 200;
      this.dustbinHeight = 100;
      this.wallThickness = 20;
      this.angle = 0;



      this.Bottombody = Bodies.rectangle(this.x,this.y,this.dustbinWidth, this.wallThickness,options);
      this.Leftbody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2, this.wallThickness,this.dustbinHeight,options);
      Matter.Body.setAngle(this.Leftbody,this.angle);
      this.Bottombody = Bodies.rectangle(this.x,this.y,this.dustbinWidth, this.wallThickness,options);
      this.Rightbody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2, this.wallThickness,this.dustbinHeight,options);
      //Matter.Body.setAngle(this.Rightbody,this.angle);

     // this.Leftbody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2, this.wallThickness,this.dustbinHeight,options);

      //Matter.Body.setAngle(this.leftBody, -1*this.angle);
      World.add(world,this.Leftbody);
      World.add(world,this.Bottombody);
      World.add(world,this.Rightbody);
      


      //this.width = width;
      //this.height = height;
     // World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;
      ////rectMode(CENTER);
      //fill("brown");
      //rect(pos.x, pos.y, this.width, this.height);

      var posBottom= this.Bottombody.position;
      var posLeft= this.Leftbody.position;
      var posRight= this.Rightbody.position;





      push()
      translate(posLeft.x,posLeft.y);
      rectMode(CENTER)
      angleMode(RADIANS)
      fill(255)
      stroke(255)
      rotate(this.angle)
      rect(0,0,this.wallThickness,this.dustbinHeight);
      pop()

      push()
      translate(posRight.x,posRight.y);
      rectMode(CENTER)
      angleMode(RADIANS)
      fill(255)
      stroke(255)
      rotate(-1*this.angle)
      rect(0,0,this.wallThickness,this.dustbinHeight);
      pop()


      push()
      translate(posBottom.x,posBottom.y);
      rectMode(CENTER)
      angleMode(RADIANS)
      fill(255)
      stroke(255)
      rotate(this.angle)
      rect(0 , 0 , this.dustbinWidth, this.wallThickness); 
      pop()





    }
  }
