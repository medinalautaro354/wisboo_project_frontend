angular.module('wisboo')
    .controller('mainCtrl', ['$scope', 'urlServices', function ($scope, urlservices) {
        $scope.url = '';
        $scope.urls = [];

        urlservices.getAll()
            .then((response) => {
                $scope.urls = response;

                console.log($scope.urls);
            })

        $scope.onSubmit = (e) => {
            e.preventDefault();
            if ($scope.form.$valid) {
                urlservices.post($scope.url).then((response) => {
                    //TODO observe
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Se guardo un nuevo Link.',
                        showConfirmButton: false,
                        timer: 1000
                    })
                });

                $scope.url = '';
            }
        }

        $scope.deleteById = (id) => {
            if (id) {

                Swal.fire({
                    title: 'Esta seguro de eliminar el link?',
                    text: "Esto no se puede revertir!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Si, Eliminar!'
                }).then((result) => {
                    if (result.value) {
                        urlservices.deleteById(id)
                            .then((response) => {
                                urlservices.getAll();
                            });
                        Swal.fire(
                            'Eliminado!',
                            'El link ha sido eliminado.',
                            'success'
                        )
                    }
                })

            }
        }

        $scope.copyToClipboard = (urlToCopy) => {
            navigator.clipboard.writeText(urlToCopy)
                .then(() => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Link copiado al portapapeles.',
                        showConfirmButton: false,
                        timer: 1000
                    })
                })
        }

    }]);
