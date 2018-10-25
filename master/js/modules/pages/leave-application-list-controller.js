
      /**=========================================================
       * Module: modals.js
       * Provides a simple way to implement bootstrap modals from templates
       =========================================================*/
      (function() {
          'use strict';

          angular
              .module('app.pages')
              .controller('LeaveApprovalController', LeaveApprovalController);

          LeaveApprovalController.$inject = ['$scope','$http', '$rootScope','$uibModal', '$state','$resource','baseURL','$window'];
          function LeaveApprovalController($scope,$http, $rootScope, $uibModal, $state,$resource,baseURL,$window) {
              var vm = this;

              activate();

              ////////////////


              function activate() {

       var thenMsg;
       var errorMsg;

           

      var currentperiod=0

                 $http.get(baseURL+'api/currentperiod/').then(function(data) {
                    var period=data.data;
                     $http.get(baseURL+'api/leaveapplication/'+period.id+'/'+$window.localStorage.userId).then(function(data) {
                        $scope.leaveapplicationdata=data.data;
                     
                      });                    
                  });

              }
          }

      })();