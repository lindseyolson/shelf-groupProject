var myApp = angular.module('myApp', []);

myApp.controller('ShelfController', function(ShelfService) {
  console.log('in the controller');
  var vm = this;
  vm.showRegisterDiv = true;
  vm.loggedIn = true;
  vm.hasAccess = false;

  vm.logIn = function() {
    console.log('clicked log in');
    var registerObject = {
      username: vm.nameInput,
      password: vm.passwordInput
    };
    ShelfService.logIn(registerObject).then(function() {
      console.log('from controller', ShelfService.response);
      if(ShelfService.response.data === 'Match!!!') {
        vm.hasAccess = true;
      } else {
        vm.hasAccess = false;
      }
    });
  }

  vm.register = function() {
    console.log('clicked register');
    var registerObject = {
      username: vm.registerNameInput,
      password: vm.registerPasswordInput
    };
    ShelfService.register(registerObject).then(function() {
      vm.registerNameInput = '';
      vm.registerPasswordInput = '';
      vm.toggleLogin();
    }); //end then
  } //end ShelfService

  vm.toggleLogin = function() {
    vm.showRegisterDiv = !vm.showRegisterDiv;
  } // end toggleLogin

  vm.logOut = function() {
    vm.loggedIn = true;
    vm.nameInput = '';
    vm.passwordInput = '';
  } // end logout

  vm.postToShelf = function() {
    var shelfObject = {
      description: vm.description,
      imageUrl: vm.imageUrl,
      username: vm.nameInput
    };
    console.log(shelfObject);
    ShelfService.postToShelf(shelfObject);
  };



}); // end controller
