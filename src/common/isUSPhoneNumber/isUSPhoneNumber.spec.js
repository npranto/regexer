import { assert } from 'chai';
import isUSPhoneNumber from './isUSPhoneNumber';

describe('Regexer', () => {
	describe('isUSPhoneNumber()', () => {
		it('should return true when passes \'6174330080\'', () => {
			assert.equal(isUSPhoneNumber('6174330080'), true);
		})
		it('should return true when passes \'(617) 433-0080\'', () => {
			assert.equal(isUSPhoneNumber('(617) 433-0080'), true);
		})
		it('should return true when passes \'(617)433-0080\'', () => {
			assert.equal(isUSPhoneNumber('(617)433-0080'), true);
		})
		it('should return true when passes \'617.433.0080\'', () => {
			assert.equal(isUSPhoneNumber('617.433.0080'), true);
		})
		it('should return true when passes \'617-433-0080\'', () => {
			assert.equal(isUSPhoneNumber('617-433-0080'), true);
		})
		it('should return true when passes \'617 433 0080\'', () => {
			assert.equal(isUSPhoneNumber('617 433 0080'), true);
		})
		it('should return false when passes \'16174330080\'', () => {
			assert.equal(isUSPhoneNumber('16174330080'), false);
		})
		it('should return false when passes \'+16174330080\'', () => {
			assert.equal(isUSPhoneNumber('+16174330080'), false);
		})
		it('should return false when passes \'61743300800\'', () => {
			assert.equal(isUSPhoneNumber('61743300800'), false);
		})
		it('should return false when passes \'\'', () => {
			assert.equal(isUSPhoneNumber(''), false);
		})
		it('should return false when passes \'?\'', () => {
			assert.equal(isUSPhoneNumber('?'), false);
		})
		it('should return false when passes null', () => {
			assert.equal(isUSPhoneNumber(null), false);
		})
	})
})