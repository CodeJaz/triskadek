angular.module('triskadekApp').
    factory('Login', ['$http', function ($http) {
        return {
            auth: function (credentials) {
                var authUser = $http({
                    method: 'POST',
                    url: 'http://localhost:8000/api/login/auth',
                    params: credentials
                });
                return authUser;
            }
        };
    }])
    .factory('Blog', ['$resource',function ($resource) {
        return $resource('http://dicormo.com/wp-json/posts/:id',{ id:'@id'});
    }])
    .factory('Twitter', ['$http', function ($http) {
        var url = 'http://104.236.42.145/app/twitter';
        return {
            get: function (callback) {
                $http.get(url).success(function (data) {
                    callback(data);
                });
            }
        };
    }])
    .factory('Facebook', ['$http', function ($http) {
        var url = 'http://104.236.42.145/app/facebook';
        return {
            get: function (callback) {
                $http.get(url).success(function (data) {
                    callback(data);
                });
            }
        };
    }]);