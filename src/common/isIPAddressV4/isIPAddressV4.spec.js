import { assert } from 'chai';
import isIPAddressV4 from './isIPAddressV4';

describe('Regexer', () => {
  describe('isIPAddressV4()', () => {
    it('should return true when passed \'172.16.254.1\'', () => {
      assert.equal(isIPAddressV4('172.16.254.1'), true);
    });
    it('should return true when passed \'172.16.254.1\'', () => {
      assert.equal(isIPAddressV4('172.16.257.1'), false);
    });
    it('should return false when passed \'sbfj&&#\'', () => {
      assert.equal(isIPAddressV4('54.45.222.345'), false);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isIPAddressV4(''), false);
    });
    it('should return true when passed \'0.1.0.1\'', () => {
      assert.equal(isIPAddressV4('0.1.0.1'), true);
    });
    it('should return false when passed null', () => {
      assert.equal(isIPAddressV4(null), false);
    });
  });
});
