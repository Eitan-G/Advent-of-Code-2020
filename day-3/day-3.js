const TREE_SYMBOL = "#"

const countTrees = (input, rowLength=31, slope=[3, 1]) => {
    const [right, down] = slope
    let treeCount = 0
    for (let row = 0; row < input.length; row += down) {
        const indexInRow = (row * right) % rowLength
        if (input[row][indexInRow] === TREE_SYMBOL) { treeCount++}
    }
    return treeCount
}

module.exports = { countTrees }
