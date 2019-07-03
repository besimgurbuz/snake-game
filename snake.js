class Snake {
  x = 100;
  y = 100;
  len = 1;
  tail = [];
  xspeed = vt;
  yspeed = 0;

  dir = (dX, dY) => {
    if((this.xspeed > 0 && dX < 0) || (this.xspeed < 0 && dX > 0)) {}
    else if((this.yspeed > 0 && dY < 0) || (this.yspeed < 0 && dY > 0)){}
    else {
      this.xspeed = dX;
      this.yspeed = dY;
    }
  };

  eat = foodDir => {
    if (this.head.x === foodDir.x && this.head.y === foodDir.y) {
      this.len++;
      return true;
    }
    return false;
  };
  gameover = () => {
    for(var i = 0; i < this.len - 1; i++) {
      if(this.x == this.tail[i].x && this.y == this.tail[i].y){
        return true;
      }
    }
    return false;
  }
  update = () => {
    this.tail[this.len - 1] = { x: this.x, y: this.y };
    for (var i = 0; i < this.len - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.head = this.tail[this.len - 1];
    this.x += this.xspeed;
    this.y += this.yspeed;
    
    if(this.x >= GAME_EDGE) this.x = 0;
    else if(this.x < 0) this.x = GAME_EDGE;
    if(this.y >= GAME_EDGE) this.y = 0;
    else if(this.y < 0) this.y = GAME_EDGE;
    this.tail[this.len - 1] = { x: this.x, y: this.y };

  };
  draw = () => {
    for (var i = 0; i < this.len; i++) {
      if(i === this.len - 1) ctx.fillStyle = H_COLOR;
      else ctx.fillStyle = S_COLOR;
      ctx.fillRect(this.tail[i].x, this.tail[i].y, S_EDGE, S_EDGE);
    }
  };
}
