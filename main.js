// Andisheh Bassiri
// VFW Project 1
// 1302





//Get ID
var fname = document.getElementById("fname"),
	lname = document.getElementById("lname"),
	company = document.getElementById("company"),
	pnum = document.getElementById("pnum"),
	email = document.getElementById("email"),
	addy = document.getElementById("addy"),
	bday = document.getElementById("bday"),
	addPeep = document.getElementById("addPeep"),
	clearData = document.getElementById("cleardata"),
	displayData = document.getElementById("displayData");


//Functions
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
	localStorage.setItem(keyID, JSON.stringify(data));
	fname.value = "";
	lname.value = "";
	company.value = "";
	pnum.value = "";
	email.value = "";
	addy.value = "";
	bday.value = "";
	scroll(0,0);
	alert("Peep Saved!");
}

var clearLocal = function(){
	localStorage.clear();
	document.location.reload(true);
	alert("All data cleared.")

}

var getData = function(){
	var fnameVal = localStorage.getItem("First Name");
	var lnameVal = localStorage.getItem("Last Name");
	var companyVal = localStorage.getItem("Company");
	var pnumVal = localStorage.getItem("Phone Number");
	var emailVal = localStorage.getItem("E-Mail");
	var addyVal = localStorage.getItem("Address");
	fname.value = fnameVal;
	lname.value = lnameVal;
	company.value = companyVal;
	pnum.value = pnumVal;
	email.value = emailVal;
	addy.value = addyVal;
}

var getRadio = function(){
	var radio  = document.form[0].donor;
	for(i=0; i<radio.length; i++){
		if(radio[i].checked){
			var donorVal = radio[i].value;
		}
	}

}

var changeCats = function(){

}

var showData = function(){
	var addDiv = document.createElement("div");
	addDiv.setAttribute("id","items");
	var addList = document.createElement("ul");
	addDiv.appendChild(addList);
	document.body.appendChild(addDiv);
	
	for(i=0; i < localStorage.length; i++){
		var addLi = document.createElement("li");
		addList.appendChild(addLi);

		var storeKey = localStorage.key(i);
		var value = localStorage.getItem(storeKey);
		var peepItem = JSON.parse(value);

		var addSubUl = document.createElement("ul");
		addLi.appendChild(addSubUl);

		for(var n in peepItem){
			var addSubLi = document.createElement("li");
			addSubUl.appendChild(addSubLi);
			var peepData = peepItem[n][0]+" "+peepItem[n][1];
			addSubLi.innerHTML = peepData;
		}
	}
}


// Script
// getData();

/*fname.addEventListener("focus", function(){hasFocus(fname)});
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
*/

addPeep.addEventListener("click", saveData);

displayData.addEventListener("click", showData);

clearData.addEventListener("click", clearLocal);




