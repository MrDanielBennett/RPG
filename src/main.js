import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Knight} from './knight.js'

$(document).ready(function() {

let test = new Knight();
test.weaponCheck();
console.log(test);

});
