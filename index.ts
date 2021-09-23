let binaryNumber = []
placeholder: Number;

function startHere(userNumber) {
    if(userNumber >= 1) {
        compute(userNumber)
    } else {console.log(binaryNumber)}
}

function compute(startingNumber) {
    const num = startingNumber/2
    this.placeholder = convertToBinary(num)
    startHere(this.placeholder)
}

function convertToBinary(input) {
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

startHere(500)
