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
  "DoctorFactory",
  DoctorIndexControllerFunction
])
.controller("DoctorShowController", [
  "DoctorFactory",
  "$stateParams",
  DoctorShowControllerFunction
])
// .controller("ReviewShowController", [
//   ReviewShowControllerFunction
// ])
.factory( "DoctorFactory", [
      "$resource",
    FactoryFunction
    ]);

]);

function DoctorIndexControllerFunction(DoctorFactory){
this.doctors = DoctorFactory.query()
$('.button').on('click',()=>{
  var keyword = $('#doctor-search').val()
  console.log(keyword)
  // keyword.get
})
}

function DoctorShowControllerFunction(DoctorFactory, $stateParams){
  this.doctor = DoctorFactory.get({id: $stateParams.id})
}

// function ReviewShowController(){
//
// }

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
    .state("reviewShow", {
      url: "/doctors/:id",
      templateUrl: "js/ng-views/show.html",
      controller: "ReviewShowController",
      controllerAs: "vm"
    })
}

function FactoryFunction( $resource ){
  return $resource( "http://localhost:3000/doctors/:id", {}, {
        update: { method: "PUT" }
    });
  }
