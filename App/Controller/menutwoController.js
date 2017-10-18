

app.controller("menutwocon",function($scope){
          $scope.deleteItem = function (index) {
               $scope.$emit("deleteItem", index);
          };
         $scope.itemChecked = function (index) {
              $scope.$emit("itemChecked",index);
         }
});
