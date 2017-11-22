/**
* Class for Window elements
*
*/
import {SCREEN} from './Screen.js';

export default class Window{
  constructor(x,y,width,height,title){
    this.title = title;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = "Window";
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

  }
  draw(){

  }
}
