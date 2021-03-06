import {
  app
}from '../main.js';
app.config(function($routeProvider){
$routeProvider
.when("/",{
  templateUrl:"src/views/adminBtn.html"
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
.when("/users",{
  templateUrl:"src/views/users.html"
})
.when("/styles",{
  templateUrl:"src/views/styles.html"
})
.when("/styles/add",{
  templateUrl:"src/views//stylesAdd.html"
})





.when("/datetime",{
  templateUrl:"src/views/datetime.html"
})
.when("/datetime/add",{
  templateUrl:"src/views/datetimeAdd.html"
})




.when("/images",{
  templateUrl:"src/views/images.html"
})
.when("/images/add",{
  templateUrl:"src/views/imagesAdd.html"
})
.when("/users/add",{
  templateUrl:"src/views/usersAdd.html"
})





.when("/textProperties",{
  templateUrl:"src/views/textProperties.html"
})
.when("/textProperties/add",{
  templateUrl:"src/views/textPropertiesAdd.html"
})







.when("/register",{
  templateUrl:"src/views/register.html"
})
.when("/login",{
  templateUrl:"src/views/login.html"
})
.when('/404', {
  templateUrl: "src/views/404.html"
})
.otherwise("/404");
})
