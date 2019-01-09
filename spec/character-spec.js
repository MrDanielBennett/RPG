import { Character } from './../src/character.js';
import { Knight } from './../src/knight.js';

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

describe('weaponCheck', function() {
  it('should identify sword in inventory and add attack', function() {
    let base = new Character();
    base.inventory = ['sword'];
    base.weaponCheck();
    expect(base.attack).toEqual(4);
  });
});
