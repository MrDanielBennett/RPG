import { Character } from './character.js';

export class Knight extends Character {
  constructor() {
    super();
    this.health = 20;
    this.inventory = ["sword"];
  }
}
