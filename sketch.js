function setup() {
    createCanvas(800, 400);
    background("black");
  }
  
  function draw() {
    
    stroke("blue");
    fill("orange");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 50, 70);
    }
  }
  