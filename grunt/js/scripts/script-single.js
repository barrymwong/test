(function() {
  this.FirstCtrl = function($scope) {
    return $scope.data = {
      message: 'Hello',
      message2: 'Ni Hao'
    };
  };

  this.SecondCtrl = function($scope) {
    return $scope.data = {
      message: 'Hi'
    };
  };

}).call(this);
