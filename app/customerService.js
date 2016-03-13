(function(){

    angular.module('myApp').factory('customerService', customerService);
    
    customerService.$inject = ['$http'];
    
    function customerService($http){
        
        return {
            get: get
        }
        
        function get(customerType){
            
            return $http({
                method: 'GET',
                url: '/' + customerType,
            }).then(function(response){
                
                return response.data;
                
            });
        }
      
    };
    
    
})()
