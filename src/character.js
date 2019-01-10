export class Character{
  constructor(){
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
