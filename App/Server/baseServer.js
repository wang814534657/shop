app.factory("baseServer", function($http, $q) {
    var fact = {
        ajax: function(url, type) {
            var defer = $q.defer();
            if (type == "jsonp" || type == "JSONP") {
                $.ajax({
                    url: url,
                    method: "get",
                    dataType: "jsonp",
                    success: function(result) {
                        defer.resolve(result)
                    },
                    error: function(error) {
                        defer.reject(error)
                    }
                })
            } else {
                $http({
                    url: url,
                    method: type,
                }).then(function(result) {
                    defer.resolve(result)
                }, function(error) {
                    defer.reject(error)
                })
            }
            return defer.promise
        }
    }
    return fact
})