function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("#EEE");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art 
    */

    // https://p5js.org/reference/#/p5/circle
    fill("black")
    circle(700,200, 120);
    circle(745,325, 50);
    circle(650,325, 50);
    rect(670, 250, 55, 300);
    circle(650,550, 50);
    circle(740,550, 50);

    // https://p5js.org/reference/#/p5/rect


    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}