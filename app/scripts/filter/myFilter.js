'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */

shopbackApp.filter('booleanFilter', function (){
	return function(attr){
		if(attr){
			return '是';
		}
		return '否';
	};
	
});

shopbackApp.filter('bannerTypeFilter', function (){
	return function(attr){
		if(attr == 'index'){
			return '首页';
		}else{
			return '其他';
		}
		
	};
	
});
