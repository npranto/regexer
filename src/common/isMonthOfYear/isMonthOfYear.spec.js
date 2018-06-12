import { assert } from 'chai';
import isMonthOfYear from './isMonthOfYear';

describe('Regexer', () => {
  describe('isMonthOfYear()', () => {
    it('should return false when passes 0', () => {
      assert.equal(isMonthOfYear(0), false);
    });
    it('should return true when passes 1', () => {
      assert.equal(isMonthOfYear(1), true);
    });
    it('should return true when passes 3', () => {
      assert.equal(isMonthOfYear(3), true);
    });
    it('should return true when passes 5', () => {
      assert.equal(isMonthOfYear(5), true);
    });
    it('should return true when passes \'07\'', () => {
      assert.equal(isMonthOfYear('07'), true);
    });
    it('should return true when passes 9', () => {
      assert.equal(isMonthOfYear(9), true);
    });
    it('should return true when passes \'10\'', () => {
      assert.equal(isMonthOfYear('10'), true);
    });
    it('should return true when passes 11', () => {
      assert.equal(isMonthOfYear(11), true);
    });
    it('should return true when passes 12', () => {
      assert.equal(isMonthOfYear(12), true);
    });
    it('should return false when passes 13', () => {
      assert.equal(isMonthOfYear(13), false);
    });
    it('should return false when passes 20', () => {
      assert.equal(isMonthOfYear(20), false);
    });
    it('should return false when passes \'\'', () => {
      assert.equal(isMonthOfYear(''), false);
    });
    it('should return false when passes \'?\'', () => {
      assert.equal(isMonthOfYear('?'), false);
    });
    it('should return false when passes null', () => {
      assert.equal(isMonthOfYear(null), false);
    });
  });
});
