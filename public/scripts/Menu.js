/**
* Class for Menu elements
*
*/
import {SCREEN} from './Screen.js';

export default class Menu{
  constructor(state){
    this.state = state;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.origin = 'tl';
    this.backgroundColor = "#ffffff";
    if(arguments.length > 1){
      Object.assign(this, arguments[1]);
    }
  }
  set(prop, val){
    this[prop] = val;
  }
  get(prop){
    return this[prop];
  }
  show(){
    this.state = 'visible';
  }
  hide(){
    this.state = 'hidden';
  }
  update(){

  }
  draw(){
    if(this.state == 'visible'){
      SCREEN.fillStyle = this.backgroundColor;
      switch(this.origin){
        case 'tl':
          SCREEN.fillRect(this.x,this.y,this.width,this.height);
          break;
        case 'tr':
          SCREEN.fillRect(this.x,this.y,-this.width,this.height);
          break;
        case 'bl':
          SCREEN.fillRect(this.x,this.y,this.width,-this.height);
          break;
        case 'br':
          SCREEN.fillRect(this.x,this.y,-this.width,-this.height);
          break;
      }
    }
  }
}
