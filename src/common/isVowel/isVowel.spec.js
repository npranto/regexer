import { assert } from 'chai';
import isVowel from './isVowel';

describe('Regexer', () => {
  describe('isVowel()', () => {
    it('should return true when passed \'a\'', () => {
      assert.equal(isVowel('a'), true);
		});
		it('should return true when passed \'e\'', () => {
      assert.equal(isVowel('e'), true);
		});
		it('should return true when passed \'i\'', () => {
      assert.equal(isVowel('i'), true);
		});
		it('should return true when passed \'o\'', () => {
      assert.equal(isVowel('o'), true);
		});
		it('should return true when passed \'u\'', () => {
      assert.equal(isVowel('u'), true);
		});
		it('should return true when passed \'A\'', () => {
      assert.equal(isVowel('A'), true);
		});
		it('should return true when passed \'E\'', () => {
      assert.equal(isVowel('E'), true);
		});
		it('should return true when passed \'I\'', () => {
      assert.equal(isVowel('I'), true);
		});
		it('should return true when passed \'O\'', () => {
      assert.equal(isVowel('O'), true);
		});
		it('should return true when passed \'U\'', () => {
      assert.equal(isVowel('U'), true);
    });
    it('should return false when passed \'B\'', () => {
      assert.equal(isVowel('B'), false);
		});
		it('should return false when passed \'x\'', () => {
      assert.equal(isVowel('x'), false);
		});
		it('should return false when passed \'?\'', () => {
      assert.equal(isVowel('?'), false);
		});
		it('should return false when passed \' \'', () => {
      assert.equal(isVowel(' '), false);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isVowel(''), false);
    });
		it('should return false when passed null', () => {
      assert.equal(isVowel(null), false);
    });
  });
});
