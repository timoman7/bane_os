// COMBAK: Finish adding event-adding and eventListener-creation after
//         researching methods/techniques
export default class Events{
  constructor(){
    this.onMouseClick = [];
    this.onMouseRelease = [];
    this.onMouseDown = [];
    this.onMouseUp = [];
    this.onKeyUp = [];
    this.onKeyDown = [];
    this.onKeyRelease = [];
    this.onKeyPress = [];
    if(arguments.length > 0){
      arguments.forEach((eventName) => {
        this[eventName] = [];
      });
    }
  }
  forEach(){
    console.log(Object.keys(this))
    Object.keys(this).forEach(...arguments);
  };
  addEvent(eventName, func){
    if(this[eventName]){
      this[eventName].push(func);
    }else{
      this[eventName] = [];
      this[eventName].push(func);
    }
  }
  removeEvent(eventName, func){
    this[eventName].splice(this[eventName].indexOf(func),1);
  }
  addEventListener(eventName, callback){
    window.addEventListener(eventName, callback, arguments[2] ? true : false);
  }
}
