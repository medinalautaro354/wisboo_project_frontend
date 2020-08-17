

angular.module('wisboo')
.factory('urlServices', ['$http',function($http){

    return {
        "post": (url) =>{

            return $http.post('http://localhost:3000/urls',{
                originalUrl: url
            })
            .then((response) =>{
                return response.data;
            });
        },
        "getAll":() =>{

            return $http.get('http://localhost:3000/urls')
            .then((response) =>{
                return response.data;
            });
        },
        "deleteById":(id) =>{
            return $http.delete(`http://localhost:3000/urls/${id}`)
            .then((response) =>{
                return response;
            })
        }
    };
}]);