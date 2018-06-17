'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('./../../utils');

var isUSState = function isUSState(state) {
    return !(0, _utils.isUndefined)(state) && !(0, _utils.isNull)(state) && /^(Alabama)|(Alaska)|(Arizona)|(Arkansas)|(California)|(Colorado)|(Connecticut)|(Delaware)|(Florida)|(Georgia)|(Hawaii)|(Idaho)|(Illinois)|(Indiana)|(Iowa)|(Kansas)|(Kentucky)|(Louisiana)|(Maine)|(Maryland)|(Massachusetts)|(Michigan)|(Minnesota)|(Mississippi)|(Missouri)|(Montana)|(Nebraska)|(Nevada)|(New Hampshire)|(New Jersey)|(New Mexico)|(New York)|(North Carolina)|(North Dakota)|(Ohio)|(Oklahoma)|(Oregon)|(Pennsylvania)|(Rhode Island)|(South Carolina)|(South Dakota)|(Tennessee)|(Texas)|(Utah)|(Vermont)|(Virginia)|(Washington)|(West Virginia)|(Wisconsin)|(Wyoming)$/i.test(state);
};

exports.default = isUSState;