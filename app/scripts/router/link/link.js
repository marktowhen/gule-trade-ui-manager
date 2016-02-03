'use strict';

/**
 * @ngdoc overview
 * @name jingyunetradebackApp
 * @description
 * # jingyunetradebackApp
 *
 * Main module of the application.
 */
shopbackApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('station-info.link-list',{
        templateUrl: '/views/link/linklist.html',
        url:"/link/list"
      })
      .state('station-info.link-edit',{
        templateUrl:'/views/link/linkedit.html',
        url:"/link/edit?lid"
      })
      .state('station-info.link-add',{
        templateUrl:'/views/link/linkadd.html',
        url:"/link/add"
      });
  });
