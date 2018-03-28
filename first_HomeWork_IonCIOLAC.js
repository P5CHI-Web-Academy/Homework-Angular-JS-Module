const Garage  = function(){
    const cars = [];

    function Car(brand = "default", model = "default", year = 0, color = "default", transmission = "default", fuel = "default", price = 0){
        this.brand = brand,
        this.model = model,
        this.year = year,
        this.color = color,
        this.transmission = transmission,
        this.fuel = fuel,
        this.price = price
    }

    function addNewCar(brand,model,year,color,transmission,fuel,price){
        cars.push(new Car(brand,model,year,color,transmission,fuel,price));
    }
    

    function showAllCars(){
        console.log(cars);
    }

    function sortByYear(){
        cars.sort((first, second) => {
            return first.year - second.year;
        })
        console.log(cars);
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
    return{
        addNewCar: addNewCar,
        showAllCars: showAllCars,
        sortByYear: sortByYear,
       iterator: iterator
    }
}


const garage = new Garage();

garage.addNewCar("BMW", "Seria 7", 2015, "Negru", "Automat", "Disel", 150000);
garage.addNewCar("Mercedes-Benz", "Model S", 2010, "Negru", "Automat", "Disel", 200000);
garage.addNewCar("VW", "Golf GTI", 2012, "Negru", "Automat", "Disel", 11000);
garage.addNewCar("Toyota", "Carola", 2005, "Aba", "Manual", "Disel", 5000);
garage.addNewCar("Toyota", "Prius", 2010, "Aba", "Automat", "Hybrid", 5000);

//console.log("Hello World");
garage.showAllCars();
console.log("Sort by Year:");
garage.sortByYear();






