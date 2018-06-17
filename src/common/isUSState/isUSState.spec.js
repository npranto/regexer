import { assert } from 'chai';
import isUSState from './isUSState';

describe('Regexer', () => {
  describe('isUSState()', () => {
    it('should return true when passed \'Alabama\'', () => {
      assert.equal(isUSState('Alabama'), true);
    });
    it('should return true when passed \'Alaska\'', () => {
      assert.equal(isUSState('Alaska'), true);
    });
    it('should return true when passed \'Arizona\'', () => {
      assert.equal(isUSState('Arizona'), true);
    });
    it('should return true when passed \'Arkansas\'', () => {
      assert.equal(isUSState('Arkansas'), true);
    });
    it('should return true when passed \'California\'', () => {
      assert.equal(isUSState('California'), true);
    });
    it('should return true when passed \'Colorado\'', () => {
      assert.equal(isUSState('Colorado'), true);
    });
    it('should return true when passed \'Connecticut\'', () => {
      assert.equal(isUSState('Connecticut'), true);
    });
    it('should return true when passed \'Delaware\'', () => {
      assert.equal(isUSState('Delaware'), true);
    });
    it('should return true when passed \'Florida\'', () => {
      assert.equal(isUSState('Florida'), true);
    });
    it('should return true when passed \'Georgia\'', () => {
      assert.equal(isUSState('Georgia'), true);
    });
    it('should return true when passed \'Hawaii\'', () => {
      assert.equal(isUSState('Hawaii'), true);
    });
    it('should return true when passed \'Idaho\'', () => {
      assert.equal(isUSState('Idaho'), true);
    });
    it('should return true when passed \'Illinois\'', () => {
      assert.equal(isUSState('Illinois'), true);
    });
    it('should return true when passed \'Indiana\'', () => {
      assert.equal(isUSState('Indiana'), true);
    });
    it('should return true when passed \'Iowa\'', () => {
      assert.equal(isUSState('Iowa'), true);
    });
    it('should return true when passed \'Kansas\'', () => {
      assert.equal(isUSState('Kansas'), true);
    });
    it('should return true when passed \'Kentucky\'', () => {
      assert.equal(isUSState('Kentucky'), true);
    });
    it('should return true when passed \'Louisiana\'', () => {
      assert.equal(isUSState('Louisiana'), true);
    });
    it('should return true when passed \'Maine\'', () => {
      assert.equal(isUSState('Maine'), true);
    });
    it('should return true when passed \'Maryland\'', () => {
      assert.equal(isUSState('Maryland'), true);
    });
    it('should return true when passed \'Massachusetts\'', () => {
      assert.equal(isUSState('Massachusetts'), true);
    });
    it('should return true when passed \'Michigan\'', () => {
      assert.equal(isUSState('Michigan'), true);
    });
    it('should return true when passed \'Minnesota\'', () => {
      assert.equal(isUSState('Minnesota'), true);
    });
    it('should return true when passed \'Mississippi\'', () => {
      assert.equal(isUSState('Mississippi'), true);
    });
    it('should return true when passed \'Missouri\'', () => {
      assert.equal(isUSState('Missouri'), true);
    });
    it('should return true when passed \'Montana\'', () => {
      assert.equal(isUSState('Montana'), true);
    });
    it('should return true when passed \'Nebraska\'', () => {
      assert.equal(isUSState('Nebraska'), true);
    });
    it('should return true when passed \'Nevada\'', () => {
      assert.equal(isUSState('Nevada'), true);
    });
    it('should return true when passed \'New Hampshire\'', () => {
      assert.equal(isUSState('New Hampshire'), true);
    });
    it('should return true when passed \'New Jersey\'', () => {
      assert.equal(isUSState('New Jersey'), true);
    });
    it('should return true when passed \'New Mexico\'', () => {
      assert.equal(isUSState('New Mexico'), true);
    });
    it('should return true when passed \'New York\'', () => {
      assert.equal(isUSState('New York'), true);
    });
    it('should return true when passed \'North Carolina\'', () => {
      assert.equal(isUSState('North Carolina'), true);
    });
    it('should return true when passed \'North Dakota\'', () => {
      assert.equal(isUSState('North Dakota'), true);
    });
    it('should return true when passed \'Ohio\'', () => {
      assert.equal(isUSState('Ohio'), true);
    });
    it('should return true when passed \'Oklahoma\'', () => {
      assert.equal(isUSState('Oklahoma'), true);
    });
    it('should return true when passed \'Oregon\'', () => {
      assert.equal(isUSState('Oregon'), true);
    });
    it('should return true when passed \'Pennsylvania\'', () => {
      assert.equal(isUSState('Pennsylvania'), true);
    });
    it('should return true when passed \'Rhode Island\'', () => {
      assert.equal(isUSState('Rhode Island'), true);
    });
    it('should return true when passed \'South Carolina\'', () => {
      assert.equal(isUSState('South Carolina'), true);
    });
    it('should return true when passed \'South Dakota\'', () => {
      assert.equal(isUSState('South Dakota'), true);
    });
    it('should return true when passed \'Tennessee\'', () => {
      assert.equal(isUSState('Tennessee'), true);
    });
    it('should return true when passed \'Texas\'', () => {
      assert.equal(isUSState('Texas'), true);
    });
    it('should return true when passed \'Utah\'', () => {
      assert.equal(isUSState('Utah'), true);
    });
    it('should return true when passed \'Vermont\'', () => {
      assert.equal(isUSState('Vermont'), true);
    });
    it('should return true when passed \'Virginia\'', () => {
      assert.equal(isUSState('Virginia'), true);
    });
    it('should return true when passed \'Washington\'', () => {
      assert.equal(isUSState('Washington'), true);
    });
    it('should return true when passed \'West Virginia\'', () => {
      assert.equal(isUSState('West Virginia'), true);
    });
    it('should return true when passed \'Wisconsin\'', () => {
      assert.equal(isUSState('Wisconsin'), true);
    });
    it('should return true when passed \'Wyoming\'', () => {
      assert.equal(isUSState('Wyoming'), true);
    });
    it('should return false when passed \'Wyominga\'', () => {
      assert.equal(isUSState('Wyominga'), false);
    });
    it('should return false when passed \'America\'', () => {
      assert.equal(isUSState('America'), false);
    });
    it('should return true when passed \'new york\'', () => {
      assert.equal(isUSState('new york'), true);
    });
    it('should return false when passed \'Paris\'', () => {
      assert.equal(isUSState('Paris'), false);
    });
    it('should return false when passed -34', () => {
      assert.equal(isUSState(-34), false);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isUSState(''), false);
    });
    it('should return false when passed null', () => {
      assert.equal(isUSState(null), false);
    });
  });
});
