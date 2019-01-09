import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Knight} from './knight.js'
import {Wizard} from './wizard.js'

$(document).ready(function() {
let test_knight = new Knight();
let test_wizard = new Wizard();
test_knight.weaponCheck();
test_wizard.weaponCheck();
console.log(test_wizard);
console.log(test_knight);

});
