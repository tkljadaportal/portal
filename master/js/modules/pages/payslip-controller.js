

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('PayslipController', PayslipController);

    PayslipController.$inject = ['$scope','$rootScope','$http','$resource','$window', 'PayslipService','baseURL'];
    function PayslipController($scope,$rootScope,$http,$resource,$window,PayslipService,baseURL) {
        var vm = this;

        activate();

        ////////////////

        function activate() {


          $http.get(baseURL+'api/currentperiod').then(function(data) {
    
         
         
          $http.get(baseURL+'api/payslipreport/'+data.data.id+'/'+$window.localStorage.userId).then(function(data) {
               $scope.persons= data.data;
               console.log($scope.persons);







            });          
      
  
            });
















         $scope.searchPayslip=function(user) {
 // $scope.persons= null;
          if(user.period!=null && user.period!=""){
    
           var employeeId=user.employeeNumber;
           var period=user.period;


     
          $http.get(baseURL+'api/payslipreport/'+period+'/'+$window.localStorage.userId).then(function(data) {
                $scope.persons= data.data;







            });

          }
          

         };


// $http.get(baseURL+'api/currentperiod').then(function(data) {
//           $scope.user={};
//           $scope.currentPeriodData=data.data;
//     $scope.currentperiod=$scope.currentPeriodData.period;
//       $scope.user.period=$scope.currentperiod;
     

//       $scope.searchpayslipByperiod($scope.currentperiod);
//      });



  $http.get(baseURL+'api/period').then(function(data) {
              $scope.periods = data.data;
              console.log($scope.periods);

            });





$scope.printDiv = function (div) {
 
  var docHead = document.head.outerHTML;
  var printContents = document.getElementById(div).outerHTML;
  var winAttr = "location=yes, statusbar=no, menubar=no, titlebar=no, toolbar=no,dependent=no, width=865, height=600, resizable=yes, screenX=200, screenY=200, personalbar=no, scrollbars=yes";

  var newWin = window.open("", "_blank", winAttr);
  var writeDoc = newWin.document;
  writeDoc.open();
  writeDoc.write('<!doctype html><html>' + docHead + '<body onLoad="window.print()">' + printContents + '</body></html>');
  writeDoc.close();
  newWin.focus();
}

        }
    }
})();