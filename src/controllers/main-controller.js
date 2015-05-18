var angular = require('angular');
var namespaces = require('../namespace.js');
var app = namespaces.app;
var myService = require('../services/my-service.js');

var mainCtrl = app.controller('main-ctrl', mainCtrlFactory);

mainCtrlFactory.$inject = ['myService'];
function mainCtrlFactory(myService) {
	this.items = myService.items;
}

module.exports = mainCtrl;