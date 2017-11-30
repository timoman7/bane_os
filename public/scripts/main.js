import Window from './Window.js';
import Pointer from './Pointer.js';
import Navigator from './Navigator.js';
import Menu from './Menu.js';
import Button from './Button.js';
import Desktop from './Desktop.js';
import Program from './Program.js';
import Shortcut from './Shortcut.js';
import InternetBrowser from './InternetBrowser.js';
import {SCREEN} from './Screen.js';
import {ClassHolder} from './ClassHolder.js';
// TODO: Add generalized right clicking
// TODO: Close menus when clicking anywhere except on them
// IDEA: Add Internet
// IDEA: Add text editors
// IDEA: Add "file storage" via JSON and localStorage
// IDEA: Add users via JSON and localStorage
// IDEA: Add guest users using sessionStorage
// IDEA: Add globalized logins using firebase
/**
* <Hoisting>
*/
let NavToolbar;
let DesktopEnv;
let MenuButton;
let MousePointer;
let StartMenu;
window.Program = Program;
window.Window = Window;
window.InternetBrowser = InternetBrowser;
/**
* </Hoisting>
*/

function addWindow(){
  ClassHolder.push(new Window(...arguments));
}

function addMenu(){
  let _TEMPMENU = new Menu(...arguments);
  ClassHolder.push(_TEMPMENU);
  return _TEMPMENU;
}

function addShortcut(){
  let _TEMPSHORTCUT = new Shortcut(...arguments);
  ClassHolder.push(_TEMPSHORTCUT);
  return _TEMPSHORTCUT;
}

function preload(){
    console.log("State - Preload - Start")
  window.addEventListener('click',function(e){e.preventDefault();});
  window.addEventListener('mouseup',function(e){e.preventDefault();});
  window.addEventListener('mousedown',function(e){e.preventDefault();});
  window.addEventListener('contextmenu',function(e){e.preventDefault();});
  window.addEventListener('keydown',function(e){e.preventDefault();});
  window.addEventListener('keyup',function(e){e.preventDefault();});
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
    hoverState: "pointer"
  });
  let firstShortcut = addShortcut({
    x: 0,
    y: 0,
    width: 150,
    height: 20,
    name: 'First shortcut',
    title: 'First shortcut hover',
  });
  firstShortcut.addEvent('onMouseRelease',function(){
    Program.open(new InternetBrowser());
  });
  StartMenu = addMenu('hidden', {
    x: MenuButton.get('x'),
    y: MenuButton.get('y'),
    width: 150,
    height: 260,
    origin: 'bl',
    items: [
      firstShortcut,
    ]
  });
  MenuButton.addEvent('onMouseRelease',function(){
    //console.log(StartMenu.state);
    if(StartMenu.state == 'visible'){
      StartMenu.hide();
      StartMenu.items.forEach((item)=>{item.hide();});
    }else if (StartMenu.state == 'hidden'){
      StartMenu.show();
      StartMenu.items.forEach((item)=>{item.show();});
    }
  });
  window.StartMenu = StartMenu;
  NavToolbar.addItem('Menu', MenuButton);
    console.log("State - Setup - Finish")

  window.NavToolbar = NavToolbar;
  window.SCREEN = SCREEN;
}
function update(){
  //console.log("Update requested")
  DesktopEnv.update();
  NavToolbar.update();
  for(let ClassIndex = 0; ClassIndex < ClassHolder.length; ClassIndex++){
    ClassHolder[ClassIndex].update();
  }
  MousePointer.update();
  window.ClassHolder = ClassHolder;
}
function draw(){
  //console.log("Draw requested")
  update();
  DesktopEnv.draw();
  for(let ClassIndex = 0; ClassIndex < ClassHolder.length; ClassIndex++){
    if(ClassHolder[ClassIndex].type == "Menu" && ClassHolder[ClassIndex].type == "Button"){
      NavToolbar.draw();
    }
    ClassHolder[ClassIndex].draw();
    if(ClassHolder[ClassIndex].type != "Menu" && ClassHolder[ClassIndex].type != "Button"){
      NavToolbar.draw();
    }
  }
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
