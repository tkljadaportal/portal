
  (function() {
      'use strict';

      angular
          .module('app.pages')
          .factory('EmployeeProfileService', EmployeeProfileService);

      EmployeeProfileService.$inject = ['$resource','baseURL'];
      function EmployeeProfileService($resource,baseURL) {
       var data=$resource(baseURL+'api/employee/:id', {id: '@id'},
      { 'get':    {method:'GET', isArray:false},
    'save':   {method:'POST'},
    'query':  {method:'GET', isArray:true},
    'update': { method:'PUT' },
    'remove': {method:'DELETE'},
    'delete': {method:'DELETE'} 
  });
       return data
            
         
      }

  })();