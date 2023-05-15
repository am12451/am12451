let cam;
// const GRIDSIZE = 15;
let gridsize = 15;


function preload()
{
  vid = createVideo("Trash_compressed.mp4");
  vid.size(400, 400);
  vid.volume(0);
  vid.loop();
  vid.hide(); // hides the html video loader
}
function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  noStroke();
  
  // cam = createCapture(VIDEO);
  // cam.hide();
  
    mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  
  let vol = mic.getLevel();

  // Draw an ellipse with height based on volume
  // change blurness by blur filter
  let blurValue = map(vol, 0, 0.2, 10, 0);
  
  // console.log(blurValue)
  // image(cam, 0, 0);
  
  image(vid, 0, 0);
  
  // change blurness by gridsize
//   gridsize = map(vol, 0, 1, 100, 3);

//   cam.loadPixels();
//   for(let x = 0; x<cam.width; x+=gridsize){
//   for(let y = 0; y<cam.height; y +=gridsize){
//      let colorFromVideo = cam.get(x,y); 
//      fill (colorFromVideo);  
//      rect (x, y, gridsize, gridsize);
//     }
//   }
  filter(BLUR, blurValue);
  // console.log(cam.get(0,0));
}

