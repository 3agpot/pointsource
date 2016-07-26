var app = angular.module('pointsourceApp', ['ngResource', 'ui.router'])

.config(function($stateProvider){
    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'partials/main.html',
        controller: 'BaseController as base'
    });
})
.run(function($state) {
    $state.go('main');
})

.controller('BaseController', ['pointSourceService', function(pointSourceService){
    this.people = pointSourceService.get();
}])

.factory('pointSourceService', ['$resource', function($resource){
    return $resource('/people', null, 
            {
                'update': { method: 'PUT'}
            });
}])
