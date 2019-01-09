export class Battle {
  constructor(player, enemy) {
    this.player = player;
    this.enemy = enemy;
  }

  function battle() {
    let playerAttack = setInterval(function() {
      while (this.enemy.dead === false && this.player.dead === false) {
        this.enemy.death();
        this.player.death();
        this.enemy.health -= this.player.attack;
      }
    }(5000-(this.player.speed*400)));
  }
}
