/**
* Class for Pointer elements
*
*/
import {SCREEN} from './Screen.js';
import {cursor_icons} from './Cursor_Icons.js';
import {ClassHolder} from './ClassHolder.js';

function recursiveFor(OS_CLASS, hitEnd){
  if(!hitEnd){
  	if(OS_CLASS.children){
  		OS_CLASS.children.forEach((child) => {
  			recursiveFor(OS_CLASS.children, false);
      });
  	}else if(OS_CLASS.items){
  		OS_CLASS.items.forEach((item) => {
  			recursiveFor(OS_CLASS.items, false);
      });
      }else{
  		  recursiveFor(OS_CLASS, true);
      }
  }else{
  	return OS_CLASS;
  }
}
export default class Pointer{
  constructor(){
    this.x = 0;
    this.y = 0;
    this.type = "Pointer";
    this.icons = {
      auto: {
        src: cursor_icons,
        x:0,
        y:0,
        w:33,
        h:33
      },
      move: {
        src: cursor_icons,
        x:33,
        y:0,
        w:33,
        h:33
      },
      no_drop: {
        src: cursor_icons,
        x:66,
        y:0,
        w:33,
        h:33
      },
      col_resize: {
        src: cursor_icons,
        x:99,
        y:0,
        w:33,
        h:33
      },
      all_scroll: {
        src: cursor_icons,
        x:0,
        y:33,
        w:33,
        h:33
      },
      pointer: {
        src: cursor_icons,
        x:33,
        y:33,
        w:33,
        h:33
      },
      not_allowed: {
        src: cursor_icons,
        x:66,
        y:33,
        w:33,
        h:33
      },
      row_resize: {
        src: cursor_icons,
        x:99,
        y:33,
        w:33,
        h:33
      },
      crosshair: {
        src: cursor_icons,
        x:0,
        y:66,
        w:33,
        h:33
      },
      progress: {
        src: cursor_icons,
        x:33,
        y:66,
        w:33,
        h:33
      },
      e_resize: {
        src: cursor_icons,
        x:66,
        y:66,
        w:33,
        h:33
      },
      ne_resize: {
        src: cursor_icons,
        x:99,
        y:66,
        w:33,
        h:33
      },
      default: {
        src: cursor_icons,
        x:0,
        y:99,
        w:33,
        h:33
      },
      text: {
        src: cursor_icons,
        x:33,
        y:99,
        w:33,
        h:33
      },
      n_resize: {
        src: cursor_icons,
        x:66,
        y:99,
        w:33,
        h:33
      },
      nw_resize: {
        src: cursor_icons,
        x:99,
        y:99,
        w:33,
        h:33
      },
      help: {
        src: cursor_icons,
        x:0,
        y:132,
        w:33,
        h:33
      },
      vertical_text: {
        src: cursor_icons,
        x:33,
        y:132,
        w:33,
        h:33
      },
      s_resize: {
        src: cursor_icons,
        x:66,
        y:132,
        w:33,
        h:33
      },
      se_resize: {
        src: cursor_icons,
        x:99,
        y:132,
        w:33,
        h:33
      },
      inherit: {
        src: cursor_icons,
        x:0,
        y:165,
        w:33,
        h:33
      },
      wait: {
        src: cursor_icons,
        x:33,
        y:165,
        w:33,
        h:33
      },
      w_resize: {
        src: cursor_icons,
        x:66,
        y:165,
        w:33,
        h:33
      },
      sw_resize: {
        src: cursor_icons,
        x:99,
        y:165,
        w:33,
        h:33
      },
    };
    this.state = "default";
    window.addEventListener('mousemove',function(e){
      if(!SCREEN.mouse){
        SCREEN.mouse = {
          pos: {
            x: 0,
            y: 0
          },
          button: {
            left: false,
            right: false
          },
          pastButton:{
            left: false,
            right: false
          },
          justReleased:{
            left: false,
            right: false
          },
          overItem: undefined,
          hoverTime: 0
        };
      }else{
        SCREEN.mouse.pastButton.left = SCREEN.mouse.button.left;
        SCREEN.mouse.pastButton.right = SCREEN.mouse.button.right;
        SCREEN.mouse.pos = {x: e.clientX, y: e.clientY};
        SCREEN.mouse.hoverTime = 0;
      }
    }, false);
    window.addEventListener('mousedown',function(e){
      if(!SCREEN.mouse){
        SCREEN.mouse = {
          pos: {
            x: 0,
            y: 0
          },
          button: {
            left: false,
            right: false
          },
          pastButton:{
            left: false,
            right: false
          },
          justReleased:{
            left: false,
            right: false
          },
          overItem: undefined,
          hoverTime: 0
        };
      }else{
        SCREEN.mouse.pastButton.left = SCREEN.mouse.button.left;
        SCREEN.mouse.pastButton.right = SCREEN.mouse.button.right;
        SCREEN.mouse.button[e.which == 1 ? 'left' : e.which == 3 ? 'right' : e.which] = true;
        SCREEN.mouse.hoverTime = 0;
      }
    }, false);
    window.addEventListener('mouseup',function(e){
      if(!SCREEN.mouse){
        SCREEN.mouse = {
          pos: {
            x: 0,
            y: 0
          },
          button: {
            left: false,
            right: false
          },
          pastButton: {
            left: false,
            right: false
          },
          justReleased:{
            left: false,
            right: false
          },
          overItem: undefined,
          hoverTime: 0
        };
      }else{
        SCREEN.mouse.pastButton.left = SCREEN.mouse.button.left;
        SCREEN.mouse.pastButton.right = SCREEN.mouse.button.right;
        SCREEN.mouse.button[e.which == 1 ? 'left' : e.which == 3 ? 'right' : e.which] = false;
        SCREEN.mouse.hoverTime = 0;
        SCREEN.mouse.justReleased[e.which == 1 ? 'left' : e.which == 3 ? 'right' : e.which] = true;
      }
    }, false);
  }
  set(prop, val){
    this[prop] = val;
  }
  get(prop){
    return this[prop];
  }
  update(){
    this.x = SCREEN.mouse !== undefined ? SCREEN.mouse.pos !== undefined ? SCREEN.mouse.pos.x /*- (this.icons[this.state].w-1)/3 */: 0 : 0;
    this.y = SCREEN.mouse !== undefined ? SCREEN.mouse.pos !== undefined ? SCREEN.mouse.pos.y /*- (this.icons[this.state].h-1)/4 */: 0 : 0;
    //Add z-index-esque property to windows and buttons later
    this.overItem = false;
    ClassHolder.forEach((OS_CLASS) => {
      if(OS_CLASS.position ? OS_CLASS.position != 'relative': true){
        if(this.x > OS_CLASS.x && this.x < OS_CLASS.x + OS_CLASS.width && this.y > OS_CLASS.y && this.y < OS_CLASS.y + OS_CLASS.height){
          this.state = OS_CLASS.hoverState || 'default';
          this.overItem = true;
          if(SCREEN.mouse){
            SCREEN.mouse.hoverTime++;
            SCREEN.mouse.overItem = OS_CLASS;
          }
          if(SCREEN.mouse ? (SCREEN.mouse.button.left == true || SCREEN.mouse.button.right == true) : false){
            OS_CLASS.events.onMouseClick.forEach((CB) => {
              CB(SCREEN.mouse);
            });
          }
          if(SCREEN.mouse ? (SCREEN.mouse.justReleased.left || SCREEN.mouse.justReleased.right) : false){
            console.log(SCREEN.mouse.pastButton)
            OS_CLASS.events.onMouseRelease.forEach((CB) => {
              CB(SCREEN.mouse);
            });
          }
        }
      }else{
        if(this.x > OS_CLASS.rx && this.x < OS_CLASS.rx + OS_CLASS.width && this.y > OS_CLASS.ry && this.y < OS_CLASS.ry + OS_CLASS.height){
          this.state = OS_CLASS.hoverState || 'default';
          this.overItem = true;
          if(SCREEN.mouse){
            SCREEN.mouse.hoverTime++;
            SCREEN.mouse.overItem = OS_CLASS;
          }
          if(SCREEN.mouse ? (SCREEN.mouse.button.left == true || SCREEN.mouse.button.right == true) : false){
            OS_CLASS.events.onMouseClick.forEach((CB) => {
              CB(SCREEN.mouse);
            });
          }
          if(SCREEN.mouse ? (SCREEN.mouse.justReleased.left || SCREEN.mouse.justReleased.right) : false){
            console.log(SCREEN.mouse.pastButton)
            OS_CLASS.events.onMouseRelease.forEach((CB) => {
              CB(SCREEN.mouse);
            });
          }
        }
      }
    });
    ["Menu","Programs","QuickButtons"].forEach((type) => {
      NavToolbar.children[type].forEach((item) =>{
        if(this.x > item.x && this.x < item.x + item.width && this.y > item.y && this.y < item.y + item.height){
          this.state = item.hoverState;
          this.overItem = true;
          if(SCREEN.mouse){
            SCREEN.mouse.hoverTime++;
            SCREEN.mouse.overItem = item;
          }
          if(SCREEN.mouse ? (SCREEN.mouse.button.left == true || SCREEN.mouse.button.right == true) : false){
            item.events.onMouseClick.forEach((CB) => {
              CB(SCREEN.mouse);
            });
          }
          if(SCREEN.mouse ? (SCREEN.mouse.justReleased.left || SCREEN.mouse.justReleased.right) : false){
            console.log(SCREEN.mouse.pastButton)
            item.events.onMouseRelease.forEach((CB) => {
              CB(SCREEN.mouse);
            });
          }
        }
      });
    });
    if(!this.overItem){
      this.state = "default";
      if(SCREEN.mouse){
        SCREEN.mouse.hoverTime = 0;
      }
    }
    if(SCREEN.mouse){
      SCREEN.mouse.pastButton.left = SCREEN.mouse.button.left;
      SCREEN.mouse.pastButton.right = SCREEN.mouse.button.right;
    }
    if(SCREEN.mouse){
      if(SCREEN.mouse.justReleased.left || SCREEN.mouse.justReleased.right){
        SCREEN.mouse.justReleased.left = SCREEN.mouse.justReleased.left ? false : SCREEN.mouse.justReleased.left;
        SCREEN.mouse.justReleased.right = SCREEN.mouse.justReleased.right ? false : SCREEN.mouse.justReleased.right;
      }
    }
  }
  draw(){
    if(SCREEN.mouse){
      if(SCREEN.mouse.hoverTime > 60){
        if(SCREEN.mouse.overItem){
          SCREEN.fillStyle = "#ffffff";
          SCREEN.fillRect(SCREEN.mouse.pos.x,SCREEN.mouse.pos.y-12,SCREEN.mouse.overItem.title.length * 6, 12)
          SCREEN.fillStyle = "#000000";
          SCREEN.fillText(SCREEN.mouse.overItem.title, SCREEN.mouse.pos.x+2,SCREEN.mouse.pos.y-2);
        }
      }
    }
    SCREEN.drawImage( this.icons[this.state].src, this.icons[this.state].x, this.icons[this.state].y, this.icons[this.state].w, this.icons[this.state].h,
                      this.x - (this.icons[this.state].w-1)/3, this.y - (this.icons[this.state].h-1)/4, this.icons[this.state].w, this.icons[this.state].h);
    SCREEN.fillRect(this.x,this.y,1,1)
  }
}
