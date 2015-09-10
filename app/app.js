import './app.scss';
import 'angular';
import exception from './component';

angular.module('webapp', [exception])
.run((logger) => {
  logger.error('test');
});
