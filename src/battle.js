export class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  attack() {
    let player = this.player;
    let enemy = this.enemy;
    let playerAttack = setInterval(function() {
      enemy.death();
      player.death();
      if (enemy.dead === true || player.dead === true) {

        clearInterval(playerAttack)
      } else {
        enemy.health -= player.attack;
        console.log('player hit');
      }
    }, (5000-(player.speed*400)));

    let enemyAttack = setInterval(function() {
      enemy.death();
      player.death();
      if (enemy.dead === true || player.dead === true) {

        clearInterval(enemyAttack)
      } else {
        player.health -= enemy.attack;
        console.log('enemy hit');
      }
    }, (5000-(enemy.speed*400)));

  }

}
