var angular = require('angular');
var namespace = require('../namespace');

require("../../vendors/RGraph/libraries/RGraph.common.core");
require('../../vendors/RGraph/libraries/RGraph.bar');

require('../templates/example-bar.html');
require('../services/api-service');

var drtvs = namespace.directives;
var barDrtv = drtvs.directive('exampleBar', barDrtvFactory);

barDrtvFactory.$inject = ['$timeout', 'api-service'];
function barDrtvFactory($timeout, apiService) {
	return {
		restrict: 'E',
		scope: {
			'barId': '@',
			'width': '@',
			'height': '@'
		},
		templateUrl: 'example-bar.html',
		link: function(scope, element, attrs) {
			if(angular.isUndefined(scope.barId))
				throw "barId should be defined";

			var bar;
			$timeout(function() {
				bar = new RGraph.Bar({
	                id: scope.barId,
	                data: [],
	                options: {
	                    labels: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
	                    shadow: false,
	                    colors: ['red'],
	                    grouping: 'stacked',
	                    strokestyle: 'rgba(0,0,0,0)'
	                }                
	            });
			})

			apiService.getData();
			
			scope.$watch(function() {
				return apiService.data.raw;
			}, function() {				
				$timeout(function() {					
					//RGraph.clearAnnotations(bar.canvas);					
				    RGraph.clear(bar.canvas);
				    bar.data = apiService.data.raw;				    
				    bar.draw();
				    //RGraph.redrawCanvas(bar.canvas);
				});
			}, true);			

			scope.isGetting = function() {
				return apiService.isGetting();
			}
			scope.refresh = function() {
				apiService.getData();
			}
		}
	}
}

module.exports = barDrtv;