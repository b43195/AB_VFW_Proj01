// Andisheh Bassiri
// VFW Project 1
// Feb 8th 2013

//Get ID
var fname = document.getElementById("fname"),
	lname = document.getElementById("lname"),
	company = document.getElementById("company"),
	pnum = document.getElementById("pnum"),
	email = document.getElementById("email"),
	addy = document.getElementById("addy"),
	bday = document.getElementById("bday");

//Functions
// var getData = function(){
// 	var fnameKey = localStorage.key("First Name");
// 	var fnameValue = localStorage.getItem(fnameKey);
// }

var say = function(input){
	console.log(input)
}

var hasBlurred = function(keyName,elmID){
	var element = elmID;
	localStorage.setItem(keyName, element.value);
	element.removeAttribute("class", "focus");
}

var hasFocus = function(elmID){
	elmID.setAttribute("class", "focus");
}



//Script
fname.addEventListener("focus", function(){hasFocus(fname)});
fname.addEventListener("blur", function(){hasBlurred("First Name",fname)});

lname.addEventListener("focus", function(){hasFocus(lname)});
lname.addEventListener("blur", function(){hasBlurred("Last Name",lname)});

company.addEventListener("focus", function(){hasFocus(company)});
company.addEventListener("blur", function(){hasBlurred("Company",company)});

pnum.addEventListener("focus", function(){hasFocus(pnum)});
pnum.addEventListener("blur", function(){hasBlurred("Phone Number",pnum)});

email.addEventListener("focus", function(){hasFocus(email)});
email.addEventListener("blur", function(){hasBlurred("E-Mail",email)});

addy.addEventListener("focus", function(){hasFocus(addy)});
addy.addEventListener("blur", function(){hasBlurred("Address",addy)});

bday.addEventListener("focus", function(){hasFocus(bday)});
bday.addEventListener("blur", function(){hasBlurred("Birthday",bday)});














