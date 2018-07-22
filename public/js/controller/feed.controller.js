angular.module('instaFeed', [])
  .controller('FeedController', function($scope, $http) {
    var vm = this;
    vm.images = [];
    vm.data = new Date(1532134406);

    vm.getImages = function(id) {
      $http({
        method: 'GET',
        url: '/api/media/'
      }).then(function(response) {
        vm.images = response.data;
      }, function(error) {
        console.log('Error: ' + error);
      });
    };

    vm.images = vm.getImages();

  });
