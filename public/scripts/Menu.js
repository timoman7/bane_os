/**
* Class for Menu elements
*
*/
import {SCREEN} from './Screen.js';
import Events from './Events.js';

function offsetMult(origin){
  switch(origin){
    case 'tl':
      return {x:1,y:1};
      break;
    case 'tr':
      return {x:-1,y:1};
      break;
    case 'bl':
      return {x:1,y:-1};
      break;
    case 'br':
      return {x:-1,y:-1};
      break;
  }
};

export default class Menu{
  constructor(state){
    this.state = state;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.tlx = 0;
    this.tly = 0;
    this.type = "Menu";
    this.origin = 'tl';
    this.offset = offsetMult(this.origin);
    this.backgroundColor = "#ffffff";
    this.items = [

    ];
    if(arguments.length > 1){
      Object.assign(this, arguments[1]);
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
  show(){
    this.state = 'visible';
  }
  hide(){
    this.state = 'hidden';
  }
  update(){
    this.offset = offsetMult(this.origin);
    this.tlx = this.offset.x < 0 ? this.x - this.width : this.x;
    this.tly = this.offset.y < 0 ? this.y - this.height : this.y;
    this.items.forEach((item) => {
      if(item.position == 'relative'){
        item.update(this.tlx, this.tly);
      }else{
        item.update();
      }
    });
  }
  draw(){
    if(this.state == 'visible'){
      SCREEN.fillStyle = this.backgroundColor;
      SCREEN.fillRect(this.x,this.y,this.width*this.offset.x,this.height*this.offset.y);
      this.items.forEach((item) => {
        item.draw();
      });
    }
  }
}
