
function makeRed() {
    // your code here...
    console.log('Change background to red'); //console.log means that console will output message in quotes when function is invoked
    document.querySelector('#section1').style.backgroundColor = 'red';
    // document.querySelector('#section1').style.color = 'yellow';
};

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = 'blue';
};

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = 'pink';
};

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = 'orange';
};

function clearScreen() {
    console.log('Clearing selected colors');
    document.querySelector('#section1').style.backgroundColor = 'white';
    document.querySelector('#section2').style.backgroundColor = 'white';
    document.querySelector('#section3').style.backgroundColor = 'white';
    document.querySelector('#section4').style.backgroundColor = 'white';
};

