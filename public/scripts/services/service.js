myApp.service('ShelfService', function($http){
  var sv = this;

  sv.logIn = function( credentials ){
    return $http({
      method: 'POST',
      url: '/',
      data: credentials
    }).then(function(response){
      console.log('back from login attempt:', response);
      sv.response = response;
    });
  } // end logIn

  sv.register = function( credentials ){
    return $http({
      method: 'POST',
      url: '/register',
      data: credentials
    }).then(function(response){
      console.log('back from register attempt:', response);
    });
  } // end register

  sv.postToShelf = function( shelfObject ) {
    return $http({
      method: 'POST',
      url: '/shelfObjects',
      data: shelfObject
    }).then(function(response){
      console.log('back from postToShelf:', response);
    });
  }; // end postToShelf

  sv.getShelf = function() {
    return $http({
      method: 'GET',
      url: '/shelfObjects'
    }).then(function(response) {
      console.log('back from getShelf:', response);
      sv.data = response.data;
    });
  }

  sv.delete = function(id) {
    return $http({
      method: 'DELETE',
      url: '/shelfObjects/' + id,
    }).then(function() {

    });
  }

}); // end getShelf
