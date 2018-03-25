"use strict";


var garage= function (){


	var bmw={name:"BMW",age:2016,mileage:9000};
	var mercedes={name:"Mercedes",age:2004,mileage:8000};
	var audi={name:"Audi",age:2015,mileage:5000};

	var cars= [bmw,mercedes,audi];


	function sortByAge(){

		function compareAge(carA,carB){
			return carA.age-carB.age;
		}

		cars.sort(compareAge);

		console.log("Cars sorted by age");

		for(var i=0;i<cars.length;i++){
			console.log(`${cars[i]["name"]} ${cars[i]["age"]} ${cars[i]["mileage"]}`);
		}
	}

	function getCarByMile(mile){

		console.log("\n 	Filtered by age");

		function filterByAge(){
			for(var i=0;i<=cars.length-1;i++){
			 if(cars[i]["mileage"]==mile){
			 	console.log(`Cars with ${mile} mileage is: ${cars[i]["name"]} ${cars[i]["age"]} ${cars[i]["mileage"]}`);
			 	
			 }
			}
		}	

		cars.filter(filterByAge);
	}


	function iterator(){
		let iterator= cars[Symbol.iterator]();

		let next= iterator.next();
		while(!next.done){
			console.log(next.value);
			next=iterator.next();
		}
	}


	return{
		sortAge:sortByAge(),
		filterAge:getCarByMile(9000),
		iterate:iterator()
	}
};

var car= new garage();

