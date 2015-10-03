# sanji-exception-ui
> Sanji exception service is part of Sanji UI framework and also it is a angular
module. It can catch application exception gracefully.

[sanji-exception-ui-icon]: https://nodei.co/npm/sanji-exception-ui.png?downloads=true
[sanji-exception-ui-url]: https://npmjs.org/package/sanji-exception-ui
[quality-badge]: http://npm.packagequality.com/badge/sanji-exception-ui.png
[quality-url]: http://packagequality.com/#?package=sanji-exception-ui
[travis-build-badge]: https://travis-ci.org/Sanji-IO/sanji-exception-ui.svg?branch=master
[travis-build-url]: https://travis-ci.org/Sanji-IO/sanji-exception-ui
[sanji-exception-ui-coverage-image]: http://codecov.io/github/Sanji-IO/sanji-exception-ui/coverage.svg?branch=master
[sanji-exception-ui-coverage-url]: http://codecov.io/github/Sanji-IO/sanji-exception-ui?branch=master
[sanji-exception-ui-codacy-image]: https://api.codacy.com/project/badge/13d7e2e9bf1b40a3bd9a3113c7cea587
[sanji-exception-ui-codacy-url]: https://www.codacy.com/public/zack9433/sanji-exception-ui.git
[dependencies-image]: https://david-dm.org/Sanji-IO/sanji-exception-ui.png
[dependencies-url]: https://david-dm.org/Sanji-IO/sanji-exception-ui
[devdependencies-image]: https://david-dm.org/Sanji-IO/sanji-exception-ui/dev-status.png
[devdependencies-url]: https://david-dm.org/Sanji-IO/sanji-exception-ui#info=devDependencies
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/

[![NPM][sanji-exception-ui-icon]][sanji-exception-ui-url]
[![Package Quality][quality-badge]][quality-url]
[![Build Status][travis-build-badge]][travis-build-url]
[![Coverage Status][sanji-exception-ui-coverage-image]][sanji-exception-ui-coverage-url]
[![Codacy Badge][sanji-exception-ui-codacy-image]][sanji-exception-ui-codacy-url]
[![dependencies][dependencies-image]][dependencies-url]
[![devdependencies][devdependencies-image]][devdependencies-url]
[![semantic-release][semantic-release-image]][semantic-release-url]
[![Commitizen friendly][commitizen-image]][commitizen-url]

## Dependencies
- [angularjs](https://github.com/angular/angular.js)
- [sanji-logger-ui](https://github.com/Sanji-IO/sanji-logger-ui)

## Installation
Sanji exception service is based on es6 + webpack to development and embrace npm to install it.

```shell
npm install sanji-exception-ui --save
```

## How to use
You need to include module first.
```javascript
angular.module('webapp', ['sanji.exception'])
```
and then use `exception` as DI service. `exception` service accounts for
catching application exception gracefully.
```javascript
class AppController {
  constructor($http, exception) {
    $http.get('/resources')
    .then(res => {
      console.log('get resources success');
    })
    .catch(exception.catcher('get resources fail'));
  }
}
AppController.$inject = ['$http', 'exception'];
```

## References
- [johnpapa/generator-hottowel](https://github.com/johnpapa/generator-hottowel)

## Contact

Author: Zack Yang &copy; 2015

* [@zack9433](https://twitter.com/zack9433)

Support: if you find any problems with this library,
[open issue](https://github.com/Sanji-IO/sanji-exception-ui/issues) on Github

