const fs = require("fs")
const input = fs.readFileSync('./input.txt', 'utf8').split("\n").filter(a => a)
const rowLength = input[0].length

const TREE_SYMBOL = "#"

const countTrees = ([right, down]) => {
    let treeCount = 0
    let indexInRow = right
    for (let row = down; row < input.length; row += down) {
        if (input[row][indexInRow] === TREE_SYMBOL) { treeCount++}
        indexInRow = (indexInRow + right) % rowLength
    }
    return treeCount
}

const countTreesMultipleSlopes = (slopes=[]) =>
    slopes.map(countTrees).reduce((product, count) => product * count, 1)

module.exports = { countTrees, countTreesMultipleSlopes }
