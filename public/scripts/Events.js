// COMBAK: Finish adding event-adding and eventListener-creation after
//         researching methods/techniques
export default class Events{
  constructor(){
    this.onMouseClick = [];
    this.onMouseRelease = [];
    this.onMouseDown = [];
    this.onMouseUp = [];
    if(arguments.length > 0){
      arguments.forEach((eventName) => {
        this[eventName] = [];
      });
    }
  }
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

  }
}
