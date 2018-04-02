var garage = function(field = null) {

	var cars = [
		{
			brand: "BMW",
			model: "Z1",
			year: 2015,
			km: 120000

		},
		{
			brand: "AUDI",
			model: "TT",
			year: 2016,
			km: 130000
		},
		{
			brand: "VW",
			model: "zzzzz",
			year: 2013,
			km: 10000
		}


	];

	var showAllCars = function() {
		for(x in cars)
		{
			console.log(cars[x]);
		}
	};

	console.log("SHOW ALL CARS");
	showAllCars();
		


	console.log("CAR SORT");
	console.log("Cars sorted by: "+field);
	console.log(cars.sort((a, b) => (a[field] || "").toString().localeCompare((b[field] || "").toString())));

}


// put field = brand or model or year or km 
//depends on what you want to sort
var field = 'km'; // brand || model || year || km 
garaj = new garage(field);






