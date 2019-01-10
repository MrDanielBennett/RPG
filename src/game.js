import { Character } from './character.js';

// var ARROW_MAP = {
//   37: 'left',
//   40: 'up',
//   39: 'right',
//   38: 'down'
// };


export class Game {
  constructor(canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
    this._width = width;
    this._height = height;
    this._ctx = canvas.getContext('2d'); // store context to draw something
    this._player = new Character(this._ctx, this._width / 20, this._height / 20); // create a simple player
    console.log(this._player);
  }

  play() {
    this._clear(); // clear the whole canvas to draw something new
    this._drawBorder(); // draw a game area border
    this._player.draw(); // update player on each tick

    if (this._checkState()) { // check game status : run other tick if player doesn't lose =)
      requestAnimationFrame(this.play.bind(this));
      // this._battleRNG(); // run play again ~60 times per sec
    } else {
      this._playLose();
    }
  }

  _checkState() {
    let borders = this._player.getBorders();
    return (borders.xMin >= 0 &&
      borders.xMax <= this._width &&
      borders.yMin >= 0 &&
      borders.yMax <= this._height);
  }

  // _battleRNG(e) {
  //   let arrow = ARROW_MAP[e.keyCode];
  //
  //   if ((arrow === 'left') || (arrow === 'right') || (arrow === 'up') || (arrow === 'down')) {
  //     let rng = (Math.floor(Math.random() * 100));
  //     console.log(rng);
  //   }
  // }

  _playLose() {
    this._ctx.beginPath();
    this._ctx.font = '30px serif';
    this._ctx.fillStyle = 'red';
    this._ctx.fillText("You lose!", this._width / 2, this._height / 2);
  }

  _drawBorder() {
    this._ctx.beginPath();
    this._ctx.rect(0, 0, this._width, this._height);
    this._ctx.stroke();
  }

  _clear() {
    this._ctx.clearRect(0, 0, this._width, this._height); // just clear the whole game area
  }


}
