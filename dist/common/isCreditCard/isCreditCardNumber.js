'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../../utils');

var isCreditCardNumber = function isCreditCardNumber(creditCardNumber) {
  return !(0, _utils.isUndefined)(creditCardNumber) && !(0, _utils.isNull)(creditCardNumber) && /^(3[47]\d{13})|(30[0123456]\d{11})|(54\d{14})|(6(?:011\d{12}|5\d{14}|4[4-9]\d{13}|22(?:1(?:2[6-9]|[3-9]\d)|[2-8]\d{2}|9(?:[01]\d|2[0-5]))\d{10})|(63[7-9]\d{13})|(35(2([89])|([3-8]\d))\d{12})|(((5018)|(5020)|(5038)|(5893)|(6304)|(6759)|(676[1-3]))\d{12})|((?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12})|(54\d{14})|(((4026)|(4508)|(4844)|(4913)|(4917))\d{12}|417500\d{10})|(62\d{14})|(4\d{15}))$/.test(creditCardNumber);
};

exports.default = isCreditCardNumber;