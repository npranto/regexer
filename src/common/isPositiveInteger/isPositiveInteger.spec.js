import { assert } from 'chai';
import isPositiveInteger from './isPositiveInteger';

describe('Regexer', () => {
  describe('isPositiveInteger()', () => {
    it('should return true when passed \'5\'', () => {
      assert.equal(isPositiveInteger('5'), true);
		});
		it('should return true when passed \'554\'', () => {
      assert.equal(isPositiveInteger('554'), true);
		});
		it('should return false when passed -8726', () => {
      assert.equal(isPositiveInteger(-8726), false);
		});
		it('should return false when passed 0.3443', () => {
      assert.equal(isPositiveInteger(0.3443), false);
		});
		it('should return true when passed \'1027399\'', () => {
      assert.equal(isPositiveInteger('1027399'), true);
		});
		it('should return true when passed \'0\'', () => {
      assert.equal(isPositiveInteger('0'), true);
		});
		it('should return false when passed 34', () => {
      assert.equal(isPositiveInteger(-34), false);
		});
		it('should return false when passed \'\'', () => {
      assert.equal(isPositiveInteger(''), false);
		});
		it('should return false when passed null', () => {
      assert.equal(isPositiveInteger(null), false);
		});
  });
});
