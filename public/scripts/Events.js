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
  addEvent(eventName){

  }
  addEventListener(eventName, callback){

  }
}
