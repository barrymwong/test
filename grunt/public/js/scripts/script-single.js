(function() {
  var myApp;

  myApp = angular.module('myApp', []);

  myApp.factory('Data', function() {
    return {
      message: 'Hello Wrrld'
    };
  });

  this.FirstCtrl = function($scope, Data) {
    return $scope.data = Data;
  };

  this.SecondCtrl = function($scope, Data) {
    $scope.data = Data;
    return $scope.reversedMessage = function(message) {
      return message.split('').reverse().join('');
    };
  };

}).call(this);
