const SCREEN = document.querySelector("#Screen").getContext("2d");
function preload(){
  console.log("State - Preload")

}
function setup(){
  console.log("State - Setup")

}
function update(){
  //console.log("Update requested")

}
function draw(){
  //console.log("Draw requested")
  update();

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
