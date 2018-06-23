import { assert } from 'chai';
import isUSStateAbbr from './isUSStateAbbr';

describe('Regexer', () => {
  describe('isUSStateAbbr()', () => {
    it('should return true when passed \'AK\'', () => {
			assert.equal(isUSStateAbbr('AK'), true);
		});
		it('should return true when passed \'AL\'', () => {
			assert.equal(isUSStateAbbr('AL'), true);
		});
		it('should return true when passed \'AR\'', () => {
			assert.equal(isUSStateAbbr('AR'), true);
		});
		it('should return true when passed \'AZ\'', () => {
			assert.equal(isUSStateAbbr('AZ'), true);
		});
		it('should return true when passed \'CA\'', () => {
			assert.equal(isUSStateAbbr('CA'), true);
		});
		it('should return true when passed \'CO\'', () => {
			assert.equal(isUSStateAbbr('CO'), true);
		});
		it('should return true when passed \'CT\'', () => {
			assert.equal(isUSStateAbbr('CT'), true);
		});
		it('should return true when passed \'DC\'', () => {
			assert.equal(isUSStateAbbr('DC'), true);
		});
		it('should return true when passed \'DE\'', () => {
			assert.equal(isUSStateAbbr('DE'), true);
		});
		it('should return true when passed \'FL\'', () => {
			assert.equal(isUSStateAbbr('FL'), true);
		});
		it('should return true when passed \'GA\'', () => {
			assert.equal(isUSStateAbbr('GA'), true);
		});
		it('should return true when passed \'HI\'', () => {
			assert.equal(isUSStateAbbr('HI'), true);
		});
		it('should return true when passed \'IA\'', () => {
			assert.equal(isUSStateAbbr('IA'), true);
		});
		it('should return true when passed \'ID\'', () => {
			assert.equal(isUSStateAbbr('ID'), true);
		});
		it('should return true when passed \'IL\'', () => {
			assert.equal(isUSStateAbbr('IL'), true);
		});
		it('should return true when passed \'IN\'', () => {
			assert.equal(isUSStateAbbr('IN'), true);
		});
		it('should return true when passed \'KS\'', () => {
			assert.equal(isUSStateAbbr('KS'), true);
		});
		it('should return true when passed \'KY\'', () => {
			assert.equal(isUSStateAbbr('KY'), true);
		});
		it('should return true when passed \'LA\'', () => {
			assert.equal(isUSStateAbbr('LA'), true);
		});
		it('should return true when passed \'MA\'', () => {
			assert.equal(isUSStateAbbr('MA'), true);
		});
		it('should return true when passed \'MD\'', () => {
			assert.equal(isUSStateAbbr('MD'), true);
		});
		it('should return true when passed \'ME\'', () => {
			assert.equal(isUSStateAbbr('ME'), true);
		});
		it('should return true when passed \'MI\'', () => {
			assert.equal(isUSStateAbbr('MI'), true);
		});
		it('should return true when passed \'MN\'', () => {
			assert.equal(isUSStateAbbr('MN'), true);
		});
		it('should return true when passed \'MO\'', () => {
			assert.equal(isUSStateAbbr('MO'), true);
		});
		it('should return true when passed \'MS\'', () => {
			assert.equal(isUSStateAbbr('MS'), true);
		});
		it('should return true when passed \'MT\'', () => {
			assert.equal(isUSStateAbbr('MT'), true);
		});
		it('should return true when passed \'NC\'', () => {
			assert.equal(isUSStateAbbr('NC'), true);
		});
		it('should return true when passed \'ND\'', () => {
			assert.equal(isUSStateAbbr('ND'), true);
		});
		it('should return true when passed \'NE\'', () => {
			assert.equal(isUSStateAbbr('NE'), true);
		});
		it('should return true when passed \'NH\'', () => {
			assert.equal(isUSStateAbbr('NH'), true);
		});
		it('should return true when passed \'NJ\'', () => {
			assert.equal(isUSStateAbbr('NJ'), true);
		});
		it('should return true when passed \'NM\'', () => {
			assert.equal(isUSStateAbbr('NM'), true);
		});
		it('should return true when passed \'NV\'', () => {
			assert.equal(isUSStateAbbr('NV'), true);
		});
		it('should return true when passed \'NY\'', () => {
			assert.equal(isUSStateAbbr('NY'), true);
		});
		it('should return true when passed \'OH\'', () => {
			assert.equal(isUSStateAbbr('OH'), true);
		});
		it('should return true when passed \'OK\'', () => {
			assert.equal(isUSStateAbbr('OK'), true);
		});
		it('should return true when passed \'OR\'', () => {
			assert.equal(isUSStateAbbr('OR'), true);
		});
		it('should return true when passed \'PA\'', () => {
			assert.equal(isUSStateAbbr('PA'), true);
		});
		it('should return true when passed \'RI\'', () => {
			assert.equal(isUSStateAbbr('RI'), true);
		});
		it('should return true when passed \'SC\'', () => {
			assert.equal(isUSStateAbbr('SC'), true);
		});
		it('should return true when passed \'SD\'', () => {
			assert.equal(isUSStateAbbr('SD'), true);
		});
		it('should return true when passed \'TN\'', () => {
			assert.equal(isUSStateAbbr('TN'), true);
		});
		it('should return true when passed \'TX\'', () => {
			assert.equal(isUSStateAbbr('TX'), true);
		});
		it('should return true when passed \'UT\'', () => {
			assert.equal(isUSStateAbbr('UT'), true);
		});
		it('should return true when passed \'VA\'', () => {
			assert.equal(isUSStateAbbr('VA'), true);
		});
		it('should return true when passed \'VT\'', () => {
			assert.equal(isUSStateAbbr('VT'), true);
		});
		it('should return true when passed \'WA\'', () => {
			assert.equal(isUSStateAbbr('WA'), true);
		});
		it('should return true when passed \'WI\'', () => {
			assert.equal(isUSStateAbbr('WI'), true);
		});
		it('should return true when passed \'WV\'', () => {
			assert.equal(isUSStateAbbr('WV'), true);
		});
		it('should return true when passed \'WY\'', () => {
			assert.equal(isUSStateAbbr('WY'), true);
		});
		it('should return false when passed \'Wyominga\'', () => {
			assert.equal(isUSStateAbbr('Wyominga'), false);
		});
		it('should return false when passed \'America\'', () => {
			assert.equal(isUSStateAbbr('America'), false);
		});
		it('should return false when passed \'new york\'', () => {
			assert.equal(isUSStateAbbr('new york'), false);
		});
		it('should return false when passed \'Paris\'', () => {
			assert.equal(isUSStateAbbr('Paris'), false);
		});
		it('should return false when passed -34', () => {
			assert.equal(isUSStateAbbr(-34), false);
		});
		it('should return false when passed \'\'', () => {
			assert.equal(isUSStateAbbr(''), false);
		});
		it('should return false when passed null', () => {
			assert.equal(isUSStateAbbr(null), false);
		});
  });
});
