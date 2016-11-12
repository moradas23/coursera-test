(function () {
'use script';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject =['$scope'];
function LunchCheckController($scope){
  $scope.items ="";
  $scope.message ="";

 $scope.checkIfTooMuch = function () {
  var items = $scope.items.split(',');
  var numItems = items.length;

   if(numItems == 1){
     var firstItem = items[0];
     if(firstItem == "")
       $scope.message= "Please enter data first";
     else {
       $scope.message= "Enjoy!";
     }
   }
   else if (numItems<=3) {
     $scope.message= "Enjoy!";
   }
   else if (numItems>3) {
      $scope.message= "Too much!";
   }

 };

}

})();
