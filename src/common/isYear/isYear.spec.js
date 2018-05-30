import { assert } from 'chai';
import isYear from './isYear';

describe('Regexer', () => {
	describe('isYear()', () => {
		it('should return true when passes 1945', () => {
			assert.equal(isYear(1945), true);
		})
		it('should return true when passes \'0000\'', () => {
			assert.equal(isYear('0000'), true);
		})
		it('should return false when passes \'fggf\'', () => {
			assert.equal(isYear('fggf'), false);
		})
		it('should return true when passes 2010', () => {
			assert.equal(isYear(2010), true);
		})
		it('should return false when passes \'?\'', () => {
			assert.equal(isYear(')'), false);
		})
		it('should return false when passes \'\'', () => {
			assert.equal(isYear(''), false);
		})
		it('should return false when passes null', () => {
			assert.equal(isYear(null), false);
		})
	})
})