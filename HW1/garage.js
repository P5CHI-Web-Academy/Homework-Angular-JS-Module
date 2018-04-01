var garage = function() {
	var nextIndex = 0;
	var cars = [];
	
	function next() {
		return nextIndex < cars.length ?
        	       {value: cars[nextIndex++], done: false}:
			{done: true};
	}

	function getCarAtIndex(index) {
		return cars[index];
	}

	function addCar(car) {
		cars.push({
			year: car.year,
			model: car.model,
			tankCapacity: car.tankCapacity,
			numberOfSeats: car.numberOfSeats,
			acceleration: car.acceleration});
	}

	function sortCars(prop="year") {
		cars.sort(function compare(a, b) {
		  if (a[prop] < b[prop]) {return -1;}
		  if (a[prop] > b[prop]) {return 1;}
		  return 0;})
	}
	
	function filterCars(key="year", val=2018) {
		return cars.filter(car => car[key] == val);
	}

	return {
		getCar: getCarAtIndex,
		addCar: addCar,
		sortCars: sortCars,
		filterCars: filterCars,
		next: next,
	};
}