import { assert } from 'chai';
import isPositiveNumber from './isPositiveNumber';

describe('Regexer', () => {
  describe('isPositiveNumber()', () => {
    it('should return true when passes 43', () => {
      assert.equal(isPositiveNumber(43), true);
    });
    it('should return false when passes -21', () => {
      assert.equal(isPositiveNumber(-21), false);
    });
    it('should return true when passes 0', () => {
      assert.equal(isPositiveNumber(0), true);
    });
    it('should return true when passes 98.2', () => {
      assert.equal(isPositiveNumber(98.2), true);
    });
    it('should return true when passes 0.1', () => {
      assert.equal(isPositiveNumber(0.1), true);
    });
    it('should return false when passes -0.99', () => {
      assert.equal(isPositiveNumber(-0.99), false);
    });
    it('should return true when passes 7/2', () => {
      assert.equal(isPositiveNumber((7 / 2)), true);
    });
    it('should return true when passes \'321.123\'', () => {
      assert.equal(isPositiveNumber('321.123'), true);
    });
    it('should return true when passes \'321.\'', () => {
      assert.equal(isPositiveNumber('321.'), true);
    });
    it('should return false when passes \'\'', () => {
      assert.equal(isPositiveNumber(''), false);
    });
    it('should return false when passes \'?\'', () => {
      assert.equal(isPositiveNumber('?'), false);
    });
    it('should return false when passes null', () => {
      assert.equal(isPositiveNumber(null), false);
    });
  });
});
