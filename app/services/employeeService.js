challenge.factory('commonResourceService', ['$resource', 'api', 'tsUserSessionStorage', function ($resource, api, tsUserSessionStorage) {
    var crudOperations = function (url, params, isArray) {
        return $resource(api.ops + url, {}, {
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