export class Monster{
  constructor(){
    this.health = 10;
    this.speed = 1;
    this.attack = 1;
    this.dead = false;
  }
  death(){
    if(this.health < 1){
      this.dead = true;
    }
  }
}
