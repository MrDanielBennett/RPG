import $ from 'jquery';
import * as character from './character.js';
import * as monster from './monster.js';
import * as url from '../img/dungeon_tiles.png';
import * as wallUrl from '../img/wall.png';
import * as slimeSprite from '../img/rpgcritters_slime.png';
// import { PlayerHealth } from './statUI.js'

export class Game {
  constructor(canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
    this._width = width;
    this._height = height;
    this._ctx = canvas.getContext('2d'); // store context to draw something
    this._player = new character.Knight(this._ctx, this._width / 20, this._height / 20);
    this._player.weaponCheck();
    this._monster = new monster.Placeholder(this._ctx, this._width / 20, this._height / 20, this._player._x, this._player._y);
    console.log(slimeSprite.default);
    // create a simple player
    console.log(this._player);
  }

  play() {
    this._clear(); // clear the whole canvas to draw something new
    this._drawBorder(); // draw a game area border
    this._drawTerrain();
    this._drawLayout();
    this._player.draw(); // update player on each tick
    if (this._player.inBattle === true) {
      let slime = this._monster;
      slime.ImgSource = slimeSprite.default;
      slime._x = this._player._x + 5;
      slime._y = this._player._y;
      slime.draw();
    }
    if (this._checkState() === false) { // check game status : run other tick if player doesn't lose =)
      requestAnimationFrame(this.play.bind(this));
    } else {
      this._playLose();
    }
    $('#playerHealth').text(this._player.health);
  }

  _playLose() {
  this._ctx.beginPath();
  this._ctx.font = '50px serif';
  this._ctx.fillStyle = 'red';
  this._ctx.fillText("Y O U  D I E D", this._width / 5, this._height / 2);
}

  _checkState() {
    return this._player.dead;
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
    this._ctx.drawImage(mapItem,32,31,160,180,0,0,this._width*2,this._height*2);
  }

  _drawLayout() {
    let wall = document.createElement('img');
    wall.src = wallUrl.default;
    // ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    this._ctx.drawImage(wall,20,50,20,50);
    // let wallWith =
  }

  _clear() {
    this._ctx.clearRect(0, 0, this._width, this._height); // just clear the whole game area
  }

}
