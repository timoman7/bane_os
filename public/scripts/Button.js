/**
* Class for Button elements
*
*/
import {SCREEN} from './Screen.js';

export default class Button{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.color = "#000000";
    this.icon;
    this.title = "";
    this.hoverState = "default";
    if(arguments.length > 0){
      Object.assign(this, arguments[0]);
    }
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
    SCREEN.fillStyle = this.color;
    SCREEN.fillRect(this.x, this.y, this.width, this.height);
  }
}
