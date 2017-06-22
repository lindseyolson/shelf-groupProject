myApp.service('ShelfService', function($http){
  var sv = this;

  sv.logIn = function ( credentials ){
    return $http({
      method: 'POST',
      url: '/',
      data: credentials
    }).then(function(response){
      console.log('back from login attempt:', response);
    });
  } // end logIn

  sv.register = function ( credentials ){
    return $http({
      method: 'POST',
      url: '/register',
      data: credentials
    }).then(function(response){
      console.log('back from register attempt:', response);
    });
  } // end logIn


}); // end service
