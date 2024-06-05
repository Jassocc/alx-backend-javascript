// tests calculate number test
const assert = require('assert');
const calculateNumber = require("./1-calcul");

describe('calculateNumber SUM', () => {
  it('check the rounded part', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1, 3.2), 4);
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('negative num', () => {
    assert.strictEqual(calculateNumber('SUM', -1, 3), 2);
    assert.strictEqual(calculateNumber('SUM', 1, -3.7), -3);
    assert.strictEqual(calculateNumber('SUM', 1, -3.2), -2);
    assert.strictEqual(calculateNumber('SUM', -1.5, -3.7), -5);
  });
});
describe('Subtract', () => {
  it('rounded', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 5, 3.7), 1);
  });
  it ('negative numbers', () => {
     assert.strictEqual(calculateNumber('SUBTRACT', 1, -3.2), 4);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.7), 3);
  });
});
describe('Division', () => {
  it('rounded', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 0, 3.7), 0);
    assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
  });
  it ('negative numbers', () => {
     assert.strictEqual(calculateNumber('DIVIDE', -1, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', -4.4, -1.7), 2);
  });
});
