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
  it('normal id', (done) => {
    req.get(`${API_URL}/cart/47`, (_err, res, body) => {
      chai.expect(res.statusCode).to.be.equal(200);
      chai.expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });
  it('negative id', (done) => {
    req.get(`${API_URL}/cart/-21`, (_err, res, body) => {
      chai.expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
  it('none number', (done) => {
    req.get(`${API_URL}/cart/dfaw`, (_err, res, body) => {
      chai.expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
