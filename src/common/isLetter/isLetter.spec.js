import { assert } from 'chai';
import isLetter from './isLetter';

describe('Regexer', () => {
  describe('isLetter()', () => {
    it('should return true when passed \'a\'', () => {
      assert.equal(isLetter('a'), true);
    });
    it('should return true when passed \'ACTIVITY\'', () => {
      assert.equal(isLetter('ACTIVITY'), true);
    });
    it('should return false when passed \'72864783246\'', () => {
      assert.equal(isLetter('72864783246'), false);
    });
    it('should return false when passed \'haha?!\'', () => {
      assert.equal(isLetter('haha?!'), false);
    });
    it('should return false when passed \'A coffee shop is nearby\'', () => {
      assert.equal(isLetter('A coffee shop is nearby'), false);
    });
    it('should return false when passed \'Is that any coffee shop nearby?\'', () => {
      assert.equal(isLetter('Is that any coffee shop nearby?'), false);
    });
    it('should return false when passed \' \'', () => {
      assert.equal(isLetter(' '), false);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isLetter(''), false);
    });
    it('should return false when passed null', () => {
      assert.equal(isLetter(null), false);
    });
  });
});
