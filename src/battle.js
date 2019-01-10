export class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  attack() {
    let player = this.player;
    let enemy = this.enemy;
    let battle = this;
    player.inBattle = true;
    enemy.inBattle = true;
    battle._battleFreeze();
    let playerAttack = setInterval(function() {
      enemy.death();
      player.death();
      if (enemy.dead === true || player.dead === true) {
        player.inBattle = false;
        enemy.inBattle = false;
        battle._battleFreeze();
        clearInterval(playerAttack);
      } else {
        enemy.health -= player.attack;
        player.experience += 3;
        player.levelUp();
        console.log('player hit, enemy health:', enemy.health);
      }
    }, (5000-(player.speed*400)));

    let enemyAttack = setInterval(function() {
      enemy.death();
      player.death();
      if (enemy.dead === true || player.dead === true) {
        player.inBattle = false;
        enemy.inBattle = false;
        clearInterval(enemyAttack);
      } else {
        player.health -= enemy.attack;
        console.log('enemy hit, player health:', player.health);
      }
    }, (5000-(enemy.speed*400)));

  }

  _battleFreeze() {
    let player = this.player;
    if (player.inBattle === true) {
      player._speed = 0;
    } else player._speed = 5;
  }

  useHealthPotion() {
    let player = this.player;
    if (player.inventory.includes('health_potion')) {
      player.health += 5;
    } else console.log('no health potion present');
  }

}
