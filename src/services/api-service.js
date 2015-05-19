var angular = require('angular');
var services = require('../namespace').services;

var apiService = services.factory('api-service', apiServiceFactory);

apiServiceFactory.$inject = ['$timeout', '$q'];
function apiServiceFactory($timeout, $q) {	
	return {
		data: {
			raw: []
		},
		deferred: undefined,
		isGetting: function() {
			var deferred = this.deferred;
			if(!angular.isDefined(deferred))
				return false;
			return deferred.promise.$$state.status === 0;
		},
		getData: function() {
			var self = this;
			var deferred = this.deferred = $q.defer();
			$timeout(function() {
				var ret = [];
				var m = Math.floor((Math.random() * 10) + 20);
				for (var i = 0; i < 7; i++) {
					ret.push(
						Math.floor((Math.random() * 20) + m)
					);
				}
				deferred.resolve(ret);
			}				
			, 2000);
			deferred.promise.then(function(d) {
				self.data.raw = d;
			});
		}
	}
}