function Garage() {
  
    this._cars = [];
    
    this._Car = function(brand = "default", color = "default", year = 0, type = "default", fuel = "default") {
      this.brand = brand,
      this.color = color,
      this.year = year,
      this.type = type,
      this.fuel = fuel
    }
    
    this.getAllCars = function(){
      return this._cars
    }
    
    this.getCarAtIndex = function(index){
      return this._cars[index]
    }
    
    this.addNewCar = function(brand, color, year, type, fuel) {
      this._cars.push(new this._Car(brand, color, year, type, fuel))
    }
    
    this.removeCarAtindex = function(index) {
      this._cars.splice(index, 1)
    }
    
    this.filterByColor = function(color) {
      return this._cars.filter(car => car.color.toUpperCase() === 'GREY')
    }
    
    this.sortByYear = function() {
      this._cars.sort((current, next) => current.year - next.year)
    }
    
    this.iterator = function(cars) {
      var nextIndex = 0;
      
      return {
         next: function() {
             return nextIndex < cars.length ?
                 {value: cars[nextIndex++], done: false} :
                 {done: true};
         }
      };
  }
  }
  
  function generateGarage() {
    return new Garage();
  }
  
  
  const garage = generateGarage();
  
  garage.addNewCar("landrover", "grey", 2010, "suv", "diesel")
  garage.addNewCar("vw", "grey", 2009, "universal", "gas")
  garage.addNewCar();
  
  iterator = garage.iterator(garage.getAllCars())
  console.log(iterator.next())
  
  /*
  console.log(garage.getAllCars())
  garage.sortByYear()
  console.log(garage.getAllCars())
  */
  
  
  
  