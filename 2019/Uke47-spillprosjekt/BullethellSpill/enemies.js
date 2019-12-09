class Enemies{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 55;
    this.borte = false;

    this.xdir = 1;

    this.farge = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`

  }
  tegn(){
    stroke("crimson");
    circle(this.x, this.y, this.r);
  }

  flytt(){
    this.x = this.x + this.xdir;
  }


  ned(){
    this.xdir += -1;
    this.y += this.r;
  }

  ned2(){
    this.xdir += 1;
    this.y += this.r;
  }

  fjerne(){
    this.borte = true;
  }

  kollisjon(){
    alert("Game Over")
  }
}
