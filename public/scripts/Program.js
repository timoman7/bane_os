/**
* Class for Program Objects
*/

import {SCREEN} from './Screen.js';
import Events from './Events.js';
import {ClassHolder} from './ClassHolder.js';
class Program{
  constructor(){

  }
  open(){

  }
  close(){
    ClassHolder.splice(ClassHolder.indexOf(this),1);
  }
  update(){

  }
  draw(){

  }
}
Program.open = function(_Program){
  ClassHolder.push(_Program);
};
export default Program
