import {
  app
} from "../../main.js";
app.directive("passCheck", function() {
  return {
    require: "ngModel",
    link: function(scope, element, attrs, ctrl) {
      // console.log(ctrl);
      var firstPass = '#' + attrs.passCheck;
      var firstpassObj = angular.element(document.querySelector(firstPass));
      console.log(firstpassObj);
      firstpassObj.on('keyup', function(){
        scope.$apply(function(){
          ctrl.$setValidity('pwmatch', element.val() === firstpassObj.val());
        });
      });
      element.on('keyup', function(){
        scope.$apply(function(){
          ctrl.$setValidity('pwmatch', element.val() === firstpassObj.val() )
        });
      })
    }
  }



})
