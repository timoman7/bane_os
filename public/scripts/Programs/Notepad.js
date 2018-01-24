/**
* Class for Executable Objects
*/

import {SCREEN} from './../Screen.js';
import Events from './../Events.js';
import Executable from './../Executable.js';
import Topbar from './../Topbar.js';
import {ClassHolder} from './../ClassHolder.js';
export default class Notepad extends Executable{
  constructor(){
    if(arguments[0]){
      super(arguments[0]);
    }else{
      super({
        name: "Notepad",
        width: 500,
        height: 500
      });
    }
    this.textData = '';
    this.events = new Events();
    this.topBar = new Topbar(this);
    this.data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
               '<foreignObject width="100%" height="100%" style="border: 4px solid black;">' +
               '<div xmlns="http://www.w3.org/1999/xhtml"><p>'+this.textData+'</p></div>' +
               '</foreignObject>' +
               '</svg>';
    this.DOMURL = window.URL || window.webkitURL || window;
    this.x = 0;
    this.y = 0;
    this.img = new Image();
    this.svg = new Blob([this.data], {type: 'image/svg+xml'});
    this.url = this.DOMURL.createObjectURL(this.svg);
    this.img.src = this.url;
    this.children = [
      this.topBar
    ];
    this.events.addEvent('onKeyDown',(key)=>{
      console.log(key)
      if(key.code != "Backspace"){
        this.textData += key.code;
      }else{
        this.textData = this.textData.sub(0,this.textData.length-1);
      }
    });
  }
  run(){

  }
  end(){
    ClassHolder.splice(ClassHolder.indexOf(this),1);
  }
  update(){
    this.data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
               '<foreignObject width="100%" height="100%" style="border: 4px solid black;">' +
               '<div xmlns="http://www.w3.org/1999/xhtml"><p>'+this.textData+'</p></div>' +
               '</foreignObject>' +
               '</svg>';
  }
  draw(){
    if(this.img ? this.img.complete : false){
      SCREEN.drawImage(this.img, this.x, this.y + this.topBar.height, this.width, this.height - this.topBar.height);
    }else{
      console.log(this.data)
    }
    this.topBar.draw()
  }
}

window.Notepad = Notepad;
