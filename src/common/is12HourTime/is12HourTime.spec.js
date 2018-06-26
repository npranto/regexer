import { assert } from 'chai';
import is12HourTime from './is12HourTime';

describe('Regexer', () => {
  describe('is12HourTime()', () => {
    it('should return true when passed \'1:00\'', () => {
      assert.equal(is12HourTime('1:00'), true);
    });
    it('should return true when passed \'03:56\'', () => {
      assert.equal(is12HourTime('03:56'), true);
    });
    it('should return true when passed \'12:07\'', () => {
      assert.equal(is12HourTime('12:07'), true);
    });
    it('should return true when passed \'02:20\'', () => {
      assert.equal(is12HourTime('02:20'), true);
    });
    it('should return true when passed \'2:40\'', () => {
      assert.equal(is12HourTime('2:40'), true);
    });
    it('should return true when passed \'8:09\'', () => {
      assert.equal(is12HourTime('8:09'), true);
    });
    it('should return true when passed \'2:09\'', () => {
      assert.equal(is12HourTime('2:09'), true);
    });
    it('should return true when passed \'10:37\'', () => {
      assert.equal(is12HourTime('10:37'), true);
    });
    it('should return true when passed \'11:20\'', () => {
      assert.equal(is12HourTime('11:20'), true);
    });
    it('should return false when passed \'13:22\'', () => {
      assert.equal(is12HourTime('13:22'), false);
    });
    it('should return false when passed \'24:10\'', () => {
      assert.equal(is12HourTime('24:10'), false);
    });
    it('should return false when passed \'7:60\'', () => {
      assert.equal(is12HourTime('7:60'), false);
    });
    it('should return false when passed \'00:01\'', () => {
      assert.equal(is12HourTime('00:01'), false);
    });
    it('should return false when passed \'sbfj&&#\'', () => {
      assert.equal(is12HourTime('sbfj&&#'), false);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(is12HourTime(''), false);
    });
    it('should return false when passed \'NS-pranto_236\'', () => {
      assert.equal(is12HourTime('NS-pranto_236'), false);
    });
    it('should return false when passed null', () => {
      assert.equal(is12HourTime(null), false);
    });
    it('should return false when passed nothing', () => {
      assert.equal(is12HourTime(), false);
    });
  });
});



