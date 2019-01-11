import * as slimeSprite from '../img/rpgcritters_slime.png';
import * as spiderSprite from '../img/spider.png';
import * as skeletonSprite from '../img/skeleton.png';
import * as ogreSprite from '../img/ogre.png';
import * as dragonSprite from '../img/dragon.png';
import * as placeholder from '../img/rpgcritters_placeholder.png';

export class Monster{
  constructor(ctx, width, height, x, y){
    this.type;
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
    if (this.type === 'slime') {
      sprite.src = slimeSprite.default;
    } else if (this.type === 'skeleton') {
      sprite.src = skeletonSprite.default;
    } else if (this.type === 'spider') {
      sprite.src = spiderSprite.default;
    } else if (this.type === 'ogre') {
      sprite.src = ogreSprite.default;
    } else if (this.type === 'dragon'){
      sprite.src = dragonSprite.default;
    } else {
      sprite.ImgSource = placeholder.default;
    }
    this._ctx.beginPath();
    this._ctx.drawImage(sprite,this._x,this._y);
    this._ctx.fill();
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
    this.type = 'slime';
  }
}

export class Spider extends Monster {
  constructor(ctx, width, height, x, y) {
    super(ctx, width, height, x, y);
    this.type = 'spider';
  }
}

export class Skeleton extends Monster {
  constructor(ctx, width, height, x, y) {
    super(ctx, width, height, x, y);
    this.type = 'skeleton';
    this.health += 20;
    this.speed += 3;
    this.attack += 3;
  }
}

export class Ogre extends Monster {
  constructor(ctx, width, height, x, y) {
    super(ctx, width, height, x, y);
    this.type = 'ogre';
    this.health = 30;
    this.attack = 10;
    this.speed = 0.5;
  }
}

export class Dragon extends Monster {
  constructor(ctx, width, height, x, y) {
    super(ctx, width, height, x, y);
    this.type = 'dragon';
    this.health = 80;
    this.attack = 15;
    this.speed = 2;
  }
}
