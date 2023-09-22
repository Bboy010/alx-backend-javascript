// 6-payment_token.test.js

const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with a success message when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        expect(result).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Call done to signal the end of the test
      })
      .catch((error) => {
        done(error); // Call done with an error if the promise is rejected
      });
  });

  // Add more test cases if needed
});
