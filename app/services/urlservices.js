
angular.module('wisboo')
    .factory('urlServices', ['$http', function ($http) {

        return {
            "post": (url) => {

                return $http.post(apiRoute, {
                    originalUrl: url
                },
                    {
                        "headers": {
                            "Access-Control-Allow-Origin": "*"
                        }
                    })
                    .then((response) => {
                        return response.data;
                    });
            },
            "getAll": () => {

                return $http.get(apiRoute,
                    {
                        "headers": {
                            "Access-Control-Allow-Origin": "*"
                        }
                    })
                    .then((response) => {
                        return response.data;
                    });
            },
            "deleteById": (id) => {
                return $http.delete(`${apiRoute}/${id}`, {
                    "headers": {
                        "Access-Control-Allow-Origin": "*"
                    }
                })
                    .then((response) => {
                        return response;
                    })
            }
        };
    }]);