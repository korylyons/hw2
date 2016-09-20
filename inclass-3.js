function setup() {
  createCanvas(200, 200);
  background(205);

  var i = 0;
  while (i < 18) {
    line(10+i*10, 10, 190-i*10, height-10);
    i = i + 0.5;
  }    
}
