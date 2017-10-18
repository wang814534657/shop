


app.factory("userdatafile",function($http){
         var datafile = {
             getdatajson: function () {
                return $http.post("http://localhost:3000/?menu").then(function(result){
                      if(result.status == 200 && result.statusText == "OK"){
                          return result.data;
                      }
                 })
             }
         };
         return  datafile;
});