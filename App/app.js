var app = angular.module("app", ["ui.router"]);


app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('shop', {
        url: "/shop",
        templateUrl: "view/menu.html",
        controller: "menucon"
    });
    $urlRouterProvider.otherwise("/shop");
});