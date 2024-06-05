// est function for api
const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('testing with callback', (done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        chai.expect(data).to.have.property('data');
        done();
      });
  });
});
