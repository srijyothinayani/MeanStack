challenge.factory('commonResourceService', ['$resource', function ($resource, api) {
    var apiurl = 'http://localhost:3000';
    var crudOperations = function (url, params, isArray) {
        return $resource(apiurl + url, {}, {
            show: {
                method: 'GET',
                isArray: isArray,
                params: params
            },
            update: {
                method: 'PUT',
                params: params
            },
            create: {
                method: 'POST',
                isArray: isArray,
                params: params
            },
            delete: {
                method: "DELETE",
                params: params
            }

        });
    };
    return {
        crudOperations: crudOperations
    };
}]);
challenge.factory('employeesService',['commonResourceService', '$q', function (commonResourceService, $q) {
    var employees = {
        show: function (elements) {
            var defer = $q.defer();
            commonResourceService.crudOperations('/v1/employees', {}, true).show(elements).$promise.then(function (response) {
                    if (response) {
                        defer.resolve(response);
                    } else {
                        defer.resolve(null);
                    }
                }, function () {
                    defer.resolve(null);
                });
            return defer.promise;
        },
        create: function (elements) {
            var defer = $q.defer();
            commonResourceService.crudOperations('/v1/employees', {}, false).create(elements).$promise.then(function (response) {
                if (!response.status) {
                    defer.resolve(response);
                } else {
                    defer.resolve(null);
                }
            }, function () {
                defer.resolve(null);
            });
            return defer.promise;
        }
    };
    var employeeById = {
        update: function (elements) {
            var defer = $q.defer();
            commonResourceService.crudOperations('/v1/employees/:id', {id: '@id'}, false).update(elements).$promise.then(function (response) {
                if (!response.status) {
                    defer.resolve(response);
                } else {
                    defer.resolve(null);
                }
            }, function () {
                defer.resolve(null);
            });
            return defer.promise;
        },
        delete: function (elements) {

            var defer = $q.defer();
            commonResourceService.crudOperations('/v1/employees/:id', {id: '@id'}, false).delete(elements).$promise.then(function (response) {
                if (!response.status) {
                    defer.resolve(response);
                } else {
                    defer.resolve(null);
                }
            }, function () {
                defer.resolve(null);
            });
            return defer.promise;
        }
    };
    return {
        employees: employees,
        employeeById: employeeById
    };
}]);