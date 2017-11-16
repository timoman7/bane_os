/**
* Class for Menu elements
*
*/
import {SCREEN} from './Screen.js';

export default class Menu{
  constructor(){

  }
  set(prop, val){
    this[prop] = val;
  }
  get(prop){
    return this[prop];
  }
}
