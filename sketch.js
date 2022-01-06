let x = 0;
let y = 0;
let r = 1;
let g = 0;
let b = 255;
let incr = 20;
let rInc = 1;
let bInc = 1;
let del;

let tic;

function preload() {
  ticMin = loadSound("assets/ticMin.mp3");
  //ticMin.disconnect();
}

  

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  
}  
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(15);
  
  
  //----------------------- connessioni e attivazione rev e filter
                                        
  reverb = new p5.Reverb();
  reverb.process(ticMin, 6, 0, false);
  low = new p5.LowPass();
  reverb.disconnect();
  reverb.connect(low);  
}

function draw() {
  //---------------------------sezione di filtro col mouse
                                      
  filterFreq = map(mouseX, 0, width, 10, 22050);
  filterRes = map(mouseY, 0, height, 15, 5);
  low.set(filterFreq, filterRes);
  //--------------------------line, colore random
  let str = random(1, 20);
  
  b = random(255);
  if (b < 150) {
    b = 0;
  }
  line(x, y, x, height);
  strokeWeight(str);
  stroke(r, g, b);
  
  x = x + incr;
  
  if (x >= width || x < 0) {
    incr = -incr;
    
    background(0);
   
  //------------------------conditional playing soundfile 
  }
  if (b > 250){
    ticMin.play(0, 1/str);
    ticMin.setVolume(1/str);
    
  }
   
}

function mousePressed() {
  save();
}
