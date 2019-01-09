import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Knight} from './knight.js';
import {Wizard} from './wizard.js';
import {Archer} from './archer.js';
import {Monster} from './monster.js';
import {Battle} from './battle.js'

$(document).ready(function() {
  let test_monster = new Monster();
  let test_knight = new Knight();
  let test_wizard = new Wizard();
  let test_archer = new Archer();
  let battle = new Battle(test_archer, test_monster);
  test_knight.weaponCheck();
  test_wizard.weaponCheck();
  test_archer.weaponCheck();
  battle.attack();
  console.log(test_monster);
  // console.log(test_archer);
  // console.log(test_wizard);
  // console.log(test_knight);
});
