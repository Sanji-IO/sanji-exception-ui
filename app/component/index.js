import angular from 'angular';
import { sjLogger } from 'sanji-logger-ui';

import config from './exception-handler.config';
import ExceptionHandlerProvider from './exception-handler.provider';
import ExceptionService from './exception.service';

const sjException = angular.module('sanji.exception', [sjLogger])
  .config(config)
  .provider('exceptionHandler', ExceptionHandlerProvider)
  .service('exception', ExceptionService)
  .name;
export {sjException};
