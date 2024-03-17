////////////////////////

var numberBase
var numberPower
var result = 1
do {
    numberBase = prompt("Enter the base of power:")
    numberPower = prompt("Enter the power:")
} while (isNaN(numberBase) || isNaN(numberPower) || numberBase == 0);

for (let i = 0; i < numberPower; i++) {
    result *= numberBase
}

alert(result)

/////////////////

var numOfSteps
var signOfSteps
var lastSign

do {
    numOfSteps = prompt("Enter the number of stairs:")
    signOfSteps = prompt("Enter the sign of stairs:")
    lastSign = prompt("Enter the last sign of stairs:")
} while (isNaN(numOfSteps));


for (let i = 0; i < numOfSteps; i++) {
    var step = "" //makes step empty in every loop
    for (let j = 0; j < i; j++) {
        step += signOfSteps ///adds sign as many as needed
    }
    step += lastSign // at the end adds last sign
    console.log(step); //finally gives result to console
}