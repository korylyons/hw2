function setup() {
  createCanvas(320, 320);
  background(0)
}

function draw() {
  for (var x = 10; x<width; x=x+10) {
  //allows [blank] to loop horizontally (b/c x value variable)
    for (var y = 10; y<height; y=y+10) {
    //allows [blank] to loop vertically (b/c y value variable)
      fill((255),(255),(255));
      //three "random"s for red,green,blue; 
      //two numbers per b/c thats the RANGE
      noStroke();
      ellipse(x,y,8,8);
      noLoop();
    }
  }
}
