import {
  app
}from '../main.js';
app.config(function($routeProvider){
$routeProvider
.when("/",{
  templateUrl:"src/views/adminbtn.html"
})
.when("/dashboard",{
  templateUrl:"src/views/dashboard.html"
})
.when("/timers",{
  templateUrl:"src/views/timers.html"
})
.when("/timers/edit/:id",{
  templateUrl:"src/views/timersEdit.html"
})
.when("/timers/add",{
  templateUrl:"src/views/timersAdd.html"
})





.when('/404', {
  templateUrl: "src/views/404.html"
})
.otherwise("/404");
})
