challenge.controller('gridController', ['$scope','$http' ,'$state', function ($scope, $http, $state) {

    $http.get('app/config/config.json').success(function (res) {
        $scope.interviews = res['interviews'];

        $scope.interviews.map(function (response) {
            console.log(response);
            $scope.interview = response;
        })
    });

    $scope.moreDetails = function (user) {
        $state.go('candidate-details', {interviewId: user._id});
    };
}]);