import { assert } from 'chai';
import isInteger from './isInteger';

describe('Regexer', () => {
  describe('isInteger()', () => {
    it('should return true when passed \'5\'', () => {
      assert.equal(isInteger('5'), true);
    });
    it('should return true when passed \'554\'', () => {
      assert.equal(isInteger('554'), true);
    });
    it('should return true when passed 8726', () => {
      assert.equal(isInteger(8726), true);
    });
    it('should return true when passed \'1027399\'', () => {
      assert.equal(isInteger('1027399'), true);
    });
    it('should return true when passed \'0\'', () => {
      assert.equal(isInteger('0'), true);
    });
    it('should return true when passed 34', () => {
      assert.equal(isInteger(-34), true);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isInteger(''), false);
    });
    it('should return false when passed null', () => {
      assert.equal(isInteger(null), false);
    });
  });
});
