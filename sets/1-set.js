let bag = new Set()

bag.add('oranges')
bag.add('apples')
bag.delete('apples')

if (bag.has('apples')) console.log('has apples')

  function addToSet(set, ...values) {
    values.forEach(value => set.add(value))
  }

  const mySet = new Set()
  addToSet(mySet, 1, 2, 3, 4, 5)

  function createSet(...elements) {
    return new Set(elements)
  }

  const numSet = createSet(1, 10, 30, 100, 100)

  const cities = [{prod:1, city: 'athens'}, {prod:2, city: 'athens'}, {prod: 3, city: 'lamia'}]
  function getUniqueCities(arr) {
    return [...new Set(arr.map(product => product.city))]
  }
