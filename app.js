angular
  .module("doc", [
    "ui.router",
    "ngResource"
])
.config([
  "$stateProvider",
  RouterFunction
])
.controller("DoctorIndexController", [
  DoctorIndexControllerFunction
])
.controller("DoctorShowController", [
  "$stateParams",
  DoctorShowControllerFunction
])

function RouterFunction($stateProvider){
  $stateProvider
    .state("doctorIndex", {
      url: "/doctors",
      templateUrl: "js/ng-views/index.html",
      controller: "DoctorIndexController",
      controllerAs: "vm"
    })
    .state("doctorShow", {
      url: "/doctors/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "DoctorShowController",
      controllerAs: "vm"
    })
}
