import './app.scss';
import 'angular';
import exception from './component';

angular.module('webapp', [exception])
.run((exception) => {
  exception.catcher('[Exception catcher]:')({data: {status: 500, description: 'Internal error'}});
});
