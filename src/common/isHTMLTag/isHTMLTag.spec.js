import { assert } from 'chai';
import isHTMLTag from './isHTMLTag';

describe('Regexer', () => {
  describe('isHTMLTag()', () => {
    it('should return true when passed \'<img src="./img/cat.png" />\'', () => {
      assert.equal(isHTMLTag('<img src="./img/cat.png" />'), true);
		});
		it('should return true when passed \'<body>\'', () => {
      assert.equal(isHTMLTag('<body>'), false);
    });
    it('should return false when passed \'<h1> Hello World <h1>\'', () => {
      assert.equal(isHTMLTag('<h1> Hello World <h1>'), false);
    });
    it('should return false when passed \'\'', () => {
      assert.equal(isHTMLTag(''), false);
    });
    it('should return true when passed \'<h1 class="center"> Hello World! </h1>\'', () => {
      assert.equal(isHTMLTag('<h1 class="center"> Hello World! </h1>'), true);
		});
		it('should return false when passed null', () => {
      assert.equal(isHTMLTag(null), false);
    });
  });
});
