import {
  app
} from '../main.js'



app.factory('generalService', ['$localStorage', function($localStorage) {
  return {
    serverPath: function(routePath) {
return 'http://ectserver.ioanachichernea.com/'+routePath;
    }
  }
}])
