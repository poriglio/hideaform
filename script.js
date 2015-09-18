angular.module("formModule",[])

angular.module("formModule").controller("formController",["$scope", function($scope){

	$scope.showButtonClick = function ( $event ) {
		$scope.visibility = true;
		$scope.editUserName = ""
		$scope.editUserInfo = ["","",""]
	}

	$scope.hideButtonClick = function ( $event ) {	
		$scope.visibility = false;
	}

	$scope.userName = "Name"
	$scope.userInfo = ["Species: ","Location: ","Profession: "]

	$scope.submit = function ( $event ) {
		$scope.userName = $scope.editUserName
		$scope.visibility = false; 
		$scope.userInfo = $scope.editUserInfo
	}

	$scope.editUserName = ""
	$scope.editUserInfo = ["","",""]

}])