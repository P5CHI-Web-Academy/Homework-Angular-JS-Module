function Garage() {
  
    const cars = [];
    
    function Car(brand = "default", color = "default", year = 0, type = "default", fuel = "default") {
      this.brand = brand,
      this.color = color,
      this.year = year,
      this.type = type,
      this.fuel = fuel
    }
    
    function addNewCar(brand, color, year, type, fuel) {
      cars.push(new Car(brand, color, year, type, fuel))
    }
    
    function getAllCars(){
      return cars
    }
    
    function getCarAtIndex(index){
      return cars[index]
    }
    
    function removeCarAtIndex(index) {
      cars.splice(index, 1)
    }
    
    function filterByColor(color) {
      return cars.filter(car => car.color.toUpperCase() === color.toUpperCase())
    }
    
    function sortByYear() {
      cars.sort((current, next) => current.year - next.year)
    }
    
    function iterator(cars) {
      var nextIndex = 0;
      return {
         next: function() {
             return nextIndex < cars.length ?
                 {value: cars[nextIndex++], done: false} :
                 {done: true};
         }
      };
    }
    
    return {
      addNewCar: addNewCar,
      getAllCars : getAllCars,
      getCarAtIndex: getCarAtIndex,
      removeCarAtIndex: removeCarAtIndex,
      filterByColor: filterByColor,
      sortByYear: sortByYear,
      iterator:iterator
    }
    
  }
  
  function generateGarage() {
    return new Garage();
  }
  
  const garage = generateGarage();
  
  garage.addNewCar("landrover", "grey", 2010, "suv", "diesel")
  garage.addNewCar("vw", "grey", 2009, "universal", "gas")
  garage.addNewCar();
  
  garage.sortByYear()
  
  iterator = garage.iterator(garage.getAllCars())
  console.log(iterator.next())