angular.module('triskadekApp')
    .controller('LoginCtrl', ['$scope', 'Login', function ($scope, Login) {
        $scope.login = {};

        $scope.loginSubmit = function () {
            console.log($scope.login);
            var auth = Login.auth($scope.login);
            auth.success(function (res) {
                console.log(res);
            });
        }
    }])
    .controller('FeedCtrl',['$scope','Twitter','Facebook','Blog', function ($scope, Twitter, Facebook, Blog) {
        $scope.tweets = [];
        $scope.statuses = [];

        Twitter.get(function (data) {
            $scope.tweets = data;
        });

        Facebook.get(function ( data ) {
            $scope.statuses = data;
        });

        $scope.posts = Blog.query();

    }])
    .controller('PostCtrl', ['$scope','$stateParams','Blog',function ($scope,$stateParams,Blog) {
        var postId = $stateParams.id;
        var post = Blog.get({ id:postId }, function () {
           $scope.post = post;
        });
    }]);