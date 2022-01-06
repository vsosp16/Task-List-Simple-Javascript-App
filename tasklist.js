//Here is our variables and a function
//to check the input value length for the exact moment that event triggered.
const addTaskButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const tasklist = document.querySelector(".tasklist-ul");
const taskLength = () => taskInput.value.length;

//This is our main function that adds items to the ul list.
const addTaskItem = () => {

    if (taskLength() > 0) {
        const newtaskItem = document.createElement("li"); //Defining the new task item as a variable.
        newtaskItem.classList.add("tasklist-item"); //adding a class to that new item.

        //Add a Checkbox Button
        const fakeChekBox = document.createElement("span");
        fakeChekBox.classList.add("tasklist-item-checkbox", "item-action");
        fakeChekBox.setAttribute("contenteditable", "false");
        newtaskItem.prepend(fakeChekBox);
        newtaskItem.appendChild(document.createTextNode(taskInput.value)); //getting and setting the new item text.

        //Add a Remove Button
        const removeButton = document.createElement("span");
        removeButton.classList.add("delete", "item-action");
        removeText = "X";
        removeButton.setAttribute("contenteditable", "false");
        removeButton.appendChild(document.createTextNode(removeText));
        newtaskItem.appendChild(removeButton);

        //Add an Edit Button
        const editButton = document.createElement("span");
        editButton.classList.add("icon", "icon-pencil", "edit-item", "item-action");
        editButton.setAttribute("contenteditable", "false");
        editButton.appendChild(document.createTextNode(""));
        newtaskItem.appendChild(editButton);


        document.querySelector("ul").appendChild(newtaskItem); //appending the item to the DOM.
        taskInput.value = ""; //cleaning the input so there wont be infinite adding by pressing enter.
    }
}

//adding an option to add items via Enter key.
const addTaskviaEnter = (e) => {
    if (e.which == 13 || e.key == "Enter") {
        addTaskItem();
    }
}


const listItemActions = (e) => {
    const target = e.target;
    // targetTagName = target.textContent || target.innerText;
    targetTagName = target.tagName;
    // console.log(targetTagName);

    // Checkbox toggle
    if (targetTagName === "SPAN" && target.classList.contains("tasklist-item-checkbox")) {
        target.parentElement.classList.toggle("checked");
        // console.log("checked");
    }


    // Remove Action
    tarParent = target.parentNode; //event Target in parentı
    if (target.classList.contains("delete")
    ) {
        tarParent.remove();
    }

    //Edit Action
    if (target.classList.contains("edit-item")) {
        tarParent.setAttribute("contenteditable", "true");
        // console.log(tarParent.children);
        if (!tarParent.children[3]) {
            const saveButton = document.createElement("span");
            saveButton.classList.add("save-item");
            saveButton.setAttribute("contenteditable", "false");
            saveButton.appendChild(document.createTextNode("Save ✓"));
            // tarParent.insertBefore(saveButton, tarParent.childNodes[2]);
            tarParent.appendChild(saveButton);
        }
    }
    else if (target.classList.contains("save-item") ) {
        tarParent.setAttribute("contenteditable", "false");
        target.remove();
    }

    else if (target.classList.contains("tasklist-item-checkbox")) {
        tarParent.setAttribute("contenteditable", "false");
        tarParent.childNodes[4].remove();
    }

}

//finally adding our event listeners and connecting our predefined functions.
addTaskButton.addEventListener("click", addTaskItem);
taskInput.addEventListener("keypress", addTaskviaEnter);
tasklist.addEventListener("click", listItemActions);




//START DRAGULA SETTINGS
// dragula([left, right], { revertOnSpill: true });
dragula([tasklist], { revertOnSpill: true } );