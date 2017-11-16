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
  }
  set(prop, val){
    this[prop] = val;
  }
  get(prop){
    return this[prop];
  }
}
