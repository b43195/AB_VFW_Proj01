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
	bday = document.getElementById("bday"),
	addPeep = document.getElementById("addPeep");

//Functions
// var getData = function(){
// 	fnameKey = localStorage.key("Last Name");
// 	fnameKeyVal = localStorage.getItem(fnameKey);
// 	fname.value = fnameKeyVal;
// }


var say = function(input){
	console.log(input)
}

var hasBlurred = function(keyName,elmID){
	localStorage.setItem(keyName,elmID.value);
	elmID.removeAttribute("class", "focus");
}

var hasFocus = function(elmID){
	elmID.setAttribute("class", "focus");
}

var saveData = function(){
	var keyID = Math.floor(Math.random()*19876);
	//gather input field data
	//create object from input field data
	var data = {};
		data.fname = ["First Name", fname.value];
		data.lname = ["Last Name", lname.value];
		data.company = ["Company", company.value];
		data.pnum = ["Phone Number", pnum.value];
		data.email = ["E-Mail", email.value];
		data.addy = ["Address", addy.value];
	say(JSON.stringify(data));
	localStorage.setItem(keyID, JSON.stringify(data));
	
}


//Script
// getData();

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

addPeep.addEventListener("click", saveData);










