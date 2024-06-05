//test through utils
const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('use utils', () => {
    const spying = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    chai.expect(spying.calledWith('SUM', 100, 20)).to.equal(true);
    spying.restore();
  });
});
