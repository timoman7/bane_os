/**
* Class for Pointer elements
*
*/
import {SCREEN} from './Screen.js';

export default class Pointer{
  constructor(){

  }
  set(prop, val){
    this[prop] = val;
  }
  get(prop){
    return this[prop];
  }
}
