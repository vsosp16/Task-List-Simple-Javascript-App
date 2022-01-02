var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	//add remove button
	var removeButton = document.createElement("span");
	removeButton.classList.add("silbunu");
	removeText = "❌";
	removeButton.appendChild(document.createTextNode(removeText));
	
	li.appendChild(removeButton);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


ul.addEventListener("click", function(e) {
    //e = e || window.event;
    var target = e.target || e.srcElement,
        targetTagName = target.textContent || target.innerText;
        //console.log(targetTagName);
        
        //trigger element
        //console.log(target);
        
        if(target.classList.contains("done")){
        	target.classList.remove("done");
        }else{
        	target.classList.add("done");
        }
        
        //event Target in parentı
        tarParent = target.parentNode;
        if(target.classList.contains("silbunu")
        ){
        	tarParent.remove();
        	
        }
});