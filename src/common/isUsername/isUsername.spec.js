import { assert } from 'chai';
import isUsername from './isUsername';

describe('Regexer', () => {
  describe('isUsername()', () => {
    it('should return true when passed \'npranto\'', () => {
      assert.equal(isUsername('npranto'), true);
    });
    it('should return false when passed \'sbfj&&#\'', () => {
      assert.equal(isUsername('sbfj&&#'), false);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isUsername(''), false);
    });
    it('should return true when passed \'NS-pranto_236\'', () => {
      assert.equal(isUsername('NS-pranto_236'), true);
    });
    it('should return true when passed \'james-bond007\'', () => {
      assert.equal(isUsername('james-bond007'), true);
    });
    it('should return false when passed null', () => {
      assert.equal(isUsername(null), false);
    });
  });
});
