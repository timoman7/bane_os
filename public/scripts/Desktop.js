/**
* Class for Desktop elements
*
*/
import {SCREEN} from './Screen.js';

export default class Desktop{
  constructor(width,height){
    this.width = width;
    this.height = height;
    this.type = "Desktop";
    this.BACKGROUND_COLOR = "#20a0a0";
    this.events = {
      onClick: [
        function(e){
          console.log(e.pos, e.button);
        }
      ],
      onRelease: [

      ],
      onDown: [

      ],
    };
  }
  set(prop, val){
    this[prop] = val;
  }
  get(prop){
    return this[prop];
  }
  addEvent(eventName, func){
    this.events[eventName].push(func);
  }
  remEvent(eventName, func){
    this.events[eventName].splice(this.events[eventName].indexOf(func),1);
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
