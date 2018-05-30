import { assert } from 'chai';
import isNegativeNumber from './isNegativeNumber';

describe('Regexer', () => {
	describe('isNegativeNumber()', () => {
		it('should return false when passes 43', () => {
			assert.equal(isNegativeNumber(43), false);
		})
		it('should return true when passes -21', () => {
			assert.equal(isNegativeNumber(-21), true);
		})
		it('should return true when passes 0', () => {
			assert.equal(isNegativeNumber(0), true);
		})
		it('should return false when passes 98.2', () => {
			assert.equal(isNegativeNumber(98.2), false);
		})
		it('should return true when passes -0.1', () => {
			assert.equal(isNegativeNumber(-0.1), true);
		})
		it('should return false when passes 0.99', () => {
			assert.equal(isNegativeNumber(0.99), false);
		})
		it('should return false when passes 7/2', () => {
			assert.equal(isNegativeNumber((7 / 2)), false);
		})
		it('should return false when passes \'321.123\'', () => {
			assert.equal(isNegativeNumber('321.123'), false);
		})
		it('should return true when passes \'-321.\'', () => {
			assert.equal(isNegativeNumber('-321.'), true);
		})
		it('should return false when passes \'\'', () => {
			assert.equal(isNegativeNumber(''), false);
		})
		it('should return false when passes \'?\'', () => {
			assert.equal(isNegativeNumber('?'), false);
		})
		it('should return false when passes null', () => {
			assert.equal(isNegativeNumber(null), false);
		})
	})
})