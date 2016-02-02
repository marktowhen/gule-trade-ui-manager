'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('BannerService', function ($http, $location, ApiService) {

	//新增
	this.save = function(banner){
		return $http.post(ApiService.api.banner.save,banner);

	}
	this.refresh = function(banner){
		return $http.put(ApiService.api.banner.refresh.replace(':ID', banner.id),banner);

	}

	//查询
	this.list = function(type, from, size){
		return $http.get(ApiService.api.banner.list.replace(':from', from).replace(':size', size),{params:{'type':type}});
	}

	//查询
	this.count = function(type){
		return $http.get(ApiService.api.banner.count ,{params:{'type':type}});
	}
	//删除
	this.remove = function(id){
		return $http.delete(ApiService.api.banner.remove.replace(':ID', id));
	}

	this.single = function(id){
		return $http.get(ApiService.api.banner.single.replace(':ID', id));
	}

	
});