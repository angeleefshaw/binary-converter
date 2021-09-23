let binaryNumber = []
placeholder: Number;

function startLoop(userNumber) {
    if(userNumber >= 1) {
        computeNumber(userNumber)
    } else {console.log(binaryNumber)}
}

function computeNumber(startingNumber) {
    const num = startingNumber/2
    this.placeholder = addToBinaryArray(num)
    startLoop(this.placeholder)
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

startLoop(500)
