(function() {
    'use strict';

    angular
        .module('app.pages')
        .factory('PayslipService', PayslipService);

    PayslipService.$inject = ['$resource','baseURL'];
    function PayslipService($resource,baseURL) {
     var data=$resource(baseURL+'/payslipreport/:id', {id: '@id'},
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