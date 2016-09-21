function setup() {
  createCanvas(320, 320);
  background(0)
}

function draw() {
  while (var x = 50; x<width; x=x+50) {
  //allows [blank] to loop horizontally (b/c x value variable)
    for (var y = 10; y<height; y=y+10) {
    //allows [blank] to loop vertically (b/c y value variable)
      fill(random(0,255),random(0,255),random(0,255));
      //three (necessary) "random"s for red,green,blue; 
      //two numbers per b/c thats the RANGE
      noStroke();
      ellipse(x,y,8,8);
      noLoop();
    }
  }
}
