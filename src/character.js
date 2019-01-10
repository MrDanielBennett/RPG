// import * as map from '../img/dungeon_tiles.png';
import * as mage from '../img/wizard.png';
import * as monster from './monster.js';
import {Battle} from './battle.js'

var ARROW_MAP = {
  37: 'left',
  40: 'up',
  39: 'right',
  38: 'down'
};

export class Character {
  constructor(ctx, width, height){
    this.health = 10;
    this.energy = 10;
    this.speed = 1;
    this.attack = 1;
    this.level = 1;
    this.experience = 0;
    this.inventory = [];
    this.equipped = [];
    this.inBattle = false;
    this.dead = false;
    this._ctx = ctx;
    this._width = width;
    this._height = height;
    this._x = 0;
    this._y = 0;
    this._speed = 5; //set default player speed
    document.addEventListener('keydown', this.keydown.bind(this));
    //https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
    document.addEventListener('keydown', this._battleRNG.bind(this));
  }

  levelUp() {
    if (this.experience >= 100) {
      this.experience = 0;
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
    let slime = new monster.Slime();
    if (Math.floor(Math.random() * 100) < 5) {
      let battle = new Battle(this, slime);
      console.log('Attack!');
      battle.attack();
      // battle = new Battle(this, )
    }
  }

  draw() {
    let sprite = document.createElement('img');
    sprite.src = mage.default;
    this._ctx.beginPath();
    this._ctx.drawImage(sprite,this._x,this._y)
    // this._ctx.rect(this._x, this._y, this._width, this._height);
    // this._ctx.fillStyle = 'yellow';
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
      this._x -= this._speed;
    }
    if (arrow === 'right') {
      this._x += this._speed;
    }
    if (arrow === 'up') {
      this._y += this._speed;
    }
    if (arrow === 'down') {
      this._y -= this._speed;
    }
  }
}

export class Archer extends Character {
  constructor() {
    super();
    this.speed = 3;
    this.equipped = ["bow", "rags"];
  }
}

export class Knight extends Character {
  constructor() {
    super();
    this.health = 20;
    this.equipped = ["sword", "rags"];
  }
}

export class Wizard extends Character {
  constructor() {
    super();
    this.attack = 4;
    this.equipped = ["magic_staff", "rags"];
  }
}
