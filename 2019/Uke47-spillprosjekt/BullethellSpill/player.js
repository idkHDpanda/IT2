class Player{
  constructor(x){
    this.c = 20;
    this.y = height - 30;
  }

  tegn(){
    noFill();
    stroke(255);
    triangle(this.x - this.c, this.y ,this.x + this.c, this.y, this.x, this.y - 40);
  }
  
  flytt(){
    this.x = mouseX;
  }

}
