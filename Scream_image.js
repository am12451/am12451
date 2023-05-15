// Get a reference to the #transparentMask element
var transparentMask = document.getElementById("transparentMask");

// Add an event listener to the document to listen for the space bar key press
document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    // Generate a random position for the new transparent square
    var left = Math.floor(Math.random() * window.innerWidth);
    var top = Math.floor(Math.random() * window.innerHeight);

    // Create a new transparent square element with the specified properties
    var transparentSquare = document.createElement("div");
    transparentSquare.className = "transparentSquare";
    transparentSquare.style.left = left + "px";
    transparentSquare.style.top = top + "px";

    // Add the new transparent square element to the #transparentMask element
    transparentMask.appendChild(transparentSquare);
  }
});
