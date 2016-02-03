'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.service('LinkService', function($http,$location,$state,$resource,ApiService){
	
	 this.linkList  = function (){
            return  $http.get(ApiService.api.link.query,
                        {'Content-Type': 'application/json;charset=UTF-8'}); 
         };
  
     this.singById  = function (id){
            return  $http.get(ApiService.api.link.updateview.replace(":lid",id),
                        {'Content-Type': 'application/json;charset=UTF-8'}); 
         };

       this.del  = function (id){
            return  $http.put(ApiService.api.link.del.replace(":lid",id),
                        {'Content-Type': 'application/json;charset=UTF-8'})
                          .success(function(response){
                        if(response.code==200){
                          alert("删除链接成功......");
                           $state.go('station-info.link-list'); 
                        }else{
                          alert("删除链接异常....."+response.message);
                        }
                      }).error(function(response){
                    alert("网络异常,稍后重试.");
                  }); 
               };   

      this.saveLink  = function (link){
            return  $http.post(ApiService.api.link.save,
            			link,
                   {'Content-Type': 'application/json;charset=UTF-8'})
            			.success(function(response){
	         				if(response.code==200){
	         					alert("添加链接成功......");
                     $state.go('station-info.link-list'); 
	         				}else{
	         					alert("添加链接异常....."+response.message);
	         				}
	         			}).error(function(response){
							alert("网络异常,稍后重试.");
						});
        };


    this.updateLink  = function (link){
            return  $http.post(ApiService.api.link.update.replace(":lid",link.id),
                  link,
                   {'Content-Type': 'application/json;charset=UTF-8'})
                  .success(function(response){
                  if(response.code==200){
                    alert("修改链接成功......");
                    $state.go('station-info.link-list');   
                  }else{
                    alert("修改链接异常....."+response.message);
                  }
                }).error(function(response){
              alert("网络异常,稍后重试.");
            });
        };

       
       
});