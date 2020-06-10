//Structure in a similar way

function newInput(requiredFlag,disabledFlag,type,id,onchange){
	var newInput = document.createElement("INPUT");

	newInput.required = requiredFlag;
	newInput.disabled = disabledFlag;

	newInput.setAttribute('type',type);
	newInput.setAttribute('id',id);

	if(type == "checkbox"){
		newInput.setAttribute('onclick',onchange);
	}else{
		newInput.setAttribute('onchange',onchange);
	}

	return newInput;
}

function newText(innHTML){
	var newT = document.createElement("TEXT");
	newT.innerHTML = innHTML;

	return newT;
}

function newSelect(requiredFlag,disabledFlag,id,onchange,arrayList){
	var newSelect = document.createElement("SELECT");
	newSelect.setAttribute('required',requiredFlag);
	newSelect.setAttribute('disabled',disabledFlag);
	newSelect.setAttribute('id',id);
	newSelect.setAttribute('onchange',onchange);

	for(var i = 0; i< arrayList.length; i++){
		var opt = document.createElement("OPTION");
		opt.value = i;
		opt.innerHTML = arrayList[i];
		newSelect.appendChild(opt);
	}

	return newSelect;
}

//Check for IE environment
function ieCheck(){
	if((window.navigator.userAgent).indexOf("MSIE ") > 0){
		return true;
	}
	return false;
}

//Returns the selected text of a SELECT element
function getSelectedText(elem){
	return elem[elem.selectedIndex].text;
}

//Removes last child in parent
//This is structured this way because IE doesn't like some things
function removeLastChild(elem){
	document.getElementById(elem).removeChild(document.getElementById(elem).children[document.getElementById(elem).children.length-1]);
}
