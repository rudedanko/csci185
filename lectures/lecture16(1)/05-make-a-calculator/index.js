function addNumbers() {
    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
    let firstNum = document.querySelector('#num1').value;

    // 2. Access the first number that the user typed in and store it
    //    as a variable.
    let secondNum = document.querySelector('#num2').value;

    // 3. Convert the values stored inside of the two variables to a 
    //    number (so that you can do math)!
    firstNum = Number (firstNum);
    secondNum = Number (secondNum);

    // 4. Add the two numbers together.
    let result = firstNum + secondNum;

    // 5. Write the result to the #answer section
    document.querySelector('#answer').innerHTML = result;
}

function subtractNumbers() {
   let firstNum = document.querySelector('#num1').value;
   let secondNum = document.querySelector('#num2').value;
   firstNum = Number (firstNum);
   secondNum = Number (secondNum);
   let result = firstNum - secondNum;
   document.querySelector('#answer').innerHTML = result;
}

function multiplyNumbers() {
    let firstNum = document.querySelector('#num1').value;
    let secondNum = document.querySelector('#num2').value;
    firstNum = Number (firstNum);
    secondNum = Number (secondNum);
    let result = firstNum * secondNum;
    document.querySelector('#answer').innerHTML = result;
}

function divideNumbers() {
    let firstNum = document.querySelector('#num1').value;
    let secondNum = document.querySelector('#num2').value;
    firstNum = Number (firstNum);
    secondNum = Number (secondNum);
    let result = firstNum / secondNum;
    document.querySelector('#answer').innerHTML = result;
}

