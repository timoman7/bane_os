/**
*
*/
import {SCREEN} from './Screen.js';
import Program from './Program.js';
import Events from './Events.js';
import Window from './Window.js';
import Topbar from './Topbar.js';
const settings = {
  defaultURL: "https://www.google.com"
};
// TODO: Find some how to get external resources into an iframe
export default class InternetBrowser extends Window{
  constructor(){
    super({
      title: "Internet Browser",
      width: 500,
      height: 500
    });
    this.data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
               '<foreignObject width="100%" height="100%" style="border: 4px solid black;">' +
               '<div xmlns="http://www.w3.org/1999/xhtml"><h1>Out of order</h1></div>' +
               '</foreignObject>' +
               '</svg>';
    this.DOMURL = window.URL || window.webkitURL || window;
    this.x = 0;
    this.y = 0;
    this.img = new Image();
    this.svg = new Blob([this.data], {type: 'image/svg+xml'});
    this.url = this.DOMURL.createObjectURL(this.svg);
    this.img.src = this.url;
    this.events.forEach((event) => {
      console.log(event)
    });
  }
  update(){

  }
  draw(){
    if(this.img ? this.img.complete : false){
      SCREEN.drawImage(this.img, this.x, this.y + this.topBar.height, this.width, this.height - this.topBar.height);
    }else{
      console.log(this.data)
    }
    this.topBar.draw()
  }
}
