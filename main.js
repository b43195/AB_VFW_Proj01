// Andisheh Bassiri
// VFW Project 1
// Feb 8th 2013

function say(input){
	console.log(input)
}

//Get ID
var fname = document.getElementById("fname"),
	lname = document.getElementById("lname"),
	company = document.getElementById("company"),
	pnum = document.getElementById("pnum"),
	email = document.getElementById("email"),
	addy = document.getElementById("addy"),
	bday = document.getElementById("bday");



fname.addEventListener(blur,say(fname.value));
// lname.addEventListener();
// company.addEventListener();
// pnum.addEventListener();
// email.addEventListener();
// addy.addEventListener();
// bday.addEventListener();
