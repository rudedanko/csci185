function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    makeCreature(200, 400, 'pink', 'black');
    makeCreature(400, 600, 'orange');


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(x, y, fillColor, eyeColor = 'white'){
 // your creature:
 fill(fillColor);
 circle(x, y, 300);

 fill(eyeColor);
 ellipse(x - 50, y - 50, 30, 40);
 ellipse(x + 50, y - 50, 30, 40);


}

function mouseClicked() {
    makeCreature(mouseX, mouseY, 'pink', 'black');
}

function mouseDragged() {
    makeCreature(mouseX, mouseY, 'pink', 'black');
}