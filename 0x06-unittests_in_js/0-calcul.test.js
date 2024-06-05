// tests calculate number test
const assert = require('assert');
const calculateNumber = require("./0-calcul");

describe('calculateNumber', () => {
  it('check the rounded part', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1, 3.2), 4);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('negative num', () => {
    assert.strictEqual(calculateNumber(-1, 3), 2);
    assert.strictEqual(calculateNumber(1, -3.7), -3);
    assert.strictEqual(calculateNumber(1, -3.2), -2);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });
  it('args', () => {
    assert.strictEqual(Number.isNaN(calculateNumber(1)), true);
    assert.strictEqual(Number.isNaN(calculateNumber()), true);
});
