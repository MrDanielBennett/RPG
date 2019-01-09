import { Character } from './../src/character.js';
import { Knight } from './../src/knight.js';
import { Wizard } from './../src/wizard.js';
import { Monster } from './../src/monster.js';
import { Battle } from './../src/battle.js';

describe('Character', function() {

  it('should create base character with no stat changes', function() {
    let base = new Character();
    expect(base.health).toEqual(10);
  });
});

describe('Knight', function() {

  it('should create a knight character with stat changes', function() {
    let knight = new Knight();
    expect(knight.health).toEqual(20);
  });
});

describe('Wizard', function() {

  it('should create a knight character with stat changes', function() {
    let wizard = new Wizard();
    expect(wizard.attack).toEqual(4);
  });
});

describe('weaponCheck', function() {
  it('should identify sword in inventory and add attack', function() {
    let swordBase = new Character();
    swordBase.inventory = ['sword'];
    swordBase.weaponCheck();
    expect(swordBase.attack).toEqual(5);
  });

  it('should identify magic_staff in inventory and add attack', function() {
    let staffBase = new Character();
    staffBase.inventory = ['magic_staff'];
    staffBase.weaponCheck();
    expect(staffBase.attack).toEqual(4);
  });
});

describe('battle', function() {

  it('should simulate a battle to the death', function() {
    let player = new Knight();
    let enemy = new Monster();
    let battle = new Battle(player, enemy);
    battle.attack();
    expect(player.inBattle).toEqual(true);
  });

  it('should gain player experience every hit and level up', function() {
    let player = new Knight();
    let enemy = new Monster();
    player.experience = 101;
    player.levelUp();
    expect(player.level).toEqual(2);
  });
});
