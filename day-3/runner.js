const {
    countTrees,
} = require("./day-3.js")

const fs = require("fs")

const input = fs.readFileSync('./input.txt', 'utf8').split("\n").filter(a => a)

console.log(countTrees(input))
