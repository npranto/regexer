import { assert } from 'chai';
import isDecimal from './isDecimal';

describe('Regexer', () => {
  describe('isDecimal()', () => {
    it('should return true when passes \'0.2\'', () => {
        assert.equal(isDecimal('0.2'), true);
    });
    it('should return true when passes 0.3545', () => {
      assert.equal(isDecimal(0.3545), true);
    });
    it('should return true when passes 12.2553', () => {
      assert.equal(isDecimal(12.2553), true);
    });
    it('should return true when passes 9.2', () => {
      assert.equal(isDecimal(9.2), true);
    });
    it('should return false when passes \'0.2.5\'', () => {
      assert.equal(isDecimal('0.2.5'), false);
    });
    it('should return false when passes \'a.a\'', () => {
      assert.equal(isDecimal('a.a'), false);
    });
    it('should return true when passes \'0.0\'', () => {
      assert.equal(isDecimal('0.0'), true);
    });
    it('should return false when passes \'-435.\'', () => {
      assert.equal(isDecimal('-435.'), false);
    });
    it('should return true when passes \'-435.6\'', () => {
      assert.equal(isDecimal('-435.6'), true);
    });
    it('should return false when passes \'\'', () => {
        assert.equal(isDecimal(''), false);
    });
    it('should return false when passes \'?\'', () => {
        assert.equal(isDecimal('?'), false);
    });
    it('should return false when passes null', () => {
        assert.equal(isDecimal(null), false);
    });
  })
})