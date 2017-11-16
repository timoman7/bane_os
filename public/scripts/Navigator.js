/**
* Class for Navigator elements
*
*/
import {SCREEN} from './Screen.js';

export default class Navigator{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.backgroundColor = "#20a0a0";
    this.textColor = "#f0aaaa";
  }
  set(prop, val){
    this[prop] = val;
  }
  get(prop){
    return this[prop];
  }
  update(){

  }
  draw(){
    SCREEN.fillStyle = this.backgroundColor;
    SCREEN.fillRect(this.x, this.y, this.width, this.height);
  }
}
