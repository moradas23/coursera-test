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
     if(firstItem == ""){
       $scope.message= "Please enter data first";
       $scope.empty();
     }
     else {
       $scope.message= "Enjoy!";
       $scope.enjoyOrTooMuch();
     }
   }
   else if (numItems<=3) {
     $scope.message= "Enjoy!";
     $scope.enjoyOrTooMuch();
   }
   else if (numItems>3) {
      $scope.message= "Too much!";
      $scope.enjoyOrTooMuch();
   }
  }

  $scope.CustomStyle = {};
  $scope.empty = function () {
      $scope.CustomStyle = {
          'color' : 'red',
          'border-style': 'solid',
          'border-color': 'red'
      };
  }
  $scope.enjoyOrTooMuch = function () {
      $scope.CustomStyle = {
        'color' : 'green',
        'border-style': 'solid',
        'border-color': 'green'
      };
  }

}

})();
