class Box {
  constructor(x, y, width, height, angle) {
      var options = {
          restitution:0.8,
          friction:1.0,
          density:1.0
        }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("box.png");
      this.Visiblity=255;
      World.add(world, this.body);
    }
    score(){
      if(this.Visiblity<0&&this.Visiblity>-105){
        score++;
      }
    }
    display(){
      var pos=this.body.position;
      var angle=this.body.angle;
      if (this.body.speed<5){        
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();          
      }else{
        World.remove(world,this.body);
        push();
       this.Visiblity=this.Visiblity-5; 
      tint(255,this.Visiblity);
      imageMode(CENTER);
      image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
      pop();
      }
    }
}
