var sjException =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(4)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _sanjiLoggerUi = __webpack_require__(10);
	
	var _sanjiLoggerUi2 = _interopRequireDefault(_sanjiLoggerUi);
	
	var _exceptionHandlerConfig = __webpack_require__(7);
	
	var _exceptionHandlerConfig2 = _interopRequireDefault(_exceptionHandlerConfig);
	
	var _exceptionHandlerProvider = __webpack_require__(8);
	
	var _exceptionHandlerProvider2 = _interopRequireDefault(_exceptionHandlerProvider);
	
	var _exceptionService = __webpack_require__(9);
	
	var _exceptionService2 = _interopRequireDefault(_exceptionService);
	
	var app = angular.module('sanji.exception', [_sanjiLoggerUi2['default']]);
	app.config(_exceptionHandlerConfig2['default']);
	app.provider('exceptionHandler', _exceptionHandlerProvider2['default']);
	app.service('exception', _exceptionService2['default']);
	exports['default'] = app = app.name;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(3)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(6);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	exports['default'] = function ($provide) {
	  $provide.decorator('$exceptionHandler', extendExceptionHandler);
	  extendExceptionHandler.$inject = ['$delegate', 'exceptionHandler', 'logger'];
	
	  /**
	   * Extend the $exceptionHandler service to also display a toast.
	   * @param  {Object} $delegate
	   * @param  {Object} exceptionHandler
	   * @param  {Object} logger
	   * @return {Function} the decorated $exceptionHandler service
	   */
	  function extendExceptionHandler($delegate, exceptionHandler, logger) {
	    return function (exception, cause) {
	      var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
	      var errorData = { exception: exception, cause: cause };
	      exception.message = appErrorPrefix + exception.message;
	      $delegate(exception, cause);
	      /**
	       * Could add the error to a service's collection,
	       * add errors to $rootScope, log errors to remote web server,
	       * or log locally. Or throw hard. It is entirely up to you.
	       * throw exception;
	       *
	       * @example
	       *     throw { message: 'error message we added' };
	       */
	      logger.error(exception.message, errorData);
	    };
	  }
	};
	
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = __webpack_require__(2)["default"];
	
	var _classCallCheck = __webpack_require__(1)["default"];
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $inject = [];
	
	var ExceptionHandlerProvider = (function () {
	  function ExceptionHandlerProvider() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, ExceptionHandlerProvider);
	
	    ExceptionHandlerProvider.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	
	    this.config = {
	      appErrorPrefix: undefined
	    };
	
	    this.configure = function (appErrorPrefix) {
	      _this.config.appErrorPrefix = appErrorPrefix;
	    };
	  }
	
	  _createClass(ExceptionHandlerProvider, [{
	    key: "$get",
	    value: function $get() {
	      var config = this.config;
	
	      return {
	        config: config
	      };
	    }
	  }]);
	
	  return ExceptionHandlerProvider;
	})();
	
	ExceptionHandlerProvider.$inject = $inject;
	exports["default"] = ExceptionHandlerProvider;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = __webpack_require__(2)['default'];
	
	var _classCallCheck = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var $inject = ['$q', 'logger'];
	
	var ExceptionService = (function () {
	  function ExceptionService() {
	    var _this = this;
	
	    for (var _len = arguments.length, injects = Array(_len), _key = 0; _key < _len; _key++) {
	      injects[_key] = arguments[_key];
	    }
	
	    _classCallCheck(this, ExceptionService);
	
	    ExceptionService.$inject.forEach(function (item, index) {
	      return _this[item] = injects[index];
	    });
	  }
	
	  _createClass(ExceptionService, [{
	    key: 'catcher',
	    value: function catcher(message) {
	      var $q = this.$q;
	      var logger = this.logger;
	
	      return function (e) {
	        var thrownDescription = undefined;
	        var newMessage = undefined;
	        if (e.data && e.data.message) {
	          // handling like http request error
	          thrownDescription = '\n' + e.data.message;
	          newMessage = message + thrownDescription;
	          logger.error(newMessage, e);
	          return $q.reject(e);
	        } else {
	          logger.error(message, e);
	        }
	      };
	    }
	  }]);
	
	  return ExceptionService;
	})();
	
	ExceptionService.$inject = $inject;
	exports['default'] = ExceptionService;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = sjLogger;

/***/ }
/******/ ]);
//# sourceMappingURL=sanji-exception-ui.js.map