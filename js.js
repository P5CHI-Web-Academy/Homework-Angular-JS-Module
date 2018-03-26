"use strict";

var garage = function() {

  var audi = {
    name: "Audi",
    year: 2010,
    km  : 250000
  };

  var volkswagen = {
    name: "volkswagen",
    year: 2007,
    km  : 280000
  };

  var renault = {
    name : "renault",
    year : 2003,
    km   : 170000
  };



  var cars = [volkswagen, renault, audi];


  function byProdYear() {

    function older(car1, car2){
      return car1.year - car2.year;
    }

    cars.sort(byProdYear);

    console.log(`Garage sorted by production year`);

    for (var i = 0; i < cars.length; i++) {
      console.log(`${cars[i]["name"]}
                   ${cars[i]["year"]}
                   ${cars[i][km]}`);
    }

  }


  function byKm(km) {

      function filterByKm() {
        for (var i = 0; i < cars.length; i++) {
          if (parseInt(cars[i]["km"]) === parseInt(km)) {
            console.log(`The car with ${km} kilometers driven is:
              ${cars[i]["name"]}
              ${cars[i]["year"]}
              ${cars[i]["km"]}`);
          }
        }
      }

    cars.filter(byKm);
  }


  function iterator() {
    let iterator = cars[Symbol.iterator]();
    let next = iterator.next();
    while(!next.done) {
      console.log(next.value);
      next=iterator.next();
    }
  }

  return {
    year: byProdYear(),
    byKm : byKm(280000),
    iterate : iterator()

  }

}

var car = new garage();
