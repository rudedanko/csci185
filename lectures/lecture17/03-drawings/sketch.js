function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("lightblue");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    https://p5js.org/reference/#/p5/circle
    fill("#5C4033")
    circle(700, 400, 600);

    https://p5js.org/reference/#/p5/circle
    fill("white")
    circle(600, 300, 100);

    https://p5js.org/reference/#/p5/circle
    fill("blue")
    circle(600, 300, 50);

    https://p5js.org/reference/#/p5/circle
    fill("white")
    circle(610, 290, 10);

    https://p5js.org/reference/#/p5/circle
    fill("white")
    circle(800, 300, 100);

    https://p5js.org/reference/#/p5/circle
    fill("blue")
    circle(800, 300, 50);

    https://p5js.org/reference/#/p5/circle
    fill("white")
    circle(810, 290, 10);

    // https://p5js.org/reference/#/p5/rect
 fill('white')
 rect(650, 490, 100, 100);

    https://p5js.org/reference/#/p5/ellipse
    fill('lightpink');
    ellipse(700, 450, 200, 100);



    // add your drawing here:
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}