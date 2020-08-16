angular.module('wisboo')
.controller('mainCtrl', ['$scope', function($scope){
    $scope.url = '';


    $scope.onSubmit = (e) => {
        e.preventDefault();

        console.log($scope.url);
    }
}]);
