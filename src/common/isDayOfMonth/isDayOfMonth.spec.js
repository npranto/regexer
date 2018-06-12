import { assert } from 'chai';
import isDayOfMonth from './isDayOfMonth';

describe('Regexer', () => {
  describe('isDayOfMonth()', () => {
    it('should return false when passes 0', () => {
      assert.equal(isDayOfMonth(0), false);
    });
    it('should return true when passes 1', () => {
      assert.equal(isDayOfMonth(1), true);
    });
    it('should return true when passes 5', () => {
      assert.equal(isDayOfMonth(5), true);
    });
    it('should return true when passes 9', () => {
      assert.equal(isDayOfMonth(9), true);
    });
    it('should return true when passes 10', () => {
      assert.equal(isDayOfMonth(10), true);
    });
    it('should return true when passes 11', () => {
      assert.equal(isDayOfMonth(11), true);
    });
    it('should return true when passes 15', () => {
      assert.equal(isDayOfMonth(15), true);
    });
    it('should return true when passes 19', () => {
      assert.equal(isDayOfMonth(19), true);
    });
    it('should return true when passes \'20\'', () => {
      assert.equal(isDayOfMonth('20'), true);
    });
    it('should return true when passes 21', () => {
      assert.equal(isDayOfMonth(21), true);
    });
    it('should return true when passes 25', () => {
      assert.equal(isDayOfMonth(25), true);
    });
    it('should return true when passes 29', () => {
      assert.equal(isDayOfMonth(29), true);
    });
    it('should return true when passes 30', () => {
      assert.equal(isDayOfMonth(30), true);
    });
    it('should return true when passes 31', () => {
      assert.equal(isDayOfMonth(31), true);
    });
    it('should return false when passes 32', () => {
      assert.equal(isDayOfMonth(32), false);
    });
    it('should return true when passes \'02\'', () => {
      assert.equal(isDayOfMonth('02'), true);
    });
    it('should return false when passes \'\'', () => {
      assert.equal(isDayOfMonth(''), false);
    });
    it('should return false when passes \'?\'', () => {
      assert.equal(isDayOfMonth('?'), false);
    });
    it('should return false when passes null', () => {
      assert.equal(isDayOfMonth(null), false);
    });
  });
});
