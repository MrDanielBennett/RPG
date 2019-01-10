import { Character } from './character.js';
import * as url from '../img/dungeon_tiles.png';
import * as wallUrl from '../img/wall.png';

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

  // _init() {
  //   let mapItem = new Image();
  //   mapItem.src = 'img/dungeon_tiles'

    // terrainPattern = ctx.createPattern(resources.get('img/terrain.png'), 'repeat');

    // document.getElementById('play-again').addEventListener('click', function() {
    //     reset();
    // });
    //
    // reset();
    // lastTime = Date.now();
    // main();
// }

  play() {
    this._clear(); // clear the whole canvas to draw something new
    this._drawBorder(); // draw a game area border
    this._drawTerrain();
    this._drawLayout()
    this._player.draw(); // update player on each tick
    // this._ctx.fillRect(20, 20, 150, 100);

    if (this._checkState()) { // check game status : run other tick if player doesn't lose =)
      requestAnimationFrame(this.play.bind(this));
      // this._battleRNG(); // run play again ~60 times per sec
    } else {
      // this._playLose();
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
    this._ctx.fillStyle = '#201D26';
    this._ctx.fillRect(0, 0, this._width, this._height);
    this._ctx.stroke();
  }

  _drawTerrain() {
    let mapItem = document.createElement('img');
    mapItem.src = url.default;
    // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    this._ctx.drawImage(mapItem,32,31,160,180,0,0,this._width*2,this._height*2)
  }

  _drawLayout() {
    let wall = document.createElement('img');
    wall.src = wallUrl.default;
    // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    this._ctx.drawImage(wall,20,50,20,50)
    // let wallWith =
  }

  _clear() {
    this._ctx.clearRect(0, 0, this._width, this._height); // just clear the whole game area
  }


}
