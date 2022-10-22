// Scroll Action
window.onscroll = function() {scrollFunction()};
let section = document.getElementById("side_btns")

function scrollFunction() {
  if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
    section.style.display = "flex";
  } else {
    section.style.display = "none";
  }
}