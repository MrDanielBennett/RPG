// import * as map from '../img/dungeon_tiles.png';
import * as knightSprite from '../img/knight.png';
import * as archerSprite from '../img/archer.png';
import * as mage from '../img/wizard.png';
import * as monster from './monster.js';
import {Battle} from './battle.js';
// import { Game } from './game.js';

var ARROW_MAP = {
  37: 'left',
  40: 'up',
  39: 'right',
  38: 'down'
};

export class Character {
  constructor(ctx, width, height){
    this.class;
    this.health = 10;
    this.energy = 10;
    this.speed = 1;
    this.attack = 1;
    this.level = 1;
    this.experience = 0;
    this.xpToLevel = 100;
    this.inventory = [];
    this.equipped = [];
    this.inBattle = false;
    this.lastBattle = 0;
    this.dead = false;
    this._ctx = ctx;
    this._width = width;
    this._height = height;
    this._x = 25;
    this._y = 25;
    this._speed = 5; //set default player speed
    document.addEventListener('keydown', this.keydown.bind(this));
    //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
    document.addEventListener('keydown', this._battleRNG.bind(this));
  }

  levelUp() {
    if (this.experience >= this.xpToLevel) {
      this.experience = 0;
      this.xpTpLevel += 20;
      this.level ++;
      this.health += 5;
      this.energy += 5;
      this.speed ++;
      this.attack++;
    }
  }

  death(){
    if(this.health < 1){
      this.inventory = [];
      this.dead = true;
      // let game = new Game(document.getElementsByTagName('canvas')[0], 512, 480);
      // game.play();
    }
  }

  weaponCheck(){
    if (this.equipped.includes("sword")){
      this.attack +=4;
    } else if (this.equipped.includes("great_sword")){
      this.attack +=10;
      this.speed -1;
    } else if (this.equipped.includes("obsidian_great_sword")){
      this.attack +=20;
      this.speed -2;
    } else if (this.equipped.includes("magic_staff")){
      this.attack +=3;
    } else if (this.equipped.includes("sturdy_magic_staff")){
      this.attack +=5;
      this.speed += 1;
    } else if (this.equipped.includes("legendary_wizard_staff")){
      this.attack +=10;
      this.speed += 2;
    }  else if (this.equipped.includes("bow")){
      this.attack +=2;
    } else if (this.equipped.includes("longbow")){
      this.attack +=3;
    } else if (this.equipped.includes("machine_crossbow")){
      this.attack +=8;
      this.speed +=2;
    }
  }

  armorCheck(){
    if (this.equipped.includes('rags')){
      this.speed += 1;
    } else if (this.equipped.includes("leather_armor")){
      this.health +=10;
    } else if (this.equipped.includes("bronze_plate")){
      this.health +=20;
      this.speed -= 1;
    } else if (this.equipped.includes("steel_plate")){
      this.heat +=35;
      this.speed -= 2;
    } else if (this.equipped.includes("obsidian_plate")){
      this.heat +=60;
      this.speed -= 3;
    }
  }

  _battleRNG() {
    if (this.inBattle === false && ((Date.now() - this.lastBattle) > 20000)) {
      console.log(Date.now() - this.lastBattle);
      let slime = new monster.Spider(this._ctx, this._width, this._height, 0, 0);
      if (Math.floor(Math.random() * 100) < 5) {
        let battle = new Battle(this, slime);
        console.log(this);
        battle.attack();
        this.lastBattle = Date.now();
      }
    }
  }

  draw() {
    let sprite = document.createElement('img');
    if (this.class === 'knight') {
      sprite.src = knightSprite.default;
    } else if (this.class === 'mage') {
      sprite.src = mage.default;
    } else if (this.class === 'archer') {
      sprite.src = archerSprite.default;
    } else {
      sprite.src = archerSprite.default;
    }
    this._ctx.beginPath();
    this._ctx.drawImage(sprite,this._x,this._y);
    this._ctx.fill();
  }

  getBorders() {
    return {
      xMin: this._x,
      xMax: this._x + this._width,
      yMin: this._y,
      yMax: this._y + this._height,
    };
  }

  keydown(e) {

    let arrow = ARROW_MAP[e.keyCode];

    if (arrow === 'left') {
      // debugger;
      if (!(this._x - this._speed < 20)) {
        this._x -= this._speed;
      }
    }
    if (arrow === 'right') {
      if (!(this._x + this._speed > 475)) {
        this._x += this._speed;
      }
    }
    if (arrow === 'up') {
      if (!(this._y + this._speed > 390)) {
        // console.log(this._y);
        this._y += this._speed;
      }
      // this._y += this._speed;
    }
    if (arrow === 'down') {
      if (!(this._y - this._speed < 20)) {
        this._y -= this._speed;
      }
    }
  }
}

export class Archer extends Character {
  constructor(ctx, width, height) {
    super(ctx, width, height);
    this.class = 'archer';
    this.speed = 3;
    this.equipped = ["bow", "rags"];
  }
}

export class Knight extends Character {
  constructor(ctx, width, height) {
    super(ctx, width, height);
    this.class = 'knight';
    this.health = 20;
    this.equipped = ["sword", "rags"];
  }
}

export class Wizard extends Character {
  constructor(ctx, width, height) {
    super(ctx, width, height);
    this.class = 'mage';
    this.attack = 4;
    this.equipped = ["magic_staff", "rags"];
  }
}
