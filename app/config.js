challenge.config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/candidate');

            $stateProvider
                .state('/candidate', {
                    url: '/candidate',
                    templateUrl: "app/views/employeeGridView.html"
                })
                .state('candidate-details', {
                    url: '/candidate-details/:Id',
                    templateUrl: 'app/directives/views/details.html'
                })
        }]);
