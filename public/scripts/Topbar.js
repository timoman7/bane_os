/**
*
*/
import {SCREEN} from './Screen.js';
import Events from './Events.js';
import Button from './Button.js';
export default class Topbar{
  constructor(Parent){
    console.log(Parent);
    this.Parent = Parent;
    this.x = this.Parent.x || 0;
    this.y = this.Parent.y || 0;
    this.width = this.Parent.width;
    this.height = 40;
    this.backgroundColor = "#aaa";
    this.pastWidth = this.width;
    this.pastHeight = this.height;
    this.children = [
      new Button({
        x: this.x + this.width - 120,
        y: this.y + 5,
        width: this.height - 10,
        height: this.height - 10,
        color: "#aa00bb",
        title: "Minimize",
        text: "_",
        hoverState: "pointer"
      }),
      new Button({
        x: this.x + this.width - 80,
        y: this.y + 5,
        width: this.height - 10,
        height: this.height - 10,
        color: "#aa00bb",
        title: "Maximize",
        text: "[]",
        hoverState: "pointer"
      }),
      new Button({
        x: this.x + this.width - 40,
        y: this.y + 5,
        width: this.height - 10,
        height: this.height - 10,
        color: "#aa00bb",
        title: "Close",
        text: "X",
        hoverState: "pointer"
      }),
    ];
    var self = this;
    this.children[0].addEvent("onMouseRelease", function(e){
      console.log(self, this)
    }); // Minimize
    this.children[1].addEvent("onMouseRelease", function(e){
      this.pastWidth = this.width;
      this.pastHeight = this.height;
    }); // Maximize
    this.children[2].addEvent("onMouseRelease", function(e){

    }); // Close
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
  addItem(item){
    this.children.push(item);
  }
  removeItem(item){
    this.children.splice(this.children.indexOf(item), 1);
  }
  update(){
    this.x = this.Parent.x;
    this.y = this.Parent.y;
    this.children.forEach((item) =>{
      item.update();
    });
  }
  draw(){
    SCREEN.fillStyle = this.backgroundColor;
    SCREEN.fillRect(this.x, this.y, this.width, this.height);
    this.children.forEach((item) =>{
      item.draw();
    });
  }
}
