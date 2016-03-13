(function () {
    angular.module('myApp').controller('myController', function ($timeout, customerService, CUSTOMER_TYPE) {
        var vm = this;
         
        vm.heading = "Hello";
        
        $timeout(function(){ vm.customer = personalCustomer()}, 2000);
        
        vm.changeCustomer = changeCustomer;
        
        function changeCustomer(){
            var customerType = (vm.customer.type === CUSTOMER_TYPE.PERSONAL) ? 'business' :  'personal';
            
            customerService.get(customerType).then(function(data){
            
                vm.customer = data;
            
            });
        }
        
        function businessCustomer(){
            return {
                type: 'B',
                name: 'Mr Business'
            };
        }
        
        function personalCustomer(){
            return {
                type: 'P',
                name: 'Mr Personal'
            };
        }
    });
})();
