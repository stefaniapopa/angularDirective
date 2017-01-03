// alert('Inca putin si faci bani, continua');
var app = angular.module("app", [])
app.controller("tableController", function ($scope) {
	var Person = function(firstName, lastName, age, sex ){
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
        this.sex = sex;
	};
	var stefa = new Person("Stefa","Popa", 18, "feminin");
	var justin = new Person("Justin","Popa", 26, "masculin"); 

     $scope.personList = [];
     $scope.personList.push(stefa);
     $scope.personList.push(justin);
    
    $scope.deletePersone = function (idx) 
    {
        var item_to_delete = $scope.personList[idx];
        $scope.personList.splice(idx, 1);
    };
   

});
   app.directive('tableRow', function ($compile) {

    return {
        template: '<tr><td ng-bind="person.firstName"></td><td><strong ng-bind="person.lastName"></strong></td><td ng-bind="person.age"></td><td ng-bind="person.sex"></td><td><button ng-click="deletePersone($index)">Delete</button></td></tr>'
    };
});