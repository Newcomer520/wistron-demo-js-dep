var angular = require('angular');
var namespaces = require('../namespace.js');
var app = namespaces.app;
require('../services/my-service.js');
require('../services/api-service.js');

var mainCtrl = app.controller('main-ctrl', mainCtrlFactory);

mainCtrlFactory.$inject = ['api-service'];
function mainCtrlFactory(apiService) {
	this.data = apiService.data;	
}

module.exports = mainCtrl;