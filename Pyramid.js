// TOPICS I'VE BEEN LEARNT WHILE CREATING THIS PROJECT:
// let
// const
// boolens
// strings
// arrays
// for loop
// for...of loop
// while loop
// consitional (if/else) statements
// functions
// parametarized function + passing parameters to the function + calling a function

// METHODS
//------ .push()
//------ .pop()
//------ .shift()
//------ .unshift()
//------ .length()
//------ .repeat()
//------ .log()

// Also learned about the concept of HARD CODE
// increamnt operator
// decreament operator
// assignment operators (=)
// Equality operator (==)
// Strict equality operator (===)

const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

for (let i = 1; i <= count; i++) {
    if (inverted) {
        rows.unshift(padRow(i, count));
    } else {
        rows.push(padRow(i, count));
    }
}

let result = "";

for (const row of rows) {
    result = result + "\n" + row;
}

console.log(result);
