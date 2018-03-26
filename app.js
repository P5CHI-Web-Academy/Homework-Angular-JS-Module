const Garage = function ()  {

    const cars = [];
    
    const addNewCar = car => {
         cars.push(car);
    } 
 
    const sortByYear =  () => {
        cars.sort((a,b )=> {
            return a.year - b.year;
        })
    }
 
    const displayCarsInfo =  () => {
         console.log(cars);
    }
 
    const getCheapsCars = () => {
       return cars.filter(car => car.price < 5000);
    }
    
    const iterator = () => {
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
        dispalyAllCars: displayCarsInfo,
        iterator: iterator
    }
     
 };
 
 const garage = new Garage();
 garage.addNewCar({name: 'test', year:  2017, price: 5000});
 garage.addNewCar({name: 'test', year:  1990, price: 2000});
 
 var car = garage.getCheapsCars();
 console.log(car);
 
 
 
 
 
 