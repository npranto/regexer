import { assert } from 'chai';
import isStrongPassword from './isStrongPassword';

describe('Regexer', () => {
  describe('isStrongPassword()', () => {
    it('should return true when passes \'Ajohnson184&\'', () => {
      assert.equal(isStrongPassword('Ajohnson184&'), true);
    });
		it('should return true when passes \'kevinWilliamsBaller23^\'', () => {
      assert.equal(isStrongPassword('kevinWilliamsBaller23^'), true);
		});
		it('should return false when passes \'ilovestarbucks\'', () => {
      assert.equal(isStrongPassword('ilovestarbucks^'), false);
		});
		it('should return false when passes \'66lovePotato\'', () => {
      assert.equal(isStrongPassword('66lovePotato'), false);
		});
		it('should return false when passes \'10000001\'', () => {
      assert.equal(isStrongPassword('10000001'), false);
		});
		it('should return false when passes \'JackDanielIsNotSoGood()\'', () => {
      assert.equal(isStrongPassword('JackDanielIsNotSoGood()'), false);
    });
    it('should return false when passes \'\'', () => {
      assert.equal(isStrongPassword(''), false);
    });
    it('should return false when passes \'?\'', () => {
      assert.equal(isStrongPassword('?'), false);
    });
    it('should return false when passes null', () => {
      assert.equal(isStrongPassword(null), false);
    });
  });
});
