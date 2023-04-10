let x = 200;
let y = 200;
let width = 150;
let fillColor = 'pink';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    fill(fillColor);
    // noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down
    if(ev.code === 'ArrowUp') {
        console.log('move circle up!')
        y = y - 10;

    } else if (ev.code === 'ArrowDown') {
        console.log('move circle down!')
        y = y + 10; 
    } else if (ev.code === 'ArrowLeft') {
        console.log('move circle left!')
        x = x - 10; 
    } else if (ev.code === 'ArrowRight') {
        console.log('move circle right!')
        x = x + 10; 
    } else if(ev.code === 'Space') {
        console.log('make circle bigger!')
        width = width + 10; 
    } else if(ev.code === 'Minus') {
        console.log('make circle smaller!')
        width = width - 10; 
    } else if(ev.code === 'ShiftLeft') {
        console.log('make circle change color!')
        fillColor = getRandomColor();
    }
    // redraw circle:
    clear();
    fill(fillColor);
    // noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256); // Generate a random value between 0 and 255 for the red channel
    let g = Math.floor(Math.random() * 256); // Generate a random value between 0 and 255 for the green channel
    let b = Math.floor(Math.random() * 256); // Generate a random value between 0 and 255 for the blue channel
  
    return "rgb(" + r + "," + g + "," + b + ")"; // Return the color in the RGB format
  }

// Add event listener on keydown
document.addEventListener('keydown', moveController);
