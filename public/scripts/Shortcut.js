/**
* Class for Shortcut Objects
*/

import {SCREEN} from './Screen.js';
import Events from './Events.js';

export default class Shortcut{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.name = "A Shortcut";
    this.title = "A Shortcut";
    this.position = "relative";
    this.type = "Shortcut";
    this.state = "hidden";
    this.rx = 0;
    this.ry = 0;
    this.BACKGROUND_COLOR = "#ffffff";
    this.TEXT_COLOR = "#000000";
    if(typeof(arguments[0]) == 'object'){
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
  show(){
    this.state = "visible";
  }
  hide(){
    this.state = "hidden";
  }
  addEvent(eventName, func){
    this.events.addEvent(eventName,func);
  }
  remEvent(eventName, func){
    this.events.removeEvent(eventName,func);
  }
  update(){
    if(arguments[0] != undefined && arguments[1] != undefined){
      this.rx = this.x + (arguments[0]);
      this.ry = this.y + (arguments[1]);
    }
  }
  draw(){
    if(this.state == "visible"){
      SCREEN.fillStyle = this.BACKGROUND_COLOR;
      SCREEN.fillRect(this.rx, this.ry, this.width, this.height);
      SCREEN.fillStyle = this.TEXT_COLOR;
      SCREEN.fillText(this.name, this.rx, this.ry + parseFloat(SCREEN.font.split(" ")[0].replace('px','')));
    }
  }
}
