(function () {
    'use strict';

    angular
        .module('App',
            [
                'angular-sticky-footer',
                'angular-logger',
                'datatables',
                'ngResource',
                'ngAria',
                'ngAnimate',
                'ui.router',
            ])
        .controller('HomeComponent', HomeComponent)
        // Lodash: Allow dependency injection for use in controllers
        .constant('_', window._)
        .config(['$locationProvider', '$httpProvider', '$stateProvider', function ($locationProvider, $httpProvider, $stateProvider) {

            // Delete '#' sign in angular-ui-router URLs
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
              });

            var states = {
                home: {
                    name: 'home',
                    url: '/',
                    templateUrl: 'public/spa/components/home/home.component.html',
                    controller: 'HomeComponent',
                    controllerAs: 'vm'
                }
            };

            // Routes
            $stateProvider
                .state(states.home);

        }])
        .run(['$rootScope', '$state', 'Logger', function ($rootScope, $state, Logger) {

            // Lodash: Use in views, ng-repeat="x in _.range(3)"
            $rootScope._ = window._;

            $state.go('home');

            Logger.log('Message only!');
            Logger.log('Hello World', 'Message with label!');

        }]);
})();