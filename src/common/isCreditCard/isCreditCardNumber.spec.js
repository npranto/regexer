import { assert } from 'chai';
import isCreditCardNumber from './isCreditCardNumber';

describe('Regexer', () => {
  describe('isCreditCardNumber()', () => {
    it('should return true when passes 0', () => {
      assert.equal(isCreditCardNumber(0), false);
    });
    it('should return true when passes 345768475867474', () => {
      assert.equal(isCreditCardNumber(345768475867474), true);
    });
    it('should return true when passes 375768475867474', () => {
      assert.equal(isCreditCardNumber(375768475867474), true);
    });
    it('should return true when passes 30065849264810', () => {
      assert.equal(isCreditCardNumber(30065849264810), true);
    });
    it('should return true when passes 30165849264810', () => {
      assert.equal(isCreditCardNumber(30165849264810), true);
    });
    it('should return true when passes 30265849264810', () => {
      assert.equal(isCreditCardNumber(30265849264810), true);
    });
    it('should return true when passes 30365849264810', () => {
      assert.equal(isCreditCardNumber(30365849264810), true);
    });
    it('should return true when passes 30465849264810', () => {
      assert.equal(isCreditCardNumber(30465849264810), true);
    });
    it('should return true when passes 30565849264810', () => {
      assert.equal(isCreditCardNumber(30565849264810), true);
    });
    it('should return true when passes 30665849264810', () => {
      assert.equal(isCreditCardNumber(30665849264810), true);
    });
    it('should return true when passes 5465838563658274', () => {
      assert.equal(isCreditCardNumber(5465838563658274), true);
    });
    it('should return true when passes 6011666666666666', () => {
      assert.equal(isCreditCardNumber(6011666666666666), true);
    });
    it('should return true when passes 6446666666666666', () => {
      assert.equal(isCreditCardNumber(6446666666666666), true);
    });
    it('should return true when passes 6456666666666666', () => {
      assert.equal(isCreditCardNumber(6456666666666666), true);
    });
    it('should return true when passes 6466666666666666', () => {
      assert.equal(isCreditCardNumber(6466666666666666), true);
    });
    it('should return true when passes 6476666666666666', () => {
      assert.equal(isCreditCardNumber(6476666666666666), true);
    });
    it('should return true when passes 6486666666666666', () => {
      assert.equal(isCreditCardNumber(6486666666666666), true);
    });
    it('should return true when passes 6496666666666666', () => {
      assert.equal(isCreditCardNumber(6496666666666666), true);
    });
    it('should return true when passes 6566666666666665', () => {
      assert.equal(isCreditCardNumber(6566666666666665), true);
    });
    it('should return true when passes 6221263524660820', () => {
      assert.equal(isCreditCardNumber(6221263524660820), true);
    });
    it('should return true when passes 6221265612307271', () => {
      assert.equal(isCreditCardNumber(6221265612307271), true);
    });
    it('should return true when passes 6221266746774543', () => {
      assert.equal(isCreditCardNumber(6221266746774543), true);
    });
    it('should return true when passes 6221261475756845', () => {
      assert.equal(isCreditCardNumber(6221261475756845), true);
    });
    it('should return true when passes 6221264448556250', () => {
      assert.equal(isCreditCardNumber(6221264448556250), true);
    });
    it('should return true when passes 6221266577468231', () => {
      assert.equal(isCreditCardNumber(6221266577468231), true);
    });
    it('should return true when passes 6221263147160307', () => {
      assert.equal(isCreditCardNumber(6221263147160307), true);
    });
    it('should return true when passes 6221268527241486', () => {
      assert.equal(isCreditCardNumber(6221268527241486), true);
    });
    it('should return true when passes 6221264566781250', () => {
      assert.equal(isCreditCardNumber(6221264566781250), true);
    });
    it('should return true when passes 6221261526554363', () => {
      assert.equal(isCreditCardNumber(6221261526554363), true);
    });
    it('should return true when passes 6229253401434268', () => {
      assert.equal(isCreditCardNumber(6229253401434268), true);
    });
    it('should return true when passes 6376464646464646', () => {
      assert.equal(isCreditCardNumber(6376464646464646), true);
    });
    it('should return true when passes 6386464646464646', () => {
      assert.equal(isCreditCardNumber(6386464646464646), true);
    });
    it('should return true when passes 6396464646464646', () => {
      assert.equal(isCreditCardNumber(6396464646464646), true);
    });
    it('should return true when passes 3528777777777777', () => {
      assert.equal(isCreditCardNumber(3528777777777777), true);
    });
    it('should return true when passes 3533777777777777', () => {
      assert.equal(isCreditCardNumber(3533777777777777), true);
    });
    it('should return true when passes 3586777777777777', () => {
      assert.equal(isCreditCardNumber(3586777777777777), true);
    });
    it('should return true when passes 3589777777777777', () => {
      assert.equal(isCreditCardNumber(3589777777777777), true);
    });
    it('should return true when passes 5018666666666666', () => {
      assert.equal(isCreditCardNumber(5018666666666666), true);
    });
    it('should return true when passes 5020777777777776', () => {
      assert.equal(isCreditCardNumber(5020777777777776), true);
    });
    it('should return true when passes 5038777777777777', () => {
      assert.equal(isCreditCardNumber(5038777777777777), true);
    });
    it('should return true when passes 5893456456464565', () => {
      assert.equal(isCreditCardNumber(5893456456464565), true);
    });
    it('should return true when passes 6304546456456465', () => {
      assert.equal(isCreditCardNumber(6304546456456465), true);
    });
    it('should return true when passes 6759546456456456', () => {
      assert.equal(isCreditCardNumber(6759546456456456), true);
    });
    it('should return true when passes 6761564564565466', () => {
      assert.equal(isCreditCardNumber(6761564564565466), true);
    });
    it('should return true when passes 6762736457834686', () => {
      assert.equal(isCreditCardNumber(6762736457834686), true);
    });
    it('should return true when passes 6763666666666666', () => {
      assert.equal(isCreditCardNumber(6763666666666666), true);
    });
    it('should return true when passes 2221006666666666', () => {
      assert.equal(isCreditCardNumber(2221006666666666), true);
    });
    it('should return true when passes 2720996666666666', () => {
      assert.equal(isCreditCardNumber(2720996666666666), true);
    });
    it('should return true when passes 2620996666666666', () => {
      assert.equal(isCreditCardNumber(2620996666666666), true);
    });
    it('should return true when passes 5166666666666666', () => {
      assert.equal(isCreditCardNumber(5166666666666666), true);
    });
    it('should return true when passes 5566666666666666', () => {
      assert.equal(isCreditCardNumber(5566666666666666), true);
    });
    it('should return true when passes 5266666666666666', () => {
      assert.equal(isCreditCardNumber(5266666666666666), true);
    });
    it('should return true when passes 5465656565656565', () => {
      assert.equal(isCreditCardNumber(5465656565656565), true);
    });
    it('should return true when passes 4026564564566646', () => {
      assert.equal(isCreditCardNumber(4026564564566646), true);
    });
    it('should return true when passes 4175005464565466', () => {
      assert.equal(isCreditCardNumber(4175005464565466), true);
    });
    it('should return true when passes 4508456456456546', () => {
      assert.equal(isCreditCardNumber(4508456456456546), true);
    });
    it('should return true when passes 4844546756786887', () => {
      assert.equal(isCreditCardNumber(4844546756786887), true);
    });
    it('should return true when passes 4913534534565657', () => {
      assert.equal(isCreditCardNumber(4913534534565657), true);
    });
    it('should return true when passes 4917782658876256', () => {
      assert.equal(isCreditCardNumber(4917782658876256), true);
    });
    it('should return true when passes 6277777777777777', () => {
      assert.equal(isCreditCardNumber(6277777777777777), true);
    });
    it('should return true when passes 4000000000000000', () => {
      assert.equal(isCreditCardNumber(4000000000000000), true);
    });
    it('should return false when passes \'\'', () => {
      assert.equal(isCreditCardNumber(''), false);
    });
    it('should return false when passes \'?\'', () => {
      assert.equal(isCreditCardNumber('?'), false);
    });
    it('should return false when passes null', () => {
      assert.equal(isCreditCardNumber(null), false);
    });
  });
});

