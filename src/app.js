import 'toastr.scss';
import './app.scss';
import angular from 'angular';
import {sjException} from './component';

angular.module('webapp', [sjException])
.run((exception) => {
  exception.catcher('[Exception catcher]:')({data: {status: 500, message: 'Internal error'}});
  exception.catcher('Input format error!')('because ip format error.');
});

angular.element(document).ready(() => {
  angular.bootstrap(document.body, ['webapp']);
});
