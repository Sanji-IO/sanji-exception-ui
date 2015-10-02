import benv from 'benv';
import { expect } from 'chai' ;

import ExceptionService from './exception.service';

let component;

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
    let logger = injector.get('logger');
    component = new ExceptionService($q, logger);
  });

  it('should start with injected services', function () {
    expect(component.$q).to.be.exist;
    expect(component.logger).to.be.exist;
  });

  it('should be have a catcher function', function () {
    expect(component.catcher).to.be.a('function');
  });

  after(function destroySyntheticBrowser() {
    benv.teardown(true);
  });
});
