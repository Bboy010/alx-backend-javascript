// 8-api/api.test.js

const request = require('request');
const { expect } = require('chai');
const app = require('./api');

const BASE_URL = 'http://localhost:7865';

describe('Index Page', () => {
  it('should return a 200 status code', (done) => {
    request.get(BASE_URL, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the message "Welcome to the payment system"', (done) => {
    request.get(BASE_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
