(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('P9aController', P9aController);

    P9aController.$inject = ['$scope','$http','$resource', 'P9aService','baseURL','$window','uniqueFilter'];
    function P9aController($scope,$http,$resource,P9aService,baseURL,$window,uniqueFilter) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


        // $scope.p9as=P9aService.get({ year: 2017});
  

console.log( $scope.p9as);

       var year=2017;


       var employeeId=$window.localStorage.userId;
              $http.get(baseURL+'api/currentperiod').then(function(data) {
              var period = data.data;
                $http.get(baseURL+'api/p9areport/'+period.year+'/'+$window.localStorage.userId).then(function(data) {
                $scope.p9as = data.data;
                      console.log( $scope.p9as);

              });              

            });
          



                 $scope.searchP9a=function(user) {

          if(user.year!=null && user.year!=""){
           
                  var employeeId=$window.localStorage.userId;
          var year=user.year;
          
        $http.get(baseURL+'api/p9areport/'+year+'/'+employeeId).then(function(data) {
              $scope.p9as = data.data;
                    console.log( $scope.p9as);

            });

          }
          
  

         };
          
              $http.get(baseURL+'api/period').then(function(data) {
              $scope.periods = data.data;

            });



        }
    }
})();