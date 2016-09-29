angular.module('angularWidget', ['ui.bootstrap'])
.controller('githubController', function($scope,$http) {
    $scope.reposLoaded = false;
    $scope.userLoaded = false;
    $scope.userName = "hybris";

    $http.get("https://api.github.com/users/"+$scope.userName)
        .success(function(data) {
            $scope.userData = data;
            loadRepos();
        })
        .error(function(data) {
            $scope.userData = "No data";
        });
    var loadRepos = function () {
        $http.get($scope.userData.repos_url)
            .success(function(data){
                $scope.repoData = data;
            })
            .error(function(data){
                $scope.repoData = data;
            });
    };
});
