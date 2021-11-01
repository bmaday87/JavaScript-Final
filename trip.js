"use strict";
var $ = function(id) { return document.getElementById(id); };

// global variables 
var total = 0;
var nights = "";

var validateEntries = function() {
	var strUser = destination.options[destination.selectedIndex].text;
	var isValid = true;
	

	if (strUser === "Select a destination"){
		alert("Select a destination");
		isValid = false;
	}
	else {
		isValid = true;
	}
	
	if (isValid === true) {
		processEntries();
	}
	else {
		$("t_form").action = "trip_form.html";
	}
}
var processEntries = function() {
    var destination = $("destination");
	var amens = $("amenities");
	
	// calculate total based on entries
	var one = $("one_night");
	var two = $("two_night");
	var three = $("three_night");

	// determine price for duration of stay
    if (one.checked) { total += 100; nights += "One night"; }
    if (two.checked) { total += 200; nights += "Two nights";}
    if (three.checked) { total += 300; nights += "Three nights";}
	
	// determine which destination user selected
	var strUser = destination.options[destination.selectedIndex].text;

	var canMex = 509;
	var minMin = 409;
	var pheoAri = 399;
	var lvNev = 359;
	var miaFl = 499;
	
	switch(strUser)
	{
		case "Cancun, Mexico":
			total += canMex;
			break;
		case "Minneapolis, Minnesota": 
			total += minMin;
			break;
		case "Pheonix, Arizona":
			total += pheoAri;
			break;
		case "Las Vegas, Nevada": 
			total += lvNev;
			break;
		case "Miami, Florida":
			total += miaFl;
			break;
	}

	// add items from amenities text area into an array
	var a = amens.value.split(',');
	
	// check if user entered amenities and calculate 
	if (a == 0) {}
	else {total += a.length * 20;}
	
	// insert amenities into a String
	var amensString = "";
	for(var i in a){
		if(a[i] == 0) {
			break;
		}
		else {
			amensString += a[i] + " ";
		}
	} 
	
	// coupon calculation
	var cCode = $("code");
	if(cCode.value === "finals") {
		total = total - (total * .15);
	}
	else if(cCode.value === "executive") {
		total = total - (total * .20);
	} 
	
	// Create number formater
	
	var currency = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	
	// output total trip cost		
	alert("Destination: " + strUser + "\nStay Length: " + nights + 
		"\nAmenities: " + amensString + "\nTotal Trip Cost: " + currency.format(total));
};

var clear = function() {
	total = 0;
	nights = "";
};
window.onload = function() {
    $("submit").onclick = validateEntries; 
	$("reset").onclick = clear;
};

