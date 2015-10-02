import benv from 'benv';
import { expect } from 'chai' ;

import ExceptionService from './exception.service';

let component;
// let injector;
let logger;

describe('Service: exception', function() {
  before(function setupEnvironment(done) {
    benv.setup(function () {
      benv.expose({
        angular: benv.require('../../node_modules/angular/angular.js', 'angular')
      });
      done();
    });
  });

  beforeEach(function() {
    let injector = angular.injector(['ng', require('sanji-logger-ui')]);
    let $q = injector.get('$q');
    logger = injector.get('logger');
    component = new ExceptionService($q, logger);
  });

  it('should start with injected services', function () {
    expect(component.$q).to.be.exist;
    expect(component.logger).to.be.exist;
  });

  it('should be have a catcher function', function () {
    expect(component.catcher).to.be.a('function');
  });

  describe('#catcher()', function() {
    it('should return a function', function () {
      expect(component.catcher()).to.be.a('function');
    });

    it('should log exception', function () {
      let string = '';
      logger.error = function() {
        return string += '[Error]';
      };
      component.catcher('somthing was wrong!')();
      expect(string).to.equal('[Error]');
    });

    it('should log exception with reason', function () {
      let string = '';
      logger.error = function() {
        return string += '[Error]\n[Reason]';
      };
      component.catcher('somthing was wrong!')({data: { message: 'Internal Error!', status: 500 }});
      expect(string).to.equal('[Error]\n[Reason]');
    });
  });

  after(function destroySyntheticBrowser() {
    benv.teardown(true);
  });
});
