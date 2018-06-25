import { assert } from 'chai';
import isUUID from './isUUID';

describe('Regexer', () => {
  describe('isUUID()', () => {
    it('should return true when passed \'aafac29e-5816-4904-87ef-3eb5151e0c9a\'', () => {
      assert.equal(isUUID('aafac29e-5816-4904-87ef-3eb5151e0c9a'), true);
    });
    it('should return true when passed \'3a89b2d2-7c39-44ca-8d3a-49d6238b80c4\'', () => {
      assert.equal(isUUID('3a89b2d2-7c39-44ca-8d3a-49d6238b80c4'), true);
    });
    it('should return true when passed \'600801da-78d1-11e8-adc0-fa7ae01bbebc\'', () => {
      assert.equal(isUUID('600801da-78d1-11e8-adc0-fa7ae01bbebc'), true);
    });
    it('should return true when passed \'66b9bb40-78d1-11e8-adc0-fa7ae01bbebc\'', () => {
      assert.equal(isUUID('66b9bb40-78d1-11e8-adc0-fa7ae01bbebc'), true);
    });
    it('should return true when passed \'c84e74fb-13af-4e95-b84b-febba7100e5a\'', () => {
      assert.equal(isUUID('c84e74fb-13af-4e95-b84b-febba7100e5a'), true);
    });
    it('should return false when passed \'sbfj&&#\'', () => {
      assert.equal(isUUID('sbfj&&#'), false);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isUUID(''), false);
    });
    it('should return false when passed \'NS-pranto_236\'', () => {
      assert.equal(isUUID('NS-pranto_236'), false);
    });
    it('should return false when passed null', () => {
      assert.equal(isUUID(null), false);
    });
    it('should return false when passed nothing', () => {
      assert.equal(isUUID(), false);
    });
  });
});



