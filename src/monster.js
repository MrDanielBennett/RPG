export class Monster{
  constructor(){
    this.health = 10;
    this.speed = 1;
    this.attack = 1;
    this.inBattle = false;
    this.dead = false;
  }
  death(){
    if(this.health < 1){
      this.dead = true;
    }
  }
}

export class Slime extends Monster {
  constructor() {
    super();
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
