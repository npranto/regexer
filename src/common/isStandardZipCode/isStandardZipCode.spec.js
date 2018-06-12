import { assert } from 'chai';
import isStandardZipCode from './isStandardZipCode';

describe('Regexer', () => {
  describe('isStandardZipCode()', () => {
    it('should return true when passes \'02140\'', () => {
      assert.equal(isStandardZipCode('02140'), true);
    });
    it('should return true when passes 45546', () => {
      assert.equal(isStandardZipCode(45546), true);
    });
    it('should return true when passes \'12345-6789\'', () => {
      assert.equal(isStandardZipCode('12345-6789'), true);
    });
    it('should return false when passes \'12345-678932\'', () => {
      assert.equal(isStandardZipCode('12345-678932'), false);
    });
    it('should return false when passes \'12345 6789\'', () => {
      assert.equal(isStandardZipCode('12345 6789'), false);
    });
    it('should return false when passes \'98121-\'', () => {
      assert.equal(isStandardZipCode('98121-'), false);
    });
    it('should return false when passes \'\'', () => {
      assert.equal(isStandardZipCode(''), false);
    });
    it('should return false when passes \'?\'', () => {
      assert.equal(isStandardZipCode('?'), false);
    });
    it('should return false when passes null', () => {
      assert.equal(isStandardZipCode(null), false);
    });
  });
});
