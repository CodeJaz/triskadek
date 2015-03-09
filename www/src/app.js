angular.module('DicormoApp', ['ionic', 'ngResource', 'ngMessages'])
  .run(function ($ionicPlatform,$ionicPopup) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }

        if (window.Connection) {
          if (navigator.connection.type == Connection.NONE) {
            $ionicPopup.confirm({
              title: "Sin conexión",
              content: "El Internet está desconectado en su dispositivo."
            })
              .then(function (result) {
                if (result) {
                  ionic.Platform.exitApp();
                }
              });
          }
        }
      }
    )
    ;
  })
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {


    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home/home.html'
      })
      .state('home.slide', {
        url: '/slide',
        templateUrl: 'views/home/slide.html'
      })
      .state('home.feed', {
        url: '/feed',
        templateUrl: 'views/home/feed.html',
        controller: 'FeedCtrl'
      })
      .state('home.post', {
        url: '/post/:id',
        templateUrl: 'views/home/post.html',
        controller: 'PostCtrl'
      })
      .state('home.login', {
        url: '/login',
        templateUrl: 'views/home/login.html',
        controller: 'LoginCtrl'
      });


    $urlRouterProvider.otherwise('/home/feed');

  }]);
