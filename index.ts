let binaryNumber = [];
var userInput = document.querySelector("#number")!;
var submit = document.querySelector("#submit")!;


submit.addEventListener("click", (e: Event) => {
    e.preventDefault();
    startLoop(userInput)
})

function startLoop(userNumber) {
    if(userNumber >= 1) {
        computeNumber(userNumber)
    } else {console.log(binaryNumber)}
}

function computeNumber(startingNumber) {
    const num = startingNumber/2
    let placeholder = addToBinaryArray(num)
    startLoop(placeholder)
}

function addToBinaryArray(input) {
    let workingNum = isDecimal(input);

    if (workingNum) {
        binaryNumber.push(1)
        return Math.floor(input)
    } else {
       binaryNumber.push(0)
        return input
    }
}

function isDecimal(number) {
  var result = (number - Math.floor(number)) !== 0; 

  if (result)
    return true;
   else
     return false;
}

startLoop(123)
