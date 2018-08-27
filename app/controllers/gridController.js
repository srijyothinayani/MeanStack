challenge.controller('gridController', ['$scope', '$http', '$state', 'employeesService', function ($scope, $http, $state, employeesService) {


    $scope.moreDetails = function (user) {
        $state.go('candidate-details', { interviewId: user._id });
    };

    employeesService.employees.show().then(function (response) {
        if (response) {
            $scope.employees = response;
            $scope.employees.map(function (response) {
                console.log(response);
                $scope.employee = response;
            })
        } else {
            /*This is dummy config file data*/
            $http.get('app/config/config.json').success(function (res) {
                $scope.employees = res['employees'];
                $scope.employees.map(function (response) {
                    console.log(response);
                    $scope.employee = response;
                })
            });
        }
    });

    $scope.addNewEmployee = function (user) {
        employeesService.employees.create({
            employee_name: "Sri Jyothi",
            designation: "Mean Stack Developer",
            employee_id: 123456,
            team: "TalentScreen team",
            department: "Software Developer",
            level: 5
        });
    };


}]);