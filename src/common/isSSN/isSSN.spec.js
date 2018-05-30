import { assert } from 'chai';
import isSSN from './isSSN';

describe('Regexer', () => {
	describe('isSSN()', () => {
		it('should return true when passes \'123456789\'', () => {
			assert.equal(isSSN('123456789'), true);
		})
		it('should return true when passes \'455-54-4545\'', () => {
			assert.equal(isSSN('455-54-4545'), true);
		})
		it('should return false when passes \'00-45-4545\'', () => {
			assert.equal(isSSN('00-45-4545'), false);
		})
		it('should return false when passes \'fdg-gf-oiio\'', () => {
			assert.equal(isSSN('fdg-gf-oiio'), false);
		})
		it('should return false when passes \'\'', () => {
			assert.equal(isSSN(''), false);
		})
		it('should return false when passes \'?\'', () => {
			assert.equal(isSSN('?'), false);
		})
		it('should return false when passes null', () => {
			assert.equal(isSSN(null), false);
		})
	})
})