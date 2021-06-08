class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    this.traject = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var pos = [this.body.position.x,this.body.position.y];
      this.traject.push(pos)
    }
    
    for(var i =0;i<this.traject.length;i++){
      image(this.image2,this.traject[i][0],this.traject[i][1]);
    }
  }
}
