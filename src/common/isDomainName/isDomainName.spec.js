import { assert } from 'chai';
import isDomainName from './isDomainName';

describe('Regexer', () => {
  describe('isDomainName()', () => {
    it('should return true when passes \'google.com\'', () => {
      assert.equal(isDomainName('google.com'), true);
    });
    it('should return true when passes \'www.yahoo.org\'', () => {
      assert.equal(isDomainName('www.yahoo.org'), true);
    });
    it('should return true when passes \'www.domain-name.org\'', () => {
      assert.equal(isDomainName('www.domain-name.org'), true);
    });
    it('should return true when passes \'www.MyDomainName.io\'', () => {
      assert.equal(isDomainName('www.MyDomainName.io'), true);
    });
    it('should return false when passes \'www.hello-world.COM\'', () => {
      assert.equal(isDomainName('www.hello-world.COM'), false);
    });
    it('should return false when passes \'www.whyME?.com\'', () => {
      assert.equal(isDomainName('www.whyME?.com'), false);
    });
    it('should return false when passes \'?\'', () => {
      assert.equal(isDomainName('?'), false);
    });
    it('should return false when passes null', () => {
      assert.equal(isDomainName(null), false);
    });
  });
});

