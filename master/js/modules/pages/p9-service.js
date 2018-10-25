(function() {
    'use strict';

    angular
        .module('app.pages')
        .factory('P9aService', P9aService);

    P9aService.$inject = ['$resource','baseURL'];
    function P9aService($resource,baseURL) {
     var data=$resource(baseURL+'api/p9areport/:year', {year: '@year'},
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