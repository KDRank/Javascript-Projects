function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[1].innerHTML = "The text has changed!";
}
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//Gradient
const grd = ctx.createLinearGradient(0, 0, 400, 0);
grd.addColorStop(0, "pink");
grd.addColorStop(1, "white");

//Filled Rectangle
ctx.fillStyle = grd;
ctx.fillRect(5, 5, 490, 240);