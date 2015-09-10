import loggerModule from 'sanji-logger-ui';

import provider from './exception-handler.provider';
import config from './exception-handler.config';
import ExceptionService from './exception.service';
let app = angular.module('sanji.exception', [loggerModule]);
app.provider('exceptionHandler', provider);
app.config(config);
app.service(ExceptionService);
export default app = app.name
