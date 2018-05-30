import { assert } from 'chai';
import isDayOfWeekString from './isDayOfWeekString';

describe('Regexer', () => {
	describe('isDayOfWeekString()', () => {
		it('should return true when passes \'monday\'', () => {
			assert.equal(isDayOfWeekString('monday'), true);
		})
		it('should return true when passes \'TUESDAY\'', () => {
			assert.equal(isDayOfWeekString('TUESDAY'), true);
		})
		it('should return true when passes \'wedNESDAY\'', () => {
			assert.equal(isDayOfWeekString('wedNESDAY'), true);
		})
		it('should return true when passes \'thursday\'', () => {
			assert.equal(isDayOfWeekString('thursday'), true);
		})
		it('should return true when passes \'friDAY\'', () => {
			assert.equal(isDayOfWeekString('friDAY'), true);
		})
		it('should return false when passes \'\'', () => {
			assert.equal(isDayOfWeekString(''), false);
		})
		it('should return false when passes \'?\'', () => {
			assert.equal(isDayOfWeekString('?'), false);
		})
		it('should return false when passes null', () => {
			assert.equal(isDayOfWeekString(null), false);
		})
	})
})