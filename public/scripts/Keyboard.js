/**
* Class for Keyboard elements
*
*/
import * as BOSLib from './BOSLib.js';
import {SCREEN} from './Screen.js';
import {ClassHolder} from './ClassHolder.js';
let GlobalKeys = [
  'KeyA',
  'KeyB',
  'KeyC',
  'KeyD',
  'KeyE',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyI',
  'KeyJ',
  'KeyK',
  'KeyL',
  'KeyM',
  'KeyN',
  'KeyO',
  'KeyP',
  'KeyQ',
  'KeyR',
  'KeyS',
  'KeyT',
  'KeyU',
  'KeyV',
  'KeyW',
  'KeyX',
  'KeyY',
  'KeyZ',
  'Space',
  'ControlLeft',
  'ControlRight',
  'AltLeft',
  'AltRight',
  'ShiftLeft',
  'ShiftRight',
  'ArrowLeft',
  'ArrowRight',
  'ArrowDown',
  'ArrowUp',
  'Enter',
  'Numpad0',
  'Numpad1',
  'Numpad2',
  'Numpad3',
  'Numpad4',
  'Numpad5',
  'Numpad6',
  'Numpad7',
  'Numpad8',
  'Numpad9',
  'NumpadDecimal',
  'NumpadEnter',
  'NumpadAdd',
  'NumpadSubtract',
  'NumpadMultiply',
  'NumpadDivide',
  'PageUp',
  'PageDown',
  'Home',
  'End',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Backquote',
  'Minus',
  'Equal',
  'Backspace',
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F0',
  'Tab',
  'Comma',
  'Period',
  'Slash',
  'Semicolon',
  'Quote',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'Insert',
  'Delete',
  'Escape'
];
export default class Keyboard{
  constructor(){
    this.type = "Keyboard";
    this.keys = {};
    GlobalKeys.forEach((keyName)=>{
      this.keys[keyName] = {
        code: keyName,
        shiftKey: false,
        altKey: false,
        ctrlKey: false,
        metaKey: false,
        repeat: false,
        type: undefined
      };
    });
    window.addEventListener('keyup',(e)=>{
      let tempObj = {};
      Object.keys(this.keys[e.code]).forEach((key)=>{
        tempObj[key] = e[key];
      });
      this.keys[e.code] = Object.assign({}, tempObj);
      this.updateCB(this.keys, e.type);
    },false);
    window.addEventListener('keydown',(e)=>{
      let tempObj = {};
      Object.keys(this.keys[e.code]).forEach((key)=>{
        tempObj[key] = e[key];
      });
      this.keys[e.code] = Object.assign({}, tempObj);
      this.updateCB(this.keys, e.type);
    },false);
    window.addEventListener('keypress',(e)=>{
      let tempObj = {};
      Object.keys(this.keys[e.code]).forEach((key)=>{
        tempObj[key] = e[key];
      });
      this.keys[e.code] = Object.assign({}, tempObj);
      this.updateCB(this.keys, e.type);
    },false);
  }
  updateCB(newKeys, keyState){
    this.keys = newKeys;
    this.keyState = keyState;
  }
  set(prop, val){
    this[prop] = val;
  }
  get(prop){
    return this[prop];
  }
  update(){
    BOSLib.recursiveFor(ClassHolder,(OS_CLASS) => {
      if(true /*Is tracking keyboard*/ && OS_CLASS.events){
        if(this.keyState == 'keyup'){
          OS_CLASS.events.onKeyUp.forEach((CB) => {
            CB(this.keys);
          });
        }
        if(this.keyState == 'keydown'){
          OS_CLASS.events.onKeyDown.forEach((CB) => {
            CB(this.keys);
          });
        }
        if(this.keyState == 'keypress'){
          OS_CLASS.events.onKeyPress.forEach((CB) => {
            CB(this.keys);
          });
        }
        if(this.keyState == 'keyrelease'){
          OS_CLASS.events.onKeyRelease.forEach((CB) => {
            CB(this.keys);
          });
        }
      }
    });
  }
}
