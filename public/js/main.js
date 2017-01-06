// alert('Inca putin si faci bani, continua');
var app = angular.module("app", [])
app.controller("tableController", function($scope) {
    var Person = function(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    };
    var stefa = new Person("Stefa", "Popa", 18, "Feminin");
    var justin = new Person("Justin", "Popa", 26, "Masculin");

    $scope.personList = [];
    $scope.personList.push(stefa);
    $scope.personList.push(justin);

    $scope.deletePersone = function(idx) {
        var item_to_delete = $scope.personList[idx];
        $scope.personList.splice(idx, 1);
    };


});
app.directive('tableRow', function($compile) {

    return {
        templateUrl: 'js/template/tablerow.tpl.html'
    };
});
