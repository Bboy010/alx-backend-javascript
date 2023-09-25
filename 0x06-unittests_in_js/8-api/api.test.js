// Import necessary modules
const request = require('request');
const chai = require('chai');
const expect = chai.expect;

// Define the base URL for your API
const baseUrl = 'http://localhost:7865';

// Test suite for the index page
describe('Index Page', () => {
  // Test for the correct status code
  it('should return status code 200', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  // Test for the correct result
  it('should return "Welcome to the payment system"', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

});
