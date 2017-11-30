/**
* Class for Desktop elements
*
*/
import {SCREEN} from './Screen.js';
import Events from './Events.js';

export default class Desktop{
  constructor(width,height){
    this.width = width;
    this.height = height;
    this.type = "Desktop";
    this.BACKGROUND_COLOR = "#20a0a0";
    this.events = new Events();
  }
  set(prop, val){
    this[prop] = val;
  }
  get(prop){
    return this[prop];
  }
  addEvent(eventName, func){
    this.events.addEvent(eventName,func);
  }
  remEvent(eventName, func){
    this.events.removeEvent(eventName,func);
  }
  update(){
    SCREEN.canvas.width = window.innerWidth;
    SCREEN.canvas.height = window.innerHeight;
  }
  draw(){
    SCREEN.fillStyle = this.BACKGROUND_COLOR;
    SCREEN.fillRect(0,0,this.width,this.height);
  }
}
