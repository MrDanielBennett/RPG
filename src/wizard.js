import { Character } from './character.js';

export class Wizard extends Character {
  constructor() {
    super();
    this.attack = 4;
    this.inventory = ["magic_staff"];
  }
}
