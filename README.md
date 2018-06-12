<h1 align="center">
  <br>
  <a href="https://github.com/npranto/regexer"><img src="./src/assets/images/R-logo.png" alt="Regexer" width="200"></a>
  <br>
  Regexer
  <br>
</h1>

<h4 align="center">
[![CircleCI](https://img.shields.io/circleci/project/github/npranto/regexer.svg?style=for-the-badge)](https://circleci.com/gh/npranto/regexer)
[![GitHub issues](https://img.shields.io/github/issues/npranto/regexer.svg?style=for-the-badge)](https://github.com/npranto/regexer/issues)
[![GitHub license](https://img.shields.io/github/license/npranto/regexer.svg?style=for-the-badge)](https://github.com/npranto/regexer/blob/master/LICENSE)

A simple and convenient library of functions that leverages regular expressions while hiding its complexity of implementation
</h4>

## Table of Contents

* [Why Regexer?](#why-regexer)
* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
    * [`.isDayOfMonth()`](#)
    * [`.isDayOfWeekString()`](#)
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
    * [`.isNgeativeNumber()`](#)
    * [`.isNumber()`](#)
    * [`.isPassword()`](#)
    * [`.isPositiveInteger()`](#)
    * [`.isPositiveNumber()`](#)
    * [`.isSSN()`](#)
    * [`.isUpperCase()`](#)
    * [`.isUrl()`](#)
    * [`.isUsername()`](#)
    * [`.isUSPhoneNumber()`](#)
    * [`.isVowel()`](#)
    * [`.isYear()`](#)

* [Credits](#credits)
* [Support](#support)
* [You May Also Like](#you-may-also-like)
* [License](#license)
* [Authors](#authors)

<div align="center">
	<img src="https://media.giphy.com/media/3o6MbhbYBsqTrbP2qQ/giphy.gif" alt="Screenshot" />
</div>

## Why Regexer?

Regular expressions are awesome and absolutely super useful when it comes to looking for pattern matches in a string, but clearly it is not the easiliest topic to get your hand around. Don't believe me, [just take a look](https://www.quora.com/What-is-the-most-weird-regular-expression-line-you-have-ever-seen)! 
<br />
Regexer just attempts to make the process of using some of the most popular regular expressions easier for you. You no longer need to look all over the place for finding a regular expression for matching an email or a phone number, or a hex value or even a day of the week. Just install regexer and use the built in common functions to verify candidate values. Still confused...? Let's take a look at an [example](#usage)

## Installation
Before we get going, make sure you have [Node.js](https://nodejs.org/en/) installed on your system, so we can use the NPM (Node Package Manager) to install regexer on your project. 
<br />
```
$ npm install --save nsp-regexer
``` 

## Usage

```js
# ES5
const regexer = require('nsp-regexer');
console.log( regexer.isEmail('jsmith@gmail.com') )  // true
console.log( regexer.isLowerCase('KEVIN') )     // false
```
```js
# ES6+
import { isVowel, isNegativeNumber } from 'nsp-regexer';
console.log( isVowel('b') )  // false
console.log( isNegativeNumber(-50.67) )  // true
```

## Credits

Source code makes use of several open source packages, a few keys ones include...

- [Babel](https://babeljs.io/) - To transpile ES6+ syntax to ES5, to run source code in Node and browser
- [Webpack](https://webpack.js.org/) - For module bundling and generating distributing assets
- [ESLint](https://eslint.org/) - To lint source code for better readability, syntax consistency and proper formatting
- [CircleCI](https://circleci.com/) - Continuous integration middleware to verify incremental builds are always passing
- [Flow](https://flow.org/) - Adds static type checking in codebase


## Support

<a href="https://www.buymeacoffee.com/nsplovescoffee" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## You May Also Like...

- [focus](https://github.com/npranto/focus) - A simple, elegant task manager application to help students and computer savvy workers get their work done efficiently and on time
- [lists](https://github.com/npranto/lists) - Quickly draught down your todos, groceries, chores or any other lists of items quickly #powerOfLists

## License

[MIT](https://tldrlegal.com/license/mit-license)

## Authors

* **Nazmuz Shakib Pranto** [[GitHub](https://github.com/npranto) | [LinkedIn](https://www.linkedin.com/in/npranto/)]
