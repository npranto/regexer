import { assert } from 'chai';
import isMonthOfYearString from './isMonthOfYearString';

describe('Regexer', () => {
  describe('isMonthOfYearString()', () => {
    it('should return true when passes \'january\'', () => {
      assert.equal(isMonthOfYearString('january'), true);
    });
    it('should return true when passes \'February\'', () => {
      assert.equal(isMonthOfYearString('February'), true);
    });
    it('should return true when passes \'March\'', () => {
      assert.equal(isMonthOfYearString('March'), true);
    });
    it('should return true when passes \'APRIL\'', () => {
      assert.equal(isMonthOfYearString('APRIL'), true);
    });
    it('should return true when passes \'may\'', () => {
      assert.equal(isMonthOfYearString('may'), true);
    });
    it('should return true when passes \'jUNE\'', () => {
      assert.equal(isMonthOfYearString('jUNE'), true);
    });
    it('should return true when passes \'july\'', () => {
      assert.equal(isMonthOfYearString('july'), true);
    });
    it('should return true when passes \'august\'', () => {
      assert.equal(isMonthOfYearString('august'), true);
    });
    it('should return true when passes \'september\'', () => {
      assert.equal(isMonthOfYearString('september'), true);
    });
    it('should return true when passes \'OCTOBER\'', () => {
      assert.equal(isMonthOfYearString('OCTOBER'), true);
    });
    it('should return true when passes \'NOvember\'', () => {
      assert.equal(isMonthOfYearString('NOvember'), true);
    });
    it('should return true when passes \'decemBER\'', () => {
      assert.equal(isMonthOfYearString('decemBER'), true);
    });
    it('should return false when passes \'jun\'', () => {
      assert.equal(isMonthOfYearString('jun'), false);
    });
    it('should return false when passes \'DEC\'', () => {
      assert.equal(isMonthOfYearString('DEC'), false);
    });
    it('should return false when passes \'\'', () => {
      assert.equal(isMonthOfYearString(''), false);
    });
    it('should return false when passes \'?\'', () => {
      assert.equal(isMonthOfYearString('?'), false);
    });
    it('should return false when passes null', () => {
      assert.equal(isMonthOfYearString(null), false);
    });
  });
});
