import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Game } from './game.js';
// import * as character from './character';
// import {Monster} from './monster.js';
// import {Battle} from './battle.js'


$(document).ready(function() {

  let game = new Game(document.getElementsByTagName('canvas')[0], 512, 480);
  game.play();
  

});
