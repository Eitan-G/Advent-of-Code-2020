const {
    countValidated,
    cheesyValidate,
    lessCheesyValidate,
    leastCheesyValidate,
    positionalValidate,
} = require("./day-2.js")

const fs = require("fs")

const input = fs.readFileSync('./input.txt', 'utf8').split("\n").filter(a => a)

console.log(countValidated(input, positionalValidate))