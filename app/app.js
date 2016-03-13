(function() {
    angular.module('myApp', [])
    .directive('personalView', personalView)
    .directive('businessView', businessView)
    .constant('CUSTOMER_TYPE', {
        PERSONAL: 'P',
        BUSINESS: 'B'
    });
    
    function personalView(){
        return {
            restrict: 'E',
            template: '<h1>Personal: {{customer.name}}</h1>',
            scope: {
                customer: '='
            },
            link: link
        }
        
        function link(s, e){
            
        }
    }
 
     function businessView(){
        return {
            restrict: 'E',
            template: '<h1>Business: {{customer.name}}</h1>',
            scope: {
                customer: '='
            },
            link: link
        }
        
        function link(s, e){
            
        }
    }
    
})();


