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
.factory( "DoctorFactory", [
      "$resource",
      DoctorFactoryFunction
    ]);

function DoctorIndexControllerFunction(){

}

function DoctorShowControllerFunction(){

}

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

function DoctorFactoryFunction( $resource ){
  return $resource( "http://localhost:3000/doctors/:id" );
}