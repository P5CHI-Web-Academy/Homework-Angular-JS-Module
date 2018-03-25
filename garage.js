/*
   # Homework-Angular-JS-Module

   Hey there! A lesson wihtout homework is like a Jedi witout his lithsaber, so this is the topic for the first home work:

- Implement a Module named Garage that will manage your garage exposing only some public methods
- You will have there a massive with all the car infos that will be private
- Implement sorting, filtering methods for this module
- Implement an Iterator for Garage module that will iterate through all cars
- Implement another module that will generate Garage module

To sumbit your home work, clone this repo, add your files, create a branch (the name of your branch will be you.firstName + you.lastName), and make a pull request for this branch with me as reviewer :)

## Good Luck !!!

*/
'use strict';

function garage() {
    var cars = [];

    function getCarsLength() {
        return cars.length;
    };

    function getCarAtIndex(index) {
        return cars[index];
    };

    function pushCarFn(name) {
        cars.push(name);
    };

    function sortCarsFn() {
        cars.sort();
    };

    function filterFn() {
        return cars.filter(cars => cars.length > 4);
    };

    function makeIterator() {
        let nextIndex = 0;
        return function() {
            return cars[nextIndex++]
                // return nextIndex < cars.length ? { value: cars[nextIndex++], done: false } : { done: true };
        }
    };

    return {
        length: getCarsLength,
        getCar: getCarAtIndex,
        pushCar: pushCarFn,
        sortCars: sortCarsFn,
        filter: filterFn,
        iterate: makeIterator
    };
}


module.exports = garage;