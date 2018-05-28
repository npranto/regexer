import { assert } from 'chai';
import isPassword from './isPassword';

describe('Regexer', () => {
  describe('isPassword()', () => {
    it('should return true when passed \'npranto\'', () => {
      assert.equal(isPassword('npranto'), true);
    });
    it('should return false when passed \'sbfj&&#\'', () => {
      assert.equal(isPassword('sbfj&&#'), false);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isPassword(''), false);
    });
    it('should return true when passed \'NS-pranto_236\'', () => {
      assert.equal(isPassword('NS-pranto_236'), true);
		});
		it('should return false when passed null', () => {
      assert.equal(isPassword(null), false);
		});
		it('should return false when passed nothing', () => {
      assert.equal(isPassword(), false);
    });
  });
});
