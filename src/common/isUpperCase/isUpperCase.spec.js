import { assert } from 'chai';
import isUpperCase from './isUpperCase';

describe('Regexer', () => {
  describe('isUpperCase()', () => {
    it('should return true when passed \'a\'', () => {
      assert.equal(isUpperCase('a'), false);
		});
		it('should return true when passed \'dog\'', () => {
      assert.equal(isUpperCase('dog'), false);
		});
		it('should return true when passed \'f\'', () => {
      assert.equal(isUpperCase('f'), false);
		});
		it('should return true when passed \'IAN\'', () => {
      assert.equal(isUpperCase('IAN'), true);
		});
		it('should return true when passed \'k\'', () => {
      assert.equal(isUpperCase('k'), false);
		});
		it('should return true when passed \'A\'', () => {
      assert.equal(isUpperCase('A'), true);
		});
		it('should return true when passed \'false\'', () => {
      assert.equal(isUpperCase('false'), false);
		});
		it('should return true when passed \'U\'', () => {
      assert.equal(isUpperCase('U'), true);
		});
		it('should return true when passed \'aB\'', () => {
      assert.equal(isUpperCase('aB'), false);
		});
		it('should return true when passed \'?\'', () => {
      assert.equal(isUpperCase('?'), true);
		});
		it('should return true when passed \' \'', () => {
      assert.equal(isUpperCase(' '), true);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isUpperCase(''), false);
    });
		it('should return false when passed null', () => {
      assert.equal(isUpperCase(null), false);
    });
  });
});
