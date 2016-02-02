'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('BannerController', function ($scope,$cookies, ConstantService,BannerService,UploadService) {
	$scope.sizeList= [10,50];
	 //每页数量
 	$scope.size = 10;
 	//是否显示'展示更多'
 	$scope.more = false;
 	//列表集合
 	$scope.banners = [];
 	$scope.types = [{"key":"index","value":"首页"}];
	$scope.$watch('$viewContentLoaded', function() {  
       
        $scope.list();
    });  

	 $scope.list = function(){
	 	BannerService.list($scope.type,0 ,$scope.banners.length+$scope.size).success(function(data){
	 		if(data.code==200){
	 			//是否显示'更多'
	 			if(data.body.length==($scope.banners.length+$scope.size)){
	 				$scope.more = true;
	 			}else{
	 				$scope.more = false;
	 			}

	 			$scope.banners = data.body;
	 		}
	 	});

	 	count();
	 }

	 $scope.reSearch = function(){
	 	BannerService.list($scope.type,0 ,$scope.size).success(function(data){
	 		if(data.code==200){
	 			//是否显示'更多'
	 			if(data.body.length==($scope.size)){
	 				$scope.more = true;
	 			}else{
	 				$scope.more = false;
	 			}

	 			$scope.banners = data.body;
	 		}
	 	});

	 	count();
	 }

	 var count = function(){
	 	BannerService.count($scope.type).success(function(data){
	 		if(data.code==200){
	 			$scope.amount = data.body;
	 		}
	 	});
	 }


 	$scope.remove = function(id){
 			if(confirm("确定删除吗")){
 				BannerService.remove(id).success(function(data){
 					if(data.code==200){
 						alert("删除成功");
 						$scope.reSearch();
 					}else{
 						alert(data.message);
 					}
 				});
 			}
 		
 	}

 	$scope.upload = function(inputID, fileInput){
 		if('file' == inputID){
 			//pc端
			 UploadService.single(fileInput)
	            .success(function(data){
	            	if(data.ok){
	            		$scope.banner.image = data.body;
	            	}else{
	            		 alert($scope, data.message);
	            	}
	              
	            }).error(function(data){
	                alert($scope, "服务异常！请重试");
	            });
		

 		}else{
 			//微站点

 		}
 	}

 	$scope.submit = function(banner){
 		if(!banner.id){
 			BannerService.save(banner)
		 		.success(function(data){
			 		$scope.submiting = false;
			 		if(data.code==200){
			 			alert("成功");
			 			$scope.reSearch();
			 			$scope.clearBanner();
			 		}else{
			 			alert(data.message);
			 		}
			 	})
			 	.error(function(data){
			 		$scope.submiting = false;
		 			alert("网络异常,请稍后重试");
			 	});
 		}else{
 			BannerService.refresh(banner)
		 		.success(function(data){
			 		$scope.submiting = false;
			 		if(data.code==200){
			 			alert("成功");
			 			$scope.reSearch();
			 			$scope.clearBanner();
			 		}else{
			 			alert(data.message);
			 		}
			 	})
			 	.error(function(data){
			 		$scope.submiting = false;
		 			alert("网络异常,请稍后重试");
			 	});
 		}
	 	
	 };


	 $scope.single = function(id){
	 	BannerService.single(id)
	 		.success(function(data){
	 			$scope.banner = data.body;
		 	})
		 	.error(function(data){
	 			alert("网络异常,请稍后重试");
		 	});
	 };

	 $scope.clearBanner = function(){
	 	$scope.banner = {};
	 }

 
	
});