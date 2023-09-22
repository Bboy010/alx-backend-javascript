// 4-payment.test.js

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments and display the result', () => {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWith('The total is: 10')).to.be.true;
  });
});
