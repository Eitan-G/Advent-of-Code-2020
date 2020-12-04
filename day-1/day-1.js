let findPair = (entries=[], sum) => { // O(n)
  const lookup = {}
  for (let i of entries) {
    const difference = sum - i
    if (lookup[difference]) { return [i, difference] }
    lookup[i] = true
  }
  return []
}

let findTriplets = (entries=[], sum) => { // O(n^2)
  for (let i = 0; i < entries.length; i++) { // O(n)
    const copy = [...entries]
    copy.splice(i, 1)
    const difference = sum - entries[i]
    const triplets = [entries[i], ...findPair(copy, difference)] // O(n)
    if (triplets.length === 3) { return triplets.reduce((acc, i) => acc * i, 1) }
  }
}
