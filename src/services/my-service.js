var angular = require('angular');
var namespace = require('../namespace');
var services = namespace.services;
var myService = services.factory('myService', myServiceFactory);

function myServiceFactory() {
	return {
		items: [
			{
				location: 'taipei',
				number: 5
			},
			{
				location: 'tainan',
				number: 10
			},
			{
				location: 'kaohsiung',
				number: 1
			}
		]
	}
}

module.exports = myService;