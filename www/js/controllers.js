/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

})

.controller('InstagramCtrl',function($scope,$http,ionicMaterialInk, ionicMaterialMotion){
    console.log('inside instagramctrl');
     $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);
    
    

    

 
    //InstagramService.getUserDetails('123');
     var accessToken="3029425701.1677ed0.e4543e8299914b64b54631000461e5e6"
   // $scope.getUserDetails = function(userId){
        $http.get("https://api.instagram.com/v1/users/285647146/media/recent/?access_token="+accessToken)
    .success(function(response) {
    $scope.imgs = [];
    angular.forEach(response.data, function(value, key) {
       // alert(value.type);
        if("image" == value.type){
            $scope.imgs.push(value);    
        }
    });

//alert('imgs size: '+$scope.imgs.length);
        // Activate ink for controller
        
        ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });
    ionicMaterialInk.displayEffect();

   
    });
    //};
})

.controller('TimelineCtrl',function($scope, $ionicPlatform, $twitterApi, $cordovaOauth) {
   // console.log('am here');
   
    var twitterKey = "myTwitterKey";
    var clientId = 'zAbDUhLWWtRAfFv5arTqB9sVA';
    var clientSecret = '1daQAXzfysjeRqnUdq5ndiMsyhAcKxJ6wIPaXBoXo1xQjxlGZd';
    var myToken = '';
    $scope.tweet = {};
 
$ionicPlatform.ready(function() {
  myToken = JSON.parse(window.localStorage.getItem(twitterKey));
  if (myToken === '' || myToken === null) {
    $cordovaOauth.twitter(clientId, clientSecret).then(function (succ) {
      myToken = succ;
      window.localStorage.setItem(twitterKey, JSON.stringify(succ));
      $twitterApi.configure(clientId, clientSecret, succ);
      $scope.showHomeTimeline();
    }, function(error) {
      console.log(error);
    });
  } else {
    $twitterApi.configure(clientId, clientSecret, myToken);
    $scope.showHomeTimeline();
  }
});

$scope.showHomeTimeline = function() {
  $twitterApi.getHomeTimeline().then(function(data) {
    $scope.home_timeline = data;
  });
};
 
$scope.submitTweet = function() {
  $twitterApi.postStatusUpdate($scope.tweet.message).then(function(result) {
    $scope.showHomeTimeline();
  });
}
 
$scope.doRefresh = function() {
  $scope.showHomeTimeline();
  $scope.$broadcast('scroll.refreshComplete');
};
 
$scope.correctTimestring = function(string) {
  return new Date(Date.parse(string));
};

})

;
