class Spiller{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.r = 20;
    this.farge = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
  }
  tegn(){
    fill(this.farge);
    circle(this.x, this.y, this.r);
  }
  flytt(){
    this.x += (mouseX - this.x)*0.01;
    this.y += (mouseY - this.y)*0.01;
  }
  spis(){
        this.r += 2
    }
  }
