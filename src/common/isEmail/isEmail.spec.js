import { assert } from 'chai';
import isEmail from './isEmail';

describe('Regexer', () => {
  describe('isEmail()', () => {
    it('should return true when passed \'nfgdfgg@gmail.com\'', () => {
      assert.equal(isEmail('nfgdfgg@gmail.com'), true);
    });
    it('should return false when passed \'dfgdfg@gmail\'', () => {
      assert.equal(isEmail('dfgdfg@gmail'), false);
    });
    it('should return false when passed \'sdfsdfsdfsd.com\'', () => {
      assert.equal(isEmail('sdfsdfsdfsd.com'), false);
    });
    it('should return true when passed \'npraxx@123gmail.co\'', () => {
      assert.equal(isEmail('npraxx@123gmail.co'), true);
    });
    it('should return false when passed null', () => {
      assert.equal(isEmail(null), false);
    });
  });
});
