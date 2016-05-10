/**
 * Created by huqiwen on 16/3/1.
 */
var pu = angular.module('pu', ['ngRoute', 'pucontroller', 'infinite-scroll']);

pu.config(function ($routeProvider) {
    $routeProvider
        .when('/hello', {
            templateUrl: 'tpls/hello.html',
            controller: 'helloctrl'
        })
        .when('/event', {
            templateUrl: 'tpls/eventList.html',
            controller: 'eventctrl'
        })
        .when('/week', {
            templateUrl: 'tpls/weektribe.html',
            controller: 'weektribectrl'
        })
        .when('/discover', {
            templateUrl: 'tpls/discover.html',
            controller: 'discoverctrl'
        })

        .when('/squire', {
            templateUrl: 'tpls/squire.html',
            controller: 'squirectrl'
        })
        .when('/topic/:id', {
            templateUrl: 'tpls/topic.html',
            controller: 'topicctrl'
        })
        .when('/weibo/:id', {
            templateUrl: 'tpls/weibocontent.html',
            controller: 'weiboctrl'
        })
        .when('/tribe/:type', {
            templateUrl: 'tpls/tribe.html',
            controller: 'tribectrl'
        })
        .when('/star', {
            templateUrl: 'tpls/star.html',
            controller: 'starctrl'
        })
        .when('/game', {
            templateUrl: 'tpls/entertainment.html',
            controller: 'entertainmentctrl'
        })
        .otherwise({
            redirectTo: '/hello'
        })
});

