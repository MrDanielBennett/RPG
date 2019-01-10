import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as character from './character';
import {Monster} from './monster.js';
import {Battle} from './battle.js'

$(document).ready(function() {
  let test_monster = new Monster();
  let test_knight = new character.Knight();
  let test_wizard = new character.Wizard();
  let test_archer = new character.Archer();
  let battle = new Battle(test_archer, test_monster);
  test_knight.weaponCheck();
  test_wizard.weaponCheck();
  test_archer.weaponCheck();
  battle.attack();
  console.log(test_monster);
  console.log(test_archer);
  // console.log(test_wizard);
  // console.log(test_knight);
});
