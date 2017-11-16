/**
* Class for Button elements
*
*/
import {SCREEN} from './Screen.js';

export default class Button{
  constructor(){

  }
  set(prop, val){
    this[prop] = val;
  }
  get(prop){
    return this[prop];
  }
}
