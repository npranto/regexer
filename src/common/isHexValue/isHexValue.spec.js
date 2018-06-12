import { assert } from 'chai';
import isHexValue from './isHexValue';

describe('Regexer', () => {
  describe('isHexValue()', () => {
    it('should return true when passed \'#FBB\'', () => {
      assert.equal(isHexValue('#FBB'), true);
    });
    it('should return false when passed \'#Fka7-t\'', () => {
      assert.equal(isHexValue('sbfj&&#'), false);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isHexValue(''), false);
    });
    it('should return true when passed \'#SHFF56\'', () => {
      assert.equal(isHexValue('#SHFF56'), true);
    });
    it('should return true when passed \'#FF56\'', () => {
      assert.equal(isHexValue('#FF56'), true);
    });
    it('should return true when passed \'#FF563\'', () => {
      assert.equal(isHexValue('#FF563'), false);
    });
    it('should return true when passed \'#FF563dsff\'', () => {
      assert.equal(isHexValue('#FF563dsff'), false);
    });
    it('should return false when passed null', () => {
      assert.equal(isHexValue(null), false);
    });
  });
});
