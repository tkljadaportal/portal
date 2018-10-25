(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('LeaveProcessController', LeaveProcessController);

   LeaveProcessController.$inject = ['$scope','$http','$rootScope', '$uibModal','LeaveProcessingService','$stateParams', '$state','$timeout','baseURL','$window'];
    function LeaveProcessController($scope,$http, $rootScope,$uibModal, LeaveProcessingService,$stateParams, $state,$timeout,baseURL,$window) {
        var vm = this;

        activate();

        ////////////////


        function activate() {

 $scope.leavetypeprocess=LeaveProcessingService.query();
 console.log( $scope.leavetypeprocess);


$http.get(baseURL+'api/employee/'+$window.localStorage.userId).then(function(data) {
              $scope.employeeData = data.data;
              $scope.leavepost.employee=$scope.employeeData.id;
            $http.get(baseURL+'api/department/'+$scope.employeeData.department).then(function(data) {
                $scope.department = data.data;
            
              });
            });

$http.get(baseURL+'api/leavetype').then(function(data) {
              $scope.leavetypes = data.data;
              console.log($scope.leavetypes);
          
            });

$http.get(baseURL+'api/leavePostingtype').then(function(data) {
              $scope.leavetransaction = data.data;
              console.log($scope.leavetypes);
          
            });


    $http.get(baseURL+'api/period').then(function(data) {
              $scope.periods = data.data;

            });




$http.get(baseURL+'api/currentperiod').then(function(data) {
            
         $scope.leavepost={};
          $scope.currentPeriod=data.data;
      
      $scope.leavepost.periodId=$scope.currentPeriod.id;
      $scope.period_description=$scope.currentPeriod.month +' '+ $scope.currentPeriod.year; 
      console.log($scope.currentPeriod);
  
            });

// $scope.employeeChange=function(id){
              


                
//               for(var r=0;r<$scope.employees.length;r++){

//                 if(id==$scope.employees[r].id){
//                   $scope.department=$scope.employees[r].department;
//                   $http.get(baseURL+'api/department/'+$scope.department).then(function(data) {
//                     $scope.department=data.data.description;
//                 });
//                   $scope.employeeName=$scope.employees[r].firstName +' '+ $scope.employees[r].lastName;
//                 }

//               }

//             }

            $scope.leaveBalance=function(leavepost){

                $http.get(baseURL+'api/leavebalance/'+$window.localStorage.userId+'/'+leavepost.periodId+'/'+leavepost.leaveType).then(function(data) {
                

                $scope.leavepost.leavebalance=data.data.balance;
                });
            

  
            
            }


$scope.dayDiff = function(firstDate, secondDate){
  console.log(firstDate);
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds    
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    if(diffDays>$scope.leavepost.leavebalance){
      alert("Leave balance is less than the duration selected!");
    }
    $scope.leavepost.duration=diffDays+1;
    console.log(diffDays);
}



       $scope.formatString = function(format) {
    var day   = parseInt(format.substring(0,2));
    var month  = parseInt(format.substring(3,5));
    var year   = parseInt(format.substring(6,10));
    var date = new Date(year, month-1, day);
    return date;
  }


     
             $scope.submitLeaveApplication=function(leavepost,leavepostform) {
              var d = new Date(leavepost.startDate);
              console.log(d);
 var leaveposting=new LeaveProcessingService(leavepost);
          leaveposting.$save().then(function(data){

             var response=angular.fromJson(data);

          
            if(response.Status=="1"){
              $scope.errorMsg=false;
                    $scope.thenMsg =response.Message;
            }else{
           
               $scope.thenMsg=false;
                   $scope.errorMsg=response.Message;
           
            }
          $scope.leavePostingReset(leavepostform);

          }, 
          function() {
             $scope.thenMsg=false;
                 $scope.errorMsg = 'Server Request Error';
                });
     
          };


  $scope.leavePostingReset=function(leavepostform){
             $scope.leavepostform={};
            $scope.leavepost="";
            leavepostform.$setPristine();
            };


      
        }
    }

})();
