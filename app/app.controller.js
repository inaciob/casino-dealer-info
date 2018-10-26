(function() {
	'use strict';

	angular.module('casinoData', [])
	.controller('DealerInfoCtrl', function($http) {
		var vm = this;

		// Set variables
		vm.files = [{
						'displayText': 'Dealer log',
						'filename': 'dealer_log_2'
					},
					{
						'displayText': 'Dealer ranking',
						'filename': 'dealer_ranking_2'
					}];
		vm.dataToDisplay = [];
		vm.toggleData = toggleData;

		function toggleData(selectedFile) {
			if(selectedFile) {
				$http({
					method: 'GET',
					url: selectedFile.filename + '.json'
				}).then(function success(response) {
					if(response.status == 200) {
						vm.dataToDisplay = response.data;
					}
				}, function error(error) {
					console.log('Error: ', error);
				});
			}
		}
	});
})();
