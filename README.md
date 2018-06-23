<h1 align="center">
  <br>
  <a href="https://github.com/npranto/regexer"><img src="./src/assets/images/R-logo.png" alt="Regexer" width="300"></a>
  <br>
    Regexer
  <br>
</h1>

[![NPM](https://nodei.co/npm/nsp-regexer.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/nsp-regexer/)

[![CircleCI](https://img.shields.io/circleci/project/github/npranto/regexer.svg?style=for-the-badge)](https://circleci.com/gh/npranto/regexer)
![npm](https://img.shields.io/npm/v/nsp-regexer.svg?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/nsp-regexer.svg?style=for-the-badge)
[![GitHub issues](https://img.shields.io/github/issues/npranto/regexer.svg?style=for-the-badge)](https://github.com/npranto/regexer/issues)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)](http://commitizen.github.io/cz-cli/)
[![GitHub license](https://img.shields.io/github/license/npranto/regexer.svg?style=for-the-badge)](https://github.com/npranto/regexer/blob/master/LICENSE)


<h4 align="left">
A simple and convenient library of functions that leverage regular expressions while hiding its complexity of implementation
</h4>

## Table of Contents
* [Why Regexer?](#why-regexer)
* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
    * [`.isCreditCard()`](#)
    * [`.isDayOfMonth()`](#)
    * [`.isDayOfWeekString()`](#)
    * [`.isDecimal()`](#)
    * [`.isEmail()`](#)
    * [`.isHexValue()`](#)
    * [`.isHTMLTag()`](#)
    * [`.isInteger()`](#)
    * [`.isIPAddressV4()`](#)
    * [`.isLetter()`](#)
    * [`.isLowerCase()`](#)
    * [`.isMonthOfYear()`](#)
    * [`.isMonthOfYearString()`](#)
    * [`.isNegativeInteger()`](#)
    * [`.isNegativeNumber()`](#)
    * [`.isNumber()`](#)
    * [`.isPassword()`](#)
    * [`.isPositiveInteger()`](#)
    * [`.isPositiveNumber()`](#)
    * [`.isSSN()`](#)
    * [`.isStandardZipCode()`](#)
    * [`.isUpperCase()`](#)
    * [`.isUrl()`](#)
    * [`.isUsername()`](#)
    * [`.isUSPhoneNumber()`](#)
    * [`.isUSState()`](#)    
    * [`.isVowel()`](#)
    * [`.isYear()`](#)

* [Credits](#credits)
* [Support](#support)
* [You May Also Like](#you-may-also-like)
* [License](#license)
* [Authors](#authors)

## Why Regexer?

Regular expressions are awesome and absolutely super useful when it comes to looking for pattern matches in a string, but clearly it is not the easiest topic to get your head around. Don't believe me, [just take a look](https://www.quora.com/What-is-the-most-weird-regular-expression-line-you-have-ever-seen)!

Regexer just attempts to make the process of using some of the most popular regular expressions easier for you. You no longer need to look all over the place for finding a regular expression for matching an email or a phone number, or a hex value or even a day of the week. Just install regexer and use the built in common functions to verify candidate values.

Still confused...? Let's look at an **[example](#usage)**

## Installation
Before we get going, make sure you have [Node.js](https://nodejs.org/en/) installed on your system, so we can use the NPM (Node Package Manager) to install regexer on your project.
<br />
```
$ npm install --save nsp-regexer
```

## Usage

```js
// ES5
const regexer = require('nsp-regexer');

console.log( regexer.isEmail('jsmith@gmail.com') )  // true
console.log( regexer.isLowerCase('KEVIN') )     // false
```
```js
// ES6+
import { isVowel, isNegativeNumber } from 'nsp-regexer';

console.log( isVowel('b') )  // false
console.log( isNegativeNumber(-50.67) )  // true
```

## API

### `.isCreditCard(data[string|number])`

Returns `true` if data is a valid credit card number, otherwise returns `false`

```js
import { isCreditCard } from 'nsp-regexer';

isCreditCard('345768475867474')  
// true

isCreditCard(5465838563658274)  
// true

isCreditCard('?')  
// false
```

### `.isDayOfMonth(data[string|number])`

Returns `true` if it is a day of the month (1-31), otherwise returns `false`

```js
import { isDayOfMonth } from 'nsp-regexer';

isDayOfMonth('28')  
// true

isDayOfMonth(12)  
// true

isDayOfMonth(55)  
// false
```

*Obviously, more to come soon...*

## Credits

Source code makes use of several open source packages, a few keys ones include...

- [Babel](https://babeljs.io/) - To transpile ES6+ syntax to ES5, to run source code in Node and browser
- [Webpack](https://webpack.js.org/) - For module bundling and generating distributing assets
- [ESLint](https://eslint.org/) - To lint source code for better readability, syntax consistency and proper formatting
- [CircleCI](https://circleci.com/) - Continuous integration middleware to verify incremental builds are always passing

## Support

<a href="https://www.buymeacoffee.com/nsplovescoffee" target="_blank">
  <img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" >
</a>

## You May Also Like...

- [focus](https://github.com/npranto/focus) - A simple, elegant task manager application to help students and computer savvy workers get their work done efficiently and on time
- [lists](https://github.com/npranto/lists) - Quickly draught down your todos, groceries, chores or any other lists of items quickly #powerOfLists

## License

[MIT](https://tldrlegal.com/license/mit-license)

## Contributors

<div>
  <a href="https://github.com/npranto">
    <img src="https://avatars2.githubusercontent.com/u/13524077?v=4" alt="Nazmuz Shakib pranto" width="50" />
  </a>
</div>
