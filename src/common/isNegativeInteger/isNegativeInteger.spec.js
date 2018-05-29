import { assert } from 'chai';
import isNegativeInteger from './isNegativeInteger';

describe('Regexer', () => {
  describe('isNegativeInteger()', () => {
    it('should return false when passed \'5\'', () => {
      assert.equal(isNegativeInteger('5'), false);
    });
    it('should return false when passed \'554\'', () => {
      assert.equal(isNegativeInteger('554'), false);
    });
    it('should return true when passed -8726', () => {
      assert.equal(isNegativeInteger(-8726), true);
    });
    it('should return false when passed 0.3443', () => {
      assert.equal(isNegativeInteger(0.3443), false);
    });
    it('should return false when passed \'1027399\'', () => {
      assert.equal(isNegativeInteger('1027399'), false);
    });
    it('should return true when passed \'0\'', () => {
      assert.equal(isNegativeInteger('0'), true);
    });
    it('should return true when passed -34', () => {
      assert.equal(isNegativeInteger(-34), true);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isNegativeInteger(''), false);
    });
    it('should return false when passed null', () => {
      assert.equal(isNegativeInteger(null), false);
    });
  });
});