function setup() {
    // Code to set up the canvas. Do not edit.
    const canvasEl = document.querySelector('#canvas-holder');
    const canvasWidth = canvasEl.offsetWidth;
    const canvasHeight = canvasEl.offsetHeight; 
    const myCanvas = createCanvas(canvasWidth, canvasHeight);
    myCanvas.parent("canvas-holder");
    background('#FFF');
}

function mouseDragged(){
    // Your job:
    // When the user drags the mouse on the canvas, you should honor
    // the color, shape, and size of the paintbrush that are selected
    // in the right-hand panel. Replace the code below with something
    // smarter:
    fill('hotpink');
    circle(mouseX, mouseY, 20);
    const color = document.querySelector('#color').value;
    const shape = document.querySelector('#shape').value;
    const size = document.querySelector('#size').value;

    fill(color);
    stroke(color);
    strokeWeight(size);

    if (shape === 'circle') {
        circle(mouseX, mouseY, size);
    } else if (shape === 'square') {
        square (mouseX, mouseY, size)
    } else if (shape === 'triangle') {
        triangle(
            mouseX, mouseY - size / 2,
            mouseX - size / 2, mouseY + size / 2,
            mouseX + size / 2, mouseY + size / 2
        );
    }
}
