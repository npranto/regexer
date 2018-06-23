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
    * [`.isCreditCard()`](#iscreditcardcreditcardnumbernumberstring)
    * [`.isDayOfMonth()`](#isdayofmonthdaynumberstring)
    * [`.isDayOfWeekString()`](#isdayofweekstringdaynumberstring)
    * [`.isDecimal()`](#isdecimalnumbernumberstring)
    * [`.isEmail()`](#isemailemailstring)
    * [`.isHexValue()`](#ishexvaluehexvaluestring)
    * [`.isHTMLTag()`](#ishtmltaghtmltagstring)
    * [`.isInteger()`](#isintegerintegernumberstring)
    * [`.isIPAddressV4()`](#isipaddressv4ipaddressstring)
    * [`.isLetter()`](#islettercharstring)
    * [`.isLowerCase()`](#islowercasestrstring)
    * [`.isMonthOfYear()`](#ismonthofyearnumbernumberstring)
    * [`.isMonthOfYearString()`](#ismonthofyearstringmonthstring)
    * [`.isNegativeInteger()`](#isnegativeintegerintegernumberstring)
    * [`.isNegativeNumber()`](#isnegativenumbernumbernumberstring)
    * [`.isNumber()`](#isnumbernumbernumberstring)
    * [`.isPassword()`](#ispasswordpasswordstring)
    * [`.isPositiveInteger()`](#ispositiveintegerintegernumberstring)
    * [`.isPositiveNumber()`](#ispositivenumbernumbernumberstring)
    * [`.isSSN()`](#isssnnumberstring)
    * [`.isStandardZipCode()`](#isstandardzipcodezipcodestring)
    * [`.isUpperCase()`](#isuppercasestrstring)
    * [`.isUrl()`](#isurlurlstring)
    * [`.isUsername()`](#isusernameusernamestring)
    * [`.isUSPhoneNumber()`](#isusphonenumberphonenumberstring)
    * [`.isUSState()`](#isusstatestatestring)    
    * [`.isVowel()`](#isvowelcharstring)
		* [`.isWhiteSpace()`](#iswhitespacecharstring)
    * [`.isYear()`](#isyearnumbernumberstring)

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

### `.isCreditCard(creditCardNumber[number|string])`

Returns `true` if creditCardNumber is a valid credit card number, otherwise returns `false`

```js
import { isCreditCard } from 'nsp-regexer';

isCreditCard('345768475867474')  
// true

isCreditCard(5465838563658274)  
// true

isCreditCard('?')  
// false
```

### `.isDayOfMonth(day[number|string])`

Returns `true` if day is a day of the month (1-31), otherwise returns `false`

```js
import { isDayOfMonth } from 'nsp-regexer';

isDayOfMonth('28')  
// true

isDayOfMonth(12)  
// true

isDayOfMonth(55)  
// false
```

### `.isDayOfWeekString(day[number|string])`

Returns `true` if day is name of a week day, otherwise returns `false`

```js
import { isDayOfWeekString } from 'nsp-regexer';

isDayOfWeekString('monday')  
// true

isDayOfWeekString('Tuesday')  
// true

isDayOfWeekString('thURSdAy')  
// true

isDayOfWeekString('FRIDAY')  
// true

isDayOfWeekString('doomsday')  
// false
```

### `.isDecimal(number[number|string])`

Returns `true` if number is a decimal number, otherwise returns `false`

```js
import { isDecimal } from 'nsp-regexer';

isDecimal('55.55')  
// true

isDecimal(-0.999)  
// true

isDecimal(50)  
// false
```

### `.isEmail(email[string])`

Returns `true` if email is a valid email address, otherwise returns `false`

```js
import { isEmail } from 'nsp-regexer';

isEmail('jsmith@gmail.com')  
// true

isEmail('sdfsdfsdfsd.com')  
// false
```

### `.isHexValue(hexValue[string])`

Returns `true` if hexValue is a valid hex value, otherwise returns `false`

```js
import { isHexValue } from 'nsp-regexer';

isHexValue('#FBB')  
// true

isHexValue('#SHFF56')  
// true

isHexValue('#FF56')  
// true

isHexValue('sbfj&&#')  
// false
```

### `.isHTMLTag(htmlTag[string])`

Returns `true` if htmlTag is an HTML tag, otherwise returns `false`

```js
import { isHTMLTag } from 'nsp-regexer';

isHTMLTag('<img src="./img/cat.png" />')  
// true

isHTMLTag('#SHFF56')  
// true

isHTMLTag('<h1 class="center"> Hello World! </h1>')  
// true

isHTMLTag('<body>')  
// false
```

### `.isInteger(integer[number|string])`

Returns `true` if integer is an integer, otherwise returns `false`

```js
import { isInteger } from 'nsp-regexer';

isInteger('455')  
// true

isInteger(-44)  
// true

isInteger('-34.66')  
// false
```

### `.isIPAddressV4(ipAddress[string])`

Returns `true` if ipAddress a valid IP address, otherwise returns `false`

```js
import { isIPAddressV4 } from 'nsp-regexer';

isIPAddressV4('172.16.254.1')  
// true

isIPAddressV4('0.1.0.1')  
// true

isIPAddressV4('54.45.222.345')  
// false
```

### `.isLetter(char[string])`

Returns `true` if char an alphabetic letter, otherwise returns `false`

```js
import { isLetter } from 'nsp-regexer';

isLetter('v')  
// true

isLetter('P')  
// true

isLetter('?')  
// false
```

### `.isLowerCase(str[string])`

Returns `true` if str contains all lower case letters, otherwise returns `false`

```js
import { isLowerCase } from 'nsp-regexer';

isLowerCase('coffee')  
// true

isLowerCase('life is awesome!')  
// true

isLowerCase('I love the new Avengers!')  
// false
```

### `.isMonthOfYear(number[number|string])`

Returns `true` if number is a month of year (1-12), otherwise returns `false`

```js
import { isMonthOfYear } from 'nsp-regexer';

isMonthOfYear('4')  
// true

isMonthOfYear(12)  
// true

isMonthOfYear(30)  
// false
```

### `.isMonthOfYearString(month[string])`

Returns `true` if month is a name of a month of year, otherwise returns `false`

```js
import { isMonthOfYearString } from 'nsp-regexer';

isMonthOfYearString('march')  
// true

isMonthOfYearString('April')  
// true

isMonthOfYearString('augusta')  
// false
```

### `.isNegativeInteger(integer[number|string])`

Returns `true` if integer is a negative integer, otherwise returns `false`

```js
import { isNegativeInteger } from 'nsp-regexer';

isNegativeInteger('-55')  
// true

isNegativeInteger(-6456)  
// true

isNegativeInteger('0.33')  
// false
```

### `.isNegativeNumber(number[number|string])`

Returns `true` if number is a negative number, otherwise returns `false`

```js
import { isNegativeNumber } from 'nsp-regexer';

isNegativeNumber('-0.44')  
// true

isNegativeNumber(-55)  
// true

isNegativeNumber('-1434.44')  
// true

isNegativeNumber(10)  
// false
```

### `.isNumber(number[number|string])`

Returns `true` if number is a number, otherwise returns `false`

```js
import { isNumber } from 'nsp-regexer';

isNumber('-0.44')  
// true

isNumber('-4.6')  
// true

isNumber(45)  
// true

isNumber('a coffee')  
// false
```

### `.isPassword(password[string])`

Returns `true` if password meets simple ruleset of a password (contains letters, numbers, hyphens, and underscores; length is between 6 to 18 characters), otherwise returns `false`

```js
import { isPassword } from 'nsp-regexer';

isPassword('')  
// true

isPassword('i-love-cats_haha')  
// true

isPassword('02140coffee')  
// false
```

### `.isPositiveInteger(integer[number|string])`

Returns `true` if integer is a positive integer, otherwise returns `false`

```js
import { isPositiveInteger } from 'nsp-regexer';

isPositiveInteger('55')  
// true

isPositiveInteger(-140)  
// false
```

### `.isPositiveNumber(number[number|string])`

Returns `true` if number is a positive number, otherwise returns `false`

```js
import { isPositiveNumber } from 'nsp-regexer';

isPositiveNumber('4')  
// true

isPositiveNumber('0.5')  
// true

isPositiveNumber(74.23)  
// true

isPositiveNumber(-6)  
// false
```

### `.isSSN(number[string])`

Returns `true` if number is a valid social security number, otherwise returns `false`

```js
import { isSSN } from 'nsp-regexer';

isSSN('031767927')  
// true

isSSN('031-76-7927')  
// true

isSSN('031 76 7927')  
// true

isSSN('545-454-4555')  
// false
```

### `.isStandardZipCode(zipCode[string])`

Returns `true` if zipCode is a valid zip code, otherwise returns `false`

```js
import { isStandardZipCode } from 'nsp-regexer';

isStandardZipCode('02166')  
// true

isStandardZipCode('12045-6089')  
// true

isStandardZipCode('545-454-4555')  
// false
```

### `.isUpperCase(str[string])`

Returns `true` if str contains all upper case letters, otherwise returns `false`

```js
import { isUpperCase } from 'nsp-regexer';

isUpperCase('G')  
// true

isUpperCase('OH WOW!')  
// true

isUpperCase('tea is always BETTER!')  
// false
```

### `.isUrl(url[string])`

Returns true if url a valid URL address, otherwise returns `false`

```js
import { isUrl } from 'nsp-regexer';

isUrl('http://3iem.museum:1337/')  
// true

isUrl('plik.co.uk')  
// true

isUrl('tea@g!.org')  
// false
```

### `.isUsername(username[string])`

Returns `true` if username meets the basic requirement of an username (contains letters, numbers, hyphens, and underscores; length is between 3 to 16 characters), otherwise returns `false`

```js
import { isUsername } from 'nsp-regexer';

isUsername('jSmith455')  
// true

isUsername('james-bond007')  
// true

isUsername('0coffeeEnergy')  
// false
```

### `.isUSPhoneNumber(phoneNumber[string])`

Returns `true` if phoneNumber a valid US phone number, otherwise returns `false`

```js
import { isUSPhoneNumber } from 'nsp-regexer';

isUSPhoneNumber('6174330080')  
// true

isUSPhoneNumber('(617) 433-0080')  
// true

isUSPhoneNumber('454-454-4544-45')  
// false
```

### `.isUSState(state[string])`

Returns `true` if state a name of one of US state, otherwise returns `false`

```js
import { isUSState } from 'nsp-regexer';

isUSState('arizona')  
// true

isUSState('Rhode Island')  
// true

isUSState('Boston')  
// false
```

### `.isVowel(char[string])`

Returns `true` if char a vowel letter, otherwise returns `false`

```js
import { isVowel } from 'nsp-regexer';

isVowel('a')  
// true

isVowel('U')  
// true

isVowel('v')  
// false
```

### `.isWhiteSpace(char[string])`

Returns true if char a white space, otherwise returns false

```js
import { isWhiteSpace } from 'nsp-regexer';

isWhiteSpace(' ')  
// true

isWhiteSpace('  ')  
// false

isWhiteSpace('hello')  
// false
```

### `.isYear(number[number|string])`

Returns `true` if number a year, otherwise returns `false`

```js
import { isYear } from 'nsp-regexer';

isYear('1985')  
// true

isYear('2019')  
// true

isYear('0344')  
// false
```

*Obviously, more to come soon...!*

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
