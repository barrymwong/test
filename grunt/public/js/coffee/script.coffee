myApp = angular.module 'myApp', []

myApp.factory 'Data', ->
	message: 'Hello Wrrld'

@FirstCtrl = ($scope, Data) ->
	$scope.data = Data

@SecondCtrl = ($scope, Data) ->
	$scope.data = Data
	$scope.reversedMessage = (message) ->
		message.split('').reverse().join('')