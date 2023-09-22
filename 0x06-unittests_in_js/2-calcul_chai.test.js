// 2-calcul_chai.test.js

const calculateNumber = require('./2-calcul_chai.js');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should return the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 2.6)).to.equal(4);
      expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
      expect(calculateNumber('SUM', 2.5, 2.5)).to.equal(6);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should return the subtraction result of two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 3.5, 1.5)).to.equal(2);
      expect(calculateNumber('SUBTRACT', 5.5, 2.5)).to.equal(3);
    });
  });

  describe('DIVIDE operation', () => {
    it('should return the division result of two rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
      expect(calculateNumber('DIVIDE', 10, 4)).to.equal(2.5);
    });

    it('should return "Error" when dividing by a rounded 0', () => {
      expect(calculateNumber('DIVIDE', 5, 0)).to.equal('Error');
    });
  });
});
