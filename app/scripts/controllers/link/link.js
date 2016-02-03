'use strict';

/**
 * @ngdoc function
 * @name jingyunshopApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jingyunshopApp
 */
shopbackApp.controller('LinkController', function ($scope,$location,$state,LinkService,ApiService,UploadService) {


     var lid= $state.params.lid;

     if(lid!=null){
         LinkService.singById(lid).success(function(data){
             $scope.link = data.body;
         });
      };

  LinkService.linkList().success(function(data){
    $scope.links = data.body;
  }); 


  $scope.del = function(id){
     LinkService.del(id);
  };
    $scope.query = function(){
       LinkService.linkList().success(function(data){
        $scope.links = data.body;
      }); 
  };
  $scope.save = function(link){
     LinkService.saveLink(link);
  };
  $scope.update = function(link){
     LinkService.updateLink(link);
  };

  $scope.doUpload=function(){
    var form = document.getElementById("fileinfo");  
    var formData = new FormData(form); 
     var file=document.getElementById("file");

       UploadService.single(file)
            .success(function(data){
              if(data.ok){
                  $scope.link.img =  data.body;
                  $scope.img_success ="上传成功";
              }else{
                  alert("上传失败,请重新上传·····");
                   $scope.img_success ="上传失败";

              }
              
            }).error(function(data){
                alert("网络异常,请稍后再试·····");
                  $scope.img_success ="上传失败";

            });
   };
});