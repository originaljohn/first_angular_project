/**
 * Created by John on 28/07/2015.
 */
var app = angular.module("app",['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/home.html', {
        templateUrl: 'index.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login.html',{
        templateUrl: 'login.html',
        controller: 'LoginController'
    });

    $routeProvider.otherwise({ redirectTo: '/login' });
});

app.controller('LoginController', function(){
    console.log('loading login controller');
});

app.controller('HomeController', function(){
    console.log('loading home controller');
});