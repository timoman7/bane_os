/**
* Class for Button elements
*
*/
import {SCREEN} from './Screen.js';
import Events from './Events.js';

export default class Button{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.type = "Button";
    this.color = "#000000";
    this.icon;
    this.title = "";
    this.hoverState = "default";
    if(arguments.length > 0){
      Object.assign(this, arguments[0]);
    }
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

  }
  draw(){
    SCREEN.fillStyle = this.color;
    SCREEN.fillRect(this.x, this.y, this.width, this.height);
  }
}
