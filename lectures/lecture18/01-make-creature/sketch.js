function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    makeCreature (400, 400, 'pink', 'grey');
    makeCreature (700, 100, 'yellow', 'green');
    makeCreature (0, 400,'orange', 'purple');

     // for debugging:
     drawGrid(canvasWidth, canvasHeight)
}
   
function makeCreature (x, y, fillColor, eyeColor = 'black') {
    // your creature:
    fill(fillColor)
    circle(x, y, 300)

    fill(eyeColor)
    ellipse(x - 50, y - 50, 30, 40) // x, y, width, height
    ellipse(x + 50, y - 50, 30, 40)
}

function mouseClicked() {
    makeCreature (mouseX, mouseY, 'pink', 'grey');
}

function mouseDragged() {
    makeCreature (mouseX, mouseY, 'green', 'yellow');
}

