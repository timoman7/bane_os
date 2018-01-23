/**
* Class for Window elements
*
*/
import {SCREEN} from './Screen.js';
import Program from './Program.js';
import Events from './Events.js';
import Topbar from './Topbar.js';
export default class Window extends Program{
  constructor(){
    super({
      type: "Window"
    });
    let x = (typeof(arguments[0]) == 'object' ? arguments[0].x : (arguments[0] || 0));
    let y = (typeof(arguments[0]) == 'object' ? arguments[0].y : (arguments[1] || 0));
    let width = (typeof(arguments[0]) == 'object' ? arguments[0].width : (arguments[2] || 0));
    let height = (typeof(arguments[0]) == 'object' ? arguments[0].height : (arguments[3] || 0));
    let title = (typeof(arguments[0]) == 'object' ? arguments[0].title : (arguments[4] || 0));
    this.title = title;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = "Window";
    this.topBar = new Topbar(this);
    this.children = [
      this.topBar
    ];
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
  addEvent(eventName, func){
    this.events.addEvent(eventName,func);
  }
  remEvent(eventName, func){
    this.events.removeEvent(eventName,func);
  }
  update(){

  }
  draw(){
    this.topBar.draw();
  }
}
