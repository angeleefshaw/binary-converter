var binaryNumber = [];
var userInput = document.querySelector("#number");
var submit = document.querySelector("#submit");
submit.addEventListener("click", function (e) {
    e.preventDefault();
    startLoop(userInput);
});
function startLoop(userNumber) {
    if (userNumber >= 1) {
        computeNumber(userNumber);
    }
    else {
        console.log(binaryNumber);
    }
}
function computeNumber(startingNumber) {
    var num = startingNumber / 2;
    var placeholder = addToBinaryArray(num);
    startLoop(placeholder);
}
function addToBinaryArray(input) {
    var workingNum = isDecimal(input);
    if (workingNum) {
        binaryNumber.push(1);
        return Math.floor(input);
    }
    else {
        binaryNumber.push(0);
        return input;
    }
}
function isDecimal(number) {
    var result = (number - Math.floor(number)) !== 0;
    if (result)
        return true;
    else
        return false;
}
