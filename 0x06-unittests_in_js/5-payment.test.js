//2 tests for utils
const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment');

describe('sendPaymentRequestToAPI', () => {
  beforeEach('spy', () => {
    sinon.spy(console, 'log');
  });
  afterEach('restoration', () => {
    console.log.restore();
  });
  it('vertification on console', () => {
    sendPaymentRequestToAPI(100, 20);
    chai.expect(console.log.withArgs('The total is: 120').calledOnce).to.be.true;
  });
  it('vertification on console', () => {
    sendPaymentRequestToAPI(10, 10);
    chai.expect(console.log.withArgs('The total is: 20').calledOnce).to.be.true;
  });
});
