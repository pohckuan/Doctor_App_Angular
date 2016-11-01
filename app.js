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
// .controller("DoctorShowController", [
//   "$stateParams",
//   DoctorShowControllerFunction
// ])
.factory( "DoctorFactory", [
      "$resource",
    FactoryFunction
    ]);


function DoctorIndexControllerFunction(DoctorFactory){
this.doctors = DoctorFactory.query()
this.searchDoctor = ""
this.searchSpecialty=""
$('.button').on('click',()=>{
  var keyword = $('#doctor-search').val()
  console.log(this.doctors)
  // keyword.get
})
}

// function DoctorShowControllerFunction(){
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
    // .state("doctorShow", {
    //   url: "/doctors/:id",
    //   templateUrl: "js/ng-views/show.html",
    //   controller: "DoctorShowController",
    //   controllerAs: "vm"
    // })
}

function FactoryFunction( $resource ){
  return $resource( "http://localhost:3000/doctors", {}, {
        update: { method: "PUT" }
    });
  }
