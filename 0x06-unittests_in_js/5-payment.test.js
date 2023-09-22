// 5-payment.test.js

const sendPaymentRequestToApi = require('./5-payment');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" and be called once when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(consoleLogSpy.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" and be called once when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(consoleLogSpy.calledOnceWith('The total is: 20')).to.be.true;
  });
});
