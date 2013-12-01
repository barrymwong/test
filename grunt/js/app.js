(function() {
  this.alertFunc = function(val) {
    return alert(val);
  };

}).call(this);

/* script2*/


(function() {


}).call(this);

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

(function() {


}).call(this);

(function() {


}).call(this);
