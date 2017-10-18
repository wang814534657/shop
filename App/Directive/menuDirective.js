app.directive('menu', function () {
    return {
        restrict: 'EA',  // used E because of element
        templateUrl: './view/template/_menu.html',
        controller:"menutwocon",
        scope: {
            val: "=val",
            index:"@index"
        }

    };
});