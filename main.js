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
	soa = document.getElementById("soa"),
	soanum = document.getElementById("soanum"),
	quotes = document.getElementById("quotes"),
	cat = document.getElementById("cat"),
	notes = document.getElementById("notes"),
	clearData = document.getElementById("cleardata"),
	displayData = document.getElementById("displayData"),
	box1,
	box2,
	box3,

	addPeep = document.getElementById("addPeep");


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

var clearLocal = function(){
	localStorage.clear();
	document.location.reload(true);
	alert("All data cleared.")

}

var getCheckBoxVal = function(){
	var inputs = document.getElementsByTagName("input");
	var checkBoxes = [inputs[7], inputs[8], inputs[9]]
	if(checkBoxes[0].checked){
		box1 = checkBoxes[0].value;
	}else{
		box1  = "no";
	}
	if(checkBoxes[1].checked){
		box2 = checkBoxes[1].value;
	}else{
		box2  = "no";
	}
	if(checkBoxes[2].checked){
		box3 = checkBoxes[2].value;
	}else{
		box3  = "no";
	}
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
	var radio  = document.getElementsByTagName("input");
	var radio1 = radio[10];
	var radio2 = radio[11];
	if(radio1.checked){
		return radio1.value;
	}else{
		return radio2.value;
	}
}

var changeCats = function(){
	catOps = ["Friend", "Co-Worker","Family"];
	for(i=0; i<3; i++){
		var catName = catOps[i];
		say(catName);
		var catChoices = document.createElement("option");
		catChoices.setAttribute("value", catOps[i]);
		cat.appendChild(catChoices);
		catChoices.innerHTML = catName;
		
	}
	
}

var saveData = function(){
	var keyID = Math.floor(Math.random()*19876);
	var donorVal = getRadio();
	getCheckBoxVal();

	var data = {};
		data.fname = ["First Name: ", fname.value];
		data.lname = ["Last Name: ", lname.value];
		data.company = ["Company: ", company.value];
		data.pnum = ["Phone Number: ", pnum.value];
		data.email = ["E-Mail: ", email.value];
		data.addy = ["Address: ", addy.value];
		data.bday = ["Birthday: ", bday.value];
		data.rock = ["Rock: ", box1];
		data.paper = ["Paper: ", box2];
		data.scissor = ["Scissor: ", box3];
		data.donor = ["Organ Donor: ", donorVal];
		data.soa = ["Awesomeness: ", soa.value];
		data.cat = ["Category: ", cat.value];
		data.quotes = ["Best Quotes: ", quotes.value];
		data.notes = ["Notes: ", notes.value]

	localStorage.setItem(keyID, JSON.stringify(data));
	fname.value = "";
	lname.value = "";
	company.value = "";
	pnum.value = "";
	email.value = "";
	addy.value = "";
	bday.value = "";
	quotes.value = "";
	notes.value = "";
	scroll(0,0);
	alert("Peep Saved!");
}

var showData = function(){
	var div = document.getElementsByTagName("div");	
	div[0].setAttribute("class","remove");
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

var soaDisp = function(){
	var soaNumber = soa.value
	soanum.innerHTML = soaNumber;
}


// Script
getData();

changeCats();

addPeep.addEventListener("click", saveData);

displayData.addEventListener("click", showData);

clearData.addEventListener("click", clearLocal);

soa.addEventListener("focus", soaDisp);

/*
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
*/