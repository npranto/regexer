import { assert } from 'chai';
import isWhiteSpace from './isWhiteSpace';

describe('Regexer', () => {
  describe('isWhiteSpace()', () => {
    it('should return false when passed \'about\'', () => {
      assert.equal(isWhiteSpace('about'), false);
    });
    it('should return true when passed \' \'', () => {
      assert.equal(isWhiteSpace(' '), true);
    });
    it('should return false when passed \'  \'', () => {
      assert.equal(isWhiteSpace('  '), false);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isWhiteSpace(''), false);
    });
    it('should return false when passed null', () => {
      assert.equal(isWhiteSpace(null), false);
    });
  });
});
