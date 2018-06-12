import { assert } from 'chai';
import isUrl from './isUrl';

describe('Regexer', () => {
  describe('isUrl()', () => {
    it('should return true when passed \'http://www.youtube.com/watch?v=-wtIMTCHWuI\'', () => {
      assert.equal(isUrl('http://www.youtube.com/watch?v=-wtIMTCHWuI'), true);
    });
    it('should return false when passed \'http://google.com/some/file!.html\'', () => {
      assert.equal(isUrl('http://google.com/some/file!.html'), false);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isUrl(''), false);
    });
    it('should return true when passed \'http://youtu.be/-wtIMTCHWuI\'', () => {
      assert.equal(isUrl('http://youtu.be/-wtIMTCHWuI'), true);
    });
    it('should return true when passed \'ttp://i2.ytimg.com/vi/-wtIMTCHWuI/hqdefault.jpg\'', () => {
      assert.equal(isUrl('http://i2.ytimg.com/vi/-wtIMTCHWuI/hqdefault.jpg'), true);
    });
    it('should return false when passed null', () => {
      assert.equal(isUrl(null), false);
    });
  });
});
