var angular = require('angular');
var styles = require('./sass/main.scss');
var app = require('./namespace').app;

require('bootstrap/dist/css/bootstrap.css');
require('./controllers/main-controller');
require('./directives/example-bar');

console.log('hello angular');
angular.bootstrap(document.body, [app.name]);