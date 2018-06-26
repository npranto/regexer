import { assert } from 'chai';
import is24HourTime from './is24HourTime';

describe('Regexer', () => {
  describe('is24HourTime()', () => {
    it('should return true when passed \'1:00\'', () => {
      assert.equal(is24HourTime('1:00'), true);
    });
    it('should return true when passed \'03:56\'', () => {
      assert.equal(is24HourTime('03:56'), true);
    });
    it('should return true when passed \'12:07\'', () => {
      assert.equal(is24HourTime('12:07'), true);
    });
    it('should return true when passed \'02:20\'', () => {
      assert.equal(is24HourTime('02:20'), true);
    });
    it('should return true when passed \'2:40\'', () => {
      assert.equal(is24HourTime('2:40'), true);
    });
    it('should return true when passed \'8:09\'', () => {
      assert.equal(is24HourTime('8:09'), true);
    });
    it('should return true when passed \'2:09\'', () => {
      assert.equal(is24HourTime('2:09'), true);
    });
    it('should return true when passed \'10:37\'', () => {
      assert.equal(is24HourTime('10:37'), true);
    });
    it('should return true when passed \'11:20\'', () => {
      assert.equal(is24HourTime('11:20'), true);
    });
    it('should return true when passed \'13:22\'', () => {
      assert.equal(is24HourTime('13:22'), true);
    });
    it('should return true when passed \'15:00\'', () => {
      assert.equal(is24HourTime('15:00'), true);
    });
    it('should return true when passed \'17:50\'', () => {
      assert.equal(is24HourTime('17:50'), true);
    });
    it('should return false when passed \'-01:22\'', () => {
      assert.equal(is24HourTime('-01:22'), false);
    });
    it('should return true when passed \'21:44\'', () => {
      assert.equal(is24HourTime('21:44'), true);
    });
    it('should return false when passed \'30:33\'', () => {
      assert.equal(is24HourTime('30:33'), false);
    });
    it('should return false when passed \'24:10\'', () => {
      assert.equal(is24HourTime('24:10'), false);
    });
    it('should return false when passed \'7:60\'', () => {
      assert.equal(is24HourTime('7:60'), false);
    });
    it('should return false when passed \'00:01\'', () => {
      assert.equal(is24HourTime('00:01'), false);
    });
    it('should return false when passed \'sbfj&&#\'', () => {
      assert.equal(is24HourTime('sbfj&&#'), false);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(is24HourTime(''), false);
    });
    it('should return false when passed \'NS-pranto_236\'', () => {
      assert.equal(is24HourTime('NS-pranto_236'), false);
    });
    it('should return false when passed null', () => {
      assert.equal(is24HourTime(null), false);
    });
    it('should return false when passed nothing', () => {
      assert.equal(is24HourTime(), false);
    });
  });
});



