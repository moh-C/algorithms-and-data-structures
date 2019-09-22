// Perfect use of Map, Filter and Reduce helper functions in JavaScript
data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  }
];

let done = data
  .filter((val, i, arr) => {
    return val.type == 'dog';
  })
  .map(e => (e.age *= 7))
  .reduce((a, e) => a + e);

console.log(done);
