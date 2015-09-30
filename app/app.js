import './app.scss';
import 'angular';
import exception from './component';

angular.module('webapp', [exception])
.run((exception) => {
  exception.catcher('[Exception catcher]:')({data: {status: 500, message: 'Internal error'}});
  exception.catcher('Input format error!')('because ip format error.');
});
