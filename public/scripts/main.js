import Window from './Window.js';
import Pointer from './Pointer.js';
import Navigator from './Navigator.js';
import Menu from './Menu.js';
import Button from './Button.js';
import Desktop from './Desktop.js';
import {SCREEN} from './Screen.js';
/**
* <Hoisting>
*/
let NavToolbar;
let DesktopEnv;
let MenuButton;
let MousePointer;
let Windows = [];

/**
* </Hoisting>
*/

function addWindow(){
  Windows.push(new Window(...arguments));
}

function preload(){
    console.log("State - Preload - Start")
  window.addEventListener('click',function(e){e.preventDefault();});
  window.addEventListener('contextmenu',function(e){e.preventDefault();});
  DesktopEnv = new Desktop(SCREEN.canvas.width,SCREEN.canvas.height);
  NavToolbar = new Navigator();
  MousePointer = new Pointer();
  window.MousePointer = MousePointer;
    console.log("State - Preload - Finish")
}
function setup(){
    console.log("State - Setup - Start")
  NavToolbar.set('width', DesktopEnv.get('width'));
  NavToolbar.set('height', 40);
  NavToolbar.set('x',0);
  NavToolbar.set('y',DesktopEnv.get('height') - NavToolbar.get('height'));
  NavToolbar.set('backgroundColor', "#0066cc");
  MenuButton = new Button({
    x: NavToolbar.get('x'),
    y: NavToolbar.get('y'),
    width: 40,
    height: 40,
    color: "#aa00bb",
    title: "Open Start Menu",
    hoverState: "auto"
  });
  NavToolbar.addItem('Menu', MenuButton);
    console.log("State - Setup - Finish")

  window.NavToolbar = NavToolbar;
  window.SCREEN = SCREEN;
}
function update(){
  //console.log("Update requested")
  DesktopEnv.update();
  for(let windowIndex = 0; windowIndex < Windows.length; windowIndex++){
    Windows[windowIndex].update();
  }
  NavToolbar.update();
  MousePointer.update();
}
function draw(){
  //console.log("Draw requested")
  update();
  DesktopEnv.draw();
  for(let windowIndex = 0; windowIndex < Windows.length; windowIndex++){
    Windows[windowIndex].draw();
  }
  NavToolbar.draw();
  MousePointer.draw();
  requestAnimationFrame(draw);
}

Promise.all([
  preload()
]).then((data) => {
  Promise.all([
    setup(data)
  ]).then(() => {
    draw();
  });
});
