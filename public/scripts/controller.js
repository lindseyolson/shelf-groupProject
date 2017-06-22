var myApp = angular.module('myApp', []);

myApp.controller('ShelfController', function( ShelfService ) {
  console.log('in the controller');
  var vm = this;

  vm.logIn = function () {
    console.log('clicked log in');
    var registerObject = {
      username: vm.nameInput,
      password: vm.passwordInput
    };
    ShelfService.logIn(registerObject)
  }

  vm.register = function () {
    console.log('clicked register');
    var registerObject = {
      username: vm.registerNameInput,
      password: vm.registerPasswordInput
    };
    ShelfService.register(registerObject).then(function() {
      vm.registerNameInput = '';
      vm.registerPasswordInput = '';
    });//end then
  }//end ShelfService

});
