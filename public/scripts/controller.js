var myApp = angular.module('myApp', []);

myApp.controller('ShelfController', function( ShelfService ) {
  console.log('in the controller');
  var vm = this;

  vm.logIn = function () {
    console.log('clicked log in');
    var loginObject = {
      username: 'Kara',
      password: 'prime'
    };
    ShelfService.logIn(loginObject);
  }

  vm.register = function () {
    console.log('clicked register');
    var registerObject = {
      username: vm.registerNameInput,
      password: vm.registerPasswordInput
    };
    ShelfService.register(registerObject);
  }

});
