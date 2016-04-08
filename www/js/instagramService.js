/* global angular, document, window */
'use strict';

angular.module('InstagramModule', [])
.service('InstagramService',function($scope,$http){
    var accessToken="3029425701.1677ed0.e4543e8299914b64b54631000461e5e6"
    $scope.getUserDetails = function(userId){
        $http.get("https://api.instagram.com/v1/users/self/follows?access_token="+accessToken)
    .success(function(response) {alert(JSON).stringify(response)});
    };
});