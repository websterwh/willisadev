var i = 0;
var txt = '[click to enter]'; 
var speed = 100; 

function clickToEnterType() {
  if (i < txt.length) {
    document.getElementById("click-to-enter-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(clickToEnterType, speed);
  }
}