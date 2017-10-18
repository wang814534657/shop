/**
 * Created by Administrator on 2017/10/9.
 */
app.controller('menucon',['$scope','userdatafile',function ($scope,userdatafile) {
       userdatafile.getdatajson().then(function(res){
           console.log(res);
           $scope.menus = res;
       });

    $scope.flag = false;
    $scope.$on("deleteItem", function (event, index) {
        $scope.menus.splice(index, 1);

    });

    $scope.$on("itemChecked", function (event,index) {
        $scope.menus[index].check = !$scope.menus[index].check
    });

    $scope.allcheck = function () {
        $scope.flag = !$scope.flag;

        for (var i = 0; i < $scope.menus.length; i++) {
            if ($scope.flag) {
                $scope.menus[i].check = true;
            } else {
                $scope.menus[i].check = false;
            }

        }

    }


}]);