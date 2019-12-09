class Bullets{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 10;
    this.farge = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    this.borte = false;
  }

  tegn(){
    noFill();
    stroke(this.farge);
    circle(this.x, this.y, this.r);
      }

    flytt(){
        this.y = this.y - 5;
    }

    treffer(enemies){
      let d = dist(this.x, this.y, enemies.x, enemies.y);
        if(d <= this.r + enemies.r - 35){
          return true;
        }
        else{
          return false;
        }
      }

      fjerne(){
        this.borte = true;
      }

    }
