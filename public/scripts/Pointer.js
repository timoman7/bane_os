/**
* Class for Pointer elements
*
*/
import {SCREEN} from './Screen.js';
import {cursor_icons} from './Cursor_Icons.js';
export default class Pointer{
  constructor(){
    this.x = 0;
    this.y = 0;
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
          }
        };
      }else{
        SCREEN.mouse.pos = {x: e.clientX, y: e.clientY};
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
          }
        };
      }else{
        SCREEN.mouse.button[e.which == 1 ? 'left' : e.which == 3 ? 'right' : e.which] = true;
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
          }
        };
      }else{
        SCREEN.mouse.button[e.which == 1 ? 'left' : e.which == 3 ? 'right' : e.which] = false;
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
    ["Menu","Programs","QuickButtons"].forEach((type) => {
      NavToolbar.children[type].forEach((item) =>{
        if(this.x > item.x && this.x < item.x + item.width && this.y > item.y && this.y < item.y + item.height){
          this.state = item.hoverState;
          this.overItem = true;
        }
      });
    });
    if(!this.overItem){
      this.state = "default";
    }
  }
  draw(){
    SCREEN.drawImage( this.icons[this.state].src, this.icons[this.state].x, this.icons[this.state].y, this.icons[this.state].w, this.icons[this.state].h,
                      this.x - (this.icons[this.state].w-1)/3, this.y - (this.icons[this.state].h-1)/4, this.icons[this.state].w, this.icons[this.state].h);
    SCREEN.fillRect(this.x,this.y,1,1)
  }
}
