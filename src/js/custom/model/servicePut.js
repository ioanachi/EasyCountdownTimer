import{
  app
}from '../main.js';


app.factory('httpPutService', ['generalService', '$http', function(generalService, $http){
return{
  newUser: function(_data){
    return $http.put(generalService.serverPath("user"), _data);
  },
  logIn:function(_data){
    return $http.post(generalService.serverPath("login"), _data);
  }
}
}]);
