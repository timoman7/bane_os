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
    this.textSize = parseFloat(SCREEN.font.split(" ")[0].replace('px',''));
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

    this.textSize = parseFloat(SCREEN.font.split(" ")[0].replace('px',''));
  }
  draw(){
    SCREEN.fillStyle = this.color;
    SCREEN.fillRect(this.x, this.y, this.width, this.height);
    if(this.icon){

    }else if(this.text){
      SCREEN.fillStyle = this.textColor ? this.textColor : "#000";
      SCREEN.fillText(this.text, this.x + (this.width/2) - (this.textSize/2), this.y + (this.height/2) + (this.textSize/2));
    }
  }
}
