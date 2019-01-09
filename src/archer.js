import { Character } from './character.js';

export class Archer extends Character {
  constructor() {
    super();
    this.speed = 3;
    this.inventory = ["bow"];
  }
}
