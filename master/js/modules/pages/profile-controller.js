
  (function() {
      'use strict';

      angular
          .module('app.pages')
          .controller('EmployeeProfileController', EmployeeProfileController);

  EmployeeProfileController.$inject = ['$stateParams', '$state','$http','$scope','$window','EmployeeProfileService'];
      function EmployeeProfileController($stateParams, $state,$http,$scope,$window, EmployeeProfileService) {
        
          var vm = this;

          activate();


          function activate() {

   
             var empid=$window.localStorage.userId;
              if(empid!=null){
             $scope.profile=EmployeeProfileService.get({id:empid});
            }
             
           

          }
      }

  })();
