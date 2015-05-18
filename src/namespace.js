var angular = require('angular');

var templates = angular.module('templates', []);
var drtvs = angular.module('drtvs', []);
var services = angular.module('services', []);
var app = angular.module('app', [templates.name, drtvs.name, services.name]);

var namespaces = {
	directives: drtvs,
	services: services,
	app: app
};

module.exports = namespaces;