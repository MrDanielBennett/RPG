export class Character{
  constructor(){
    this.health = 10;
    this.energy = 10;
    this.speed = 1;
    this.attack = 1;
    this.level = 1;
    this.experience = 0;
    this.inventory = [];
    this.dead = false;
  }
  levelUp() {
    if (this.experience === 100) {
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
    if (this.inventory.includes("sword")){
      this.attack +=4;
    } else if (this.inventory.includes("magic_staff")){
      this.attack +=3;
    } else if (this.inventory.includes("bow")){
      this.attack +=2;
    }
  }
}
