(function() {
    'use strict';

    angular
        .module('app.pages')
        .factory('LeaveProcessingService', LeaveProcessingService);

    LeaveProcessingService.$inject = ['$resource','baseURL'];
    function LeaveProcessingService($resource,baseURL) {
     var data=$resource(baseURL+'api/leaveprocessing/:id', {id: '@id'},
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