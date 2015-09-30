import loggerModule from 'sanji-logger-ui';

import config from './exception-handler.config';
import ExceptionHandlerProvider from './exception-handler.provider';
import ExceptionService from './exception.service';
let app = angular.module('sanji.exception', [loggerModule]);
app.config(config);
app.provider('exceptionHandler', ExceptionHandlerProvider);
app.service('exception', ExceptionService);
export default app = app.name
