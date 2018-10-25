(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('LogoutController', LoginFormController);

    LoginFormController.$inject = ['$scope','$http', '$state','$window','baseURL'];
    function LoginFormController($scope, $http, $state,$window,baseURL) {


 $scope.Logout=function() {
            // remove user from local storage and clear http auth header
            delete $window.localStorage.userId;
            delete $window.localStorage.userName;
            delete $window.localStorage.position;
            
                $state.go('page.login');
        }


    }


})();