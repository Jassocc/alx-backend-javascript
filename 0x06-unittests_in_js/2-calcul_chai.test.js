// tests calculate number test
const chai = require('chai');
const calculateNumber = require("./2-calcul_chai");

describe('calculateNumber SUM', () => {
  it('check the rounded part', () => {
    chai.expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    chai.expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    chai.expect(calculateNumber('SUM', 1, 3.2)).to.equal(4);
    chai.expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('negative num', () => {
    chai.expect(calculateNumber('SUM', -1, 3)).to.equal(2);
    chai.expect(calculateNumber('SUM', 1, -3.7)).to.equal(-3);
    chai.expect(calculateNumber('SUM', 1, -3.2)).to.equal(-2);
    chai.expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
  });
});
describe('Subtract', () => {
  it('rounded', () => {
    chai.expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    chai.expect(calculateNumber('SUBTRACT', 5, 3.7)).to.equal(1);
  });
  it ('negative numbers', () => {
    chai.expect(calculateNumber('SUBTRACT', 1, -3.2)).to.equal(4);
    chai.expect(calculateNumber('SUBTRACT', -1.4, -3.7)).to.equal(3);
  });
});
describe('Division', () => {
  it('rounded', () => {
    chai.expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    chai.expect(calculateNumber('DIVIDE', 0, 3.7)).to.equal(0);
    chai.expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });
  it ('negative numbers', () => {
    chai.expect(calculateNumber('DIVIDE', -1, 0)).to.equal('Error');
    chai.expect(calculateNumber('DIVIDE', -4.4, -1.7)).to.equal(2);
  });
});
