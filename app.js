function Car(name, year, price) {
    this.name = name;
    this.year = year;
    this.price = price;
}

const Garage = function ()  {

   const cars = [];
   
   const addNewCar = (name, year, price) => {
        cars.push(new Car(name, year, price));
   } 

   const sortByYear =  () => {
       cars.sort((a,b )=> {
           return a.year - b.year;
       })
   }

   const displayAllCars =  () => {
        return cars;
   }

   const getCheapsCars = () => {
      return cars.filter(car => car.price < 5000);
   }
   
   const iterator = () =>  {
       for(var prop in cars) {
            if(cars.hasOwnProperty(prop)) {
                console.log(cars[prop]);
            }
        }
    }

   return {
       addNewCar: addNewCar,
       getCheapsCars: getCheapsCars,
       sortCarsByYear: sortByYear,
       dispalyAllCars: displayAllCars,
       iterator: iterator
   }
    
};

function generateNewGarageModule() {
    return new Garage();
}

var garage = Garage();

garage.addNewCar('Audi', 2016, 6500);
garage.addNewCar('Dacia', 2007, 4500);

garage.iterator();