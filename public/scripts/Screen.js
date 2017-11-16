var _screen = document.querySelector("#Screen").getContext("2d");
_screen.canvas.width = window.innerWidth;
_screen.canvas.height = window.innerHeight;
export const SCREEN = _screen;
