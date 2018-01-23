/**
* Class for Navigator elements
*
*/
import {SCREEN} from './Screen.js';
import Events from './Events.js';

export default class Navigator{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.type = "Navigator";
    this.backgroundColor = "#20a0a0";
    this.textColor = "#f0aaaa";
    this.children = {
      Menu: {
        children: []
      },
      Programs: {
        children: []
      },
      QuickButtons: {
        children: []
      }
    };
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
  addItem(type, item){
    this.children[type].children.push(item);
  }
  removeItem(type, item){
    this.children[type].children.splice(this.children[type].children.indexOf(item), 1);
  }
  update(){
    ["Menu","Programs","QuickButtons"].forEach((type) => {
      this.children[type].children.forEach((item) =>{
        item.update();
      });
    });
  }
  draw(){
    SCREEN.fillStyle = this.backgroundColor;
    SCREEN.fillRect(this.x, this.y, this.width, this.height);
    ["Menu","Programs","QuickButtons"].forEach((type) => {
      this.children[type].children.forEach((item) =>{
        item.draw();
      });
    });
  }
}
