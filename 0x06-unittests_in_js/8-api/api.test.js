// test case for api
const req = require('request');
const chai = require('chai');

describe('basic test', () => {
  const API_URL = 'http://localhost:7865';
  it('check messages', (done) => {
    req.get(`${API_URL}/`, (_err, res, body) => {
      chai.expect(res.statusCode).to.be.equal(200);
      chai.expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
