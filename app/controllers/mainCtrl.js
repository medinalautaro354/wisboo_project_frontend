angular.module('wisboo')
.controller('mainCtrl', ['$scope', 'urlServices', function($scope, urlservices){
    $scope.url = '';
    $scope.urls = [];

    $scope.onSubmit = (e) => {
        e.preventDefault();
        if($scope.form.$valid){
            urlservices.post($scope.url).then((response)=>{
                console.log(response);
            });

            $scope.url = '';
        }
    }


}]);
