angular.module('wisboo')
.controller('mainCtrl', ['$scope', 'urlServices', function($scope, urlservices){
    $scope.url = '';
    $scope.urls = [];

    urlservices.getAll()
    .then((response) =>{
        $scope.urls = response;

        console.log($scope.urls);
    })

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
