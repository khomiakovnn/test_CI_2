import health from '../matchers.js';

const datalist = [
  [],
  [],
  [],
];

const handler = test.each(datalist);

handler('description', (...paramsn) => {
  const result = 'XXX';
  expect(result).toBe('YYY');
});
