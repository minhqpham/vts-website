var modal = document.getElementById("subscribe");
var btn = document.getElementById("navbutton");
var span = document.getElementById("closebox");
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var modal0 = document.getElementsByClassName("modal")[0];
var btn0 = document.getElementsByClassName("pichover")[0];
var span0 = document.getElementsByClassName("close")[0];
btn0.onclick = function() {
  modal0.style.display = "block";
}
span0.onclick = function() {
  modal0.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal0) {
    modal0.style.display = "none";
  }
}

var modal1 = document.getElementsByClassName("modal")[1];
var btn1 = document.getElementsByClassName("pichover")[1];
var span1 = document.getElementsByClassName("close")[1];
btn1.onclick = function() {
  modal1.style.display = "block";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}

var modal2 = document.getElementsByClassName("modal")[2];
var btn2 = document.getElementsByClassName("pichover")[2];
var span2 = document.getElementsByClassName("close")[2];
btn2.onclick = function() {
  modal2.style.display = "block";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

var modal3 = document.getElementsByClassName("modal")[3];
var btn3 = document.getElementsByClassName("pichover")[3];
var span3 = document.getElementsByClassName("close")[3];
btn3.onclick = function() {
  modal3.style.display = "block";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

var modal4 = document.getElementsByClassName("modal")[4];
var btn4 = document.getElementsByClassName("pichover")[4];
var span4 = document.getElementsByClassName("close")[4];
btn4.onclick = function() {
  modal4.style.display = "block";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}