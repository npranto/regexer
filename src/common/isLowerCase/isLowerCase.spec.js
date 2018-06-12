import { assert } from 'chai';
import isLowerCase from './isLowerCase';

describe('Regexer', () => {
  describe('isLowerCase()', () => {
    it('should return true when passed \'a\'', () => {
      assert.equal(isLowerCase('a'), true);
    });
    it('should return true when passed \'dog\'', () => {
      assert.equal(isLowerCase('dog'), true);
    });
    it('should return true when passed \'f\'', () => {
      assert.equal(isLowerCase('f'), true);
    });
    it('should return true when passed \'ian\'', () => {
      assert.equal(isLowerCase('ian'), true);
    });
    it('should return true when passed \'k\'', () => {
      assert.equal(isLowerCase('k'), true);
    });
    it('should return true when passed \'A\'', () => {
      assert.equal(isLowerCase('A'), false);
    });
    it('should return true when passed \'false\'', () => {
      assert.equal(isLowerCase('false'), true);
    });
    it('should return true when passed \'U\'', () => {
      assert.equal(isLowerCase('U'), false);
    });
    it('should return true when passed \'aB\'', () => {
      assert.equal(isLowerCase('aB'), false);
    });
    it('should return true when passed \'?\'', () => {
      assert.equal(isLowerCase('?'), true);
    });
    it('should return true when passed \' \'', () => {
      assert.equal(isLowerCase(' '), true);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isLowerCase(''), false);
    });
    it('should return false when passed null', () => {
      assert.equal(isLowerCase(null), false);
    });
  });
});
