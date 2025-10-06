function toggleOpen() {
  document.getElementById("main").style.marginLeft = "20%";
  document.getElementById("sidebar").style.width = "20%";
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}
function toggleClose() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}
