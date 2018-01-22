/**
* Class for Executable Objects
*/

import {SCREEN} from './Screen.js';
import Events from './Events.js';
import {ClassHolder} from './ClassHolder.js';
class Executable{
  constructor(){
    if(arguments[0]){
      Object.assign(this, arguments[0]);
    }else{
      Object.assign(this, {
        name: "Executable"
      });
    }
  }
  run(){

  }
  end(){
    ClassHolder.splice(ClassHolder.indexOf(this),1);
  }
  update(){

  }
  draw(){

  }
}

Executable.run = function(Exe){
  ClassHolder.push(Exe);
  Exe.run();
};

export default Executable
