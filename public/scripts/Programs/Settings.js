/**
* Class for Executable Objects
*/

import {SCREEN} from './../Screen.js';
import Events from './../Events.js';
import Executable from './../Executable.js';
import Topbar from './../Topbar.js';
import {ClassHolder} from './../ClassHolder.js';
export default class Settings extends Executable{
  constructor(){
    if(arguments[0]){
      super(arguments[0]);
    }else{
      super({
        name: "Settings",
        width: 500,
        height: 500
      });
    }
    this.events = new Events();
    this.topBar = new Topbar(this);
    this.x = 0;
    this.y = 0;
    this.children = [
      this.topBar,

    ];
  }
  run(){

  }
  end(){
    ClassHolder.splice(ClassHolder.indexOf(this),1);
  }
  update(){

    this.topBar.update();
  }
  draw(){

    this.topBar.draw()
  }
}

window.Settings = Settings;
