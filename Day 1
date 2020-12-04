let findPair = (entries=[], sum) => { // O(n)
  const lookup = {}
  for (let i of entries) { // O(n)
    const difference = sum - i // O(1)
    if (lookup[difference]) { return [i, difference] } // O(1)
    lookup[i] = true
  }
  return []
}

let findTriplets = (entries=[], sum) => { // O(n^2)
  for (let i = 0; i < entries.length; i++) { // O(n)
    const copy = [...entries] // O(n)
    copy.splice(i, 1) // O(n)
    const difference = sum - entries[i] // O(1)
    const triplets = [entries[i], ...findPair(copy, difference)] // O(n)
    if (triplets.length === 3) { return triplets.reduce((acc, i) => acc * i, 1) } // O(1)
  }
}
