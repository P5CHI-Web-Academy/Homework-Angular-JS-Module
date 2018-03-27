/*****************************************************************
 * Copyright (C) 2018 Borea Tigan <borea.vor_v_zakone@bratva.md>
 * 
 * This file is part of Borea's Bratva.
 * 
 * Bratva can not be copied and/or distributed without the express
 * permission of Borea Tigan
 
 * Podzemka Inc.
 *****************************************************************/

class Vehicle {
  constructor(model, year, price) {
    this.model = model;
    this.year = year;
    this.price = price;
  }

  //////////// Getters ////////////
  get vehicleModel() {
    return this.model;
  }

  get vehicleYear() {
    return this.year;
  }

  get vehiclePrice() {
    return this.price;
  }

  //////////// Methods ////////////
  getVehicleInfo() {
    return `${this.vehicleModel} model, manufactured in ${this.vehicleYear}, at ${this.vehiclePrice}$`
  }
}

class Garage {
  constructor(build) {
    this.identifier = build.identifier;
    this.address = build.address;
    this.capacity = build.capacity;
    this.vehicles = [];
  }

  //////////// Getters ////////////
  get garageIdentifier() {
    return this.identifier;
  }

  get garageAddress() {
    return this.address;
  }

  get garageCapacity() {
    return this.capacity;
  }

  get garageVehicles() {
    return this.vehicles;
  }

  //////////// Methods ////////////
  sortVehicles(criteria) {
    this.vehicles.sort((vehicleA, vehicleB) => criteria(vehicleA, vehicleB));
  }

  filterVehiclesBy(criteria) {
    return this.vehicles.filter(vehicle => criteria(vehicle));
  }

  iterateThroughVehicles() {
    this.vehicles.forEach(vehicle => console.log(vehicle.getVehicleInfo()));
  }

  addVehicle(model, year, price) {
    this.vehicles.push(new Vehicle(model, year, price));
  }

  getGarageData() {
    return {
      'identifier': this.garageIdentifier,
      'address': this.garageAddress,
      'capacity': this.garageCapacity,
      'vehicles': this.garageVehicles
    }
  }

  static get Builder() {
    class Builder {
      withIdentifier(identifier) {
        this.identifier = identifier;
        return this;
      }

      withAddress(address) {
        this.address = address;
        return this;
      }

      withCapacity(capacity) {
        this.capacity = capacity;
        return this;
      }

      build() {
        return new Garage(this);
      }
    }
    return Builder;
  }
}

// Building a cars garage
const carsGarageBuilder = new Garage.Builder()
  .withIdentifier("C1")
  .withAddress("Bulevardul Moscova 11, Chisinau")
  .withCapacity(15);

const carsGarage = carsGarageBuilder.build();

carsGarage.addVehicle("Nissan", 1996, 4500);
carsGarage.addVehicle("Porsche", 2012, 50000);
carsGarage.addVehicle("Audi", 2008, 9000);
carsGarage.addVehicle("Ford", 2016, 17000);
carsGarage.addVehicle("Mitsubishi", 2006, 6000);
carsGarage.addVehicle("Mercedes", 2014, 30000);
carsGarage.addVehicle("Volkswagen", 1994, 3000);
carsGarage.addVehicle("Lada", 1976, 800);

// Building a trucks garage
const trucksGarageBuilder = new Garage.Builder()
  .withIdentifier("T34")
  .withAddress("Vasile Alecsandri, Chisinau")
  .withCapacity(8);

const trucksGarage = trucksGarageBuilder.build();

trucksGarage.addVehicle("Scania", 1985, 9999);
trucksGarage.addVehicle("Volvo", 2017, 190000);
trucksGarage.addVehicle("Iveco", 1999, 130000);
trucksGarage.addVehicle("Man", 2015, 150000);
trucksGarage.addVehicle("Daf", 1980, 8500);
trucksGarage.addVehicle("Mercedes", 2018, 180000);

// Criteria for filtering vehicles
const yearAbove2000 = vehicle => vehicle.year >= 2000;
const priceLessThan10000 = vehicle => vehicle.price < 10000;

// Criteria for sorting vehicles
const ascendent = (vehicleA, vehicleB) => vehicleA.year - vehicleB.year;
const descendent = (vehicleA, vehicleB) => vehicleB.year - vehicleA.year;

// Filter vehicles
console.log(carsGarage.filterVehiclesBy(priceLessThan10000));
console.log(trucksGarage.filterVehiclesBy(yearAbove2000));

// Sort vehicles
carsGarage.sortVehicles(ascendent);
carsGarage.iterateThroughVehicles();

trucksGarage.sortVehicles(descendent);
trucksGarage.iterateThroughVehicles();

// Display cars garage data
const carsGarageData = carsGarage.getGarageData();
for (const prop in carsGarageData) {
  console.log(`Garage ${prop}: `, carsGarageData[prop]);
}

// Display trucks garage data
const trucksGarageData = trucksGarage.getGarageData();
for (const prop in trucksGarageData) {
  console.log(`Garage ${prop}: `, trucksGarageData[prop]);
}
