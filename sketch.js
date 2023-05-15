let img1;
let img2;
let gridsize = 2;

function preload() {
  img1 = loadImage("naturebad.jpg");
  img2 = loadImage("naturegood.jpeg");
}

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent("canvas");
  pixelDensity(1);
  noStroke();
  img1.resize(400,400);
  img2.resize(400,400);
   img1.loadPixels();
  img2.loadPixels();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  let morphValue = map(vol, 0, 1.30, 0, 1);
  
  // Morph between img1 and img2 using lerp()
  let imgMorphed = lerpImage(img1, img2, morphValue);
  
  // Draw the morphed image with a grid effect
  // gridsize = map(vol, 0, 1, 100, 3);
  imgMorphed.loadPixels();
  for(let x = 0; x < imgMorphed.width; x += gridsize) {
    for(let y = 0; y < imgMorphed.height; y += gridsize) {
      let pixelIndex = (x + y * imgMorphed.width) * 4;
      let r = imgMorphed.pixels[pixelIndex];
      let g = imgMorphed.pixels[pixelIndex + 1];
      let b = imgMorphed.pixels[pixelIndex + 2];
      fill(r, g, b);
      rect(x, y, gridsize, gridsize);
    }
  }
}

// Morphs between two images by interpolating their pixels
function lerpImage(img1, img2, amt) {
  amt = constrain(amt, 0, 1);
  let morphedImg = createImage(img1.width, img1.height);
  morphedImg.loadPixels();
 
  for(let x = 0; x < img1.width; x++) {
    for(let y = 0; y < img1.height; y++) {
      let pixelIndex = (x + y * img1.width) * 4;
      let r1 = img1.pixels[pixelIndex];
      let g1 = img1.pixels[pixelIndex + 1];
      let b1 = img1.pixels[pixelIndex + 2];
      let a1 = img1.pixels[pixelIndex + 3];
      let r2 = img2.pixels[pixelIndex];
      let g2 = img2.pixels[pixelIndex + 1];
      let b2 = img2.pixels[pixelIndex + 2];
      let a2 = img2.pixels[pixelIndex + 3];
      let rLerp = lerp(r1, r2, amt);
      let gLerp = lerp(g1, g2, amt);
      let bLerp = lerp(b1, b2, amt);
      let aLerp = lerp(a1, a2, amt);
      morphedImg.pixels[pixelIndex] = rLerp;
      morphedImg.pixels[pixelIndex + 1] = gLerp;
      morphedImg.pixels[pixelIndex + 2] = bLerp;
      morphedImg.pixels[pixelIndex + 3] = aLerp;
    }
  }
  morphedImg.updatePixels();
  return morphedImg;
}
