challenge.controller('resultsController', ['$scope','$http' ,'$state', function ($scope, $http, $state) {
    $http.get('app/config/config.json').success(function (res) {
        $scope.challenges = res['candidateResult'];

        $scope.challenges.map(function (response) {
            console.log(response);
            $scope.challenge = response;
        })
    });



}]);