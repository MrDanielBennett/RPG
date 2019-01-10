import * as slimeSprite from '../img/rpgcritters_slime.png';
import * as placeholder from '../img/rpgcritters_placeholder.png';

export class Monster{
  constructor(ctx, width, height, x, y){
    this.health = 10;
    this.speed = 1;
    this.attack = 1;
    this.inBattle = false;
    this.dead = false;
    this._ctx = ctx;
    this.ImgSource = placeholder.default;
    this._width = width;
    this._height = height;
    this._x = x;
    this._y = y;
  }
  death(){
    if(this.health < 1){
      this.dead = true;
    }
  }

  draw() {
    let sprite = document.createElement('img');
    sprite.src = this.ImgSource;
    this._ctx.beginPath();
    this._ctx.drawImage(sprite,this._x+10,this._y+10);
    this._ctx.fill();
    return 'hello';
  }

}

export class Placeholder extends Monster {
  constructor(ctx, width, height, x, y) {
    super(ctx, width, height, x, y);

  }
}

export class Slime extends Monster {
  constructor(ctx, width, height, x, y) {
    super(ctx, width, height, x, y);
    this.ImgSource = slimeSprite.default;

  }
}

export class Skeleton extends Monster {
  constructor() {
    super();
    this.health = 20;
    this.speed = 3;
    this.attack = 3;
  }
}

export class Ogre extends Monster {
  constructor() {
    super();
    this.health = 30;
    this.attack = 10;
    this.speed = 0.5;
  }
}

export class Dragon extends Monster {
  constructor() {
    super();
    this.health = 80;
    this.attack = 15;
    this.speed = 2;
  }
}
