const chai = require('chai');
const { assert } = chai;
const isEmail = require('./isEmail');

describe('Regexer', () => {
  describe('isEmail()', () => {
    it('should return true when passed \'npranto@gmail.com\'', () => {
			assert.equal(isEmail('npranto@gmail.com'), true);
		});
		it('should return false when passed \'npranto@gmail\'', () => {
			assert.equal(isEmail('npranto@gmail'), false);
		});
		it('should return false when passed \'nprantogmail.com\'', () => {
			assert.equal(isEmail('nprantogmail.com'), false);
		});
		it('should return true when passed \'npranto@123gmail.co\'', () => {
			assert.equal(isEmail('npranto@123gmail.co'), true);
		});
  });
});