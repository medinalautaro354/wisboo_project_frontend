
angular.module('wisboo')
.factory('urlServices', ['$http',function($http){

    return {
        "post": (url) =>{

            return $http.post(apiRoute,{
                originalUrl: url
            })
            .then((response) =>{
                return response.data;
            });
        },
        "getAll":() =>{

            return $http.get(apiRoute)
            .then((response) =>{
                return response.data;
            });
        },
        "deleteById":(id) =>{
            return $http.delete(`${apiRoute}/${id}`)
            .then((response) =>{
                return response;
            })
        }
    };
}]);