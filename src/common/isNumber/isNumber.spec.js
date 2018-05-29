import { assert } from 'chai';
import isNumber from './isNumber';

describe('Regexer', () => {
	describe('isNumber()', () => {
		it('should return true when passes 43', () => {
			assert.equal(isNumber(43), true);
		})
		it('should return true when passes -21', () => {
			assert.equal(isNumber(-21), true);
		})
		it('should return true when passes 0', () => {
			assert.equal(isNumber(0), true);
		})
		it('should return true when passes 98.2', () => {
			assert.equal(isNumber(98.2), true);
		})
		it('should return true when passes 0.1', () => {
			assert.equal(isNumber(0.1), true);
		})
		it('should return true when passes 0.99', () => {
			assert.equal(isNumber(0.99), true);
		})
		it('should return true when passes 7/2', () => {
			assert.equal(isNumber((7 / 2)), true);
		})
		it('should return true when passes \'321.123\'', () => {
			assert.equal(isNumber('321.123'), true);
		})
		it('should return false when passes \'\'', () => {
			assert.equal(isNumber(''), false);
		})
		it('should return false when passes \'?\'', () => {
			assert.equal(isNumber('?'), false);
		})
		it('should return false when passes null', () => {
			assert.equal(isNumber(null), false);
		})
	})
})