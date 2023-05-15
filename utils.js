var boton1 = document.getElementById("disappear1");
var boton2 = document.getElementById("disappear2");
var boton3 = document.getElementById("disappear3");
var parrafo1 = document.getElementById("miParrafo1");
var parrafo2 = document.getElementById("miParrafo2");
var parrafo3 = document.getElementById("miParrafo3");

boton1.addEventListener("click", function () {
  parrafo1.style.display = "none";
});
boton2.addEventListener("click", function () {
  parrafo2.style.display = "none";
});
boton3.addEventListener("click", function () {
  parrafo3.style.display = "none";
});
