var modal = document.getElementById("subscribe");

var btn = document.getElementById("navbutton");
var btn_b = document.getElementById("finalctabutton");

var span = document.getElementById("closebox");

btn.onclick = function() {
  modal.style.display = "block";
}
btn_b.onclick = function() {
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

