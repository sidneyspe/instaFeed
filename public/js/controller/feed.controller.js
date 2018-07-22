angular.module('instaFeed', [])
  .controller('FeedController', function($scope, $http) {
    var vm = this;
    vm.images = [];

    vm.getImages = function(id) {
      $http({
        method: 'GET',
        url: '/api/media/'
      }).then(function(response) {
        console.log(response);
        vm.images = response.data;
      }, function(error) {
        console.log('Error: ' + error);
      });
    };

    vm.images = vm.getImages();

  });
