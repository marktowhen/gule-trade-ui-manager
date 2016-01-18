'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('CashcounponService', function ($http, $location, ApiService) {

	//新增
	this.save = function(cashcounpon, amount){
		return $http.post(ApiService.api.counpon.cashcounpon.save.replace(':amount', amount),cashcounpon);

	}

	//查询
	this.list = function(cashcounpon, from, size){
		return $http.get(ApiService.api.counpon.cashcounpon.list.replace(':from', from).replace(':size', size)
			,{params:{"cardNum": cashcounpon.cardNum , "value":cashcounpon.value ,"locked": cashcounpon.locked ,'cardNumStart': cashcounpon.cardNumStart,'cardNumEnd':cashcounpon.cardNumEnd}});
	}
	//解锁
	this.unlock = function(ids){
		return $http.put(ApiService.api.counpon.cashcounpon.unlock, ids);
	}

	//查询
	this.count = function(cashcounpon){
		return $http.get(ApiService.api.counpon.cashcounpon.count
			,{params:{"cardNum": cashcounpon.cardNum , "value":cashcounpon.value ,"locked": cashcounpon.locked ,'cardNumStart': cashcounpon.cardNumStart,'cardNumEnd':cashcounpon.cardNumEnd}});
	}
});