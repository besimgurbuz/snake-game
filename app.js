const GAME_EDGE = 500;
const S_EDGE = 20;
const S_COLOR = '#66bb6a';
const H_COLOR = '#388e3c';
let vt = S_EDGE + 5;

const canvas = document.querySelector('#game');
canvas.width = GAME_EDGE;
canvas.height = GAME_EDGE;

const ctx = canvas.getContext('2d');
var s = new Snake();
document.addEventListener('keydown', keyPressed);



var food = {
  x: vt * (Math.floor(Math.random() * (19))),
  y: vt * (Math.floor(Math.random() * (19))),

  draw: function() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, S_EDGE, S_EDGE);
  },
  changeDir: function() {
    this.x = vt * (Math.floor(Math.random() * (19)));
    this.y = vt * (Math.floor(Math.random() * (19)));
  },
};

function Game() {
  ctx.clearRect(0, 0, GAME_EDGE, GAME_EDGE);
  food.draw();
  s.update();
  s.draw();
  if(s.gameover()) {
    ctx.fillStyle = 'black';
    ctx.font = "35px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Game Over!", 250, 250);
    ctx.font = "25px Arial";
    ctx.fillText(`Score: ${s.len}`,250, 275);
    clearInterval(interval);
  }
    if(s.eat(food)) food.changeDir();
}

function keyPressed(e) {
  switch(e.code) {
    case 'KeyW':
      s.dir(0, -vt);
      break;
    case 'KeyA':
      s.dir(-vt, 0);
      break;
    case 'KeyD':
      s.dir(vt, 0);
      break;
    case 'KeyS':
      s.dir(0, vt);
      break;
  }
}


var interval = setInterval(Game, 100);