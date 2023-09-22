// 3-payment.test.js

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and display the result', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.withArgs('SUM', 100, 20).returns(120);

    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(consoleLogSpy.calledOnceWith('The total is: 120')).to.be.true;

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
