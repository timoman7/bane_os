/**
* Class for Pointer elements
*
*/
import {SCREEN} from './Screen.js';

export default class Pointer{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.icons = {
      normal: ""
    };
    this.state = "normal";
    window.addEventListener('mousemove',function(e){
      this.x = e.clientX;
      this.y = e.clientY;
    }, false);
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
    SCREEN.drawImage(this.icons[this.state],this.x,this.y);
  }
}
