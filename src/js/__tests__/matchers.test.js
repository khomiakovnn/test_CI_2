import health from '../matchers.js';

const heroes = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]

const heroesSorted = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 }
]

test ('Sorting', () => {
  let result = health(heroes)
  expect(result).toEqual(heroesSorted)
});
