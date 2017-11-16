/**
* Class for Desktop elements
*
*/
import {SCREEN} from './Screen.js';

export default class Desktop{
  constructor(width,height){
    this.width = width;
    this.height = height;
    this.BACKGROUND_COLOR = "#20a0a0";
  }
  set(prop, val){
    this[prop] = val;
  }
  get(prop){
    return this[prop];
  }
  update(){
    SCREEN.canvas.width = window.innerWidth;
    SCREEN.canvas.width = window.innerHeight;
  }
  draw(){
    SCREEN.fillStyle = this.BACKGROUND_COLOR;
    SCREEN.fillRect(0,0,this.width,this.height);
  }
}
