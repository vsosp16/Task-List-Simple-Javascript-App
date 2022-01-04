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
        const fakeChekBox = document.createElement("span");
        fakeChekBox.classList.add("tasklist-item-checkbox");
        newtaskItem.prepend(fakeChekBox);
        newtaskItem.appendChild(document.createTextNode(taskInput.value)); //getting and setting the new item text.
        const removeButton = document.createElement("span");
        removeButton.classList.add("delete");
        removeText = "x";
        removeButton.appendChild(document.createTextNode(removeText));
        newtaskItem.appendChild(removeButton);
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


//Activate Checkmark and add line through
const checkTaskItem = (e) => {
    const target = e.target;
    // targetTagName = target.textContent || target.innerText;
    targetTagName = target.tagName;
    // console.log(targetTagName);
    if (targetTagName === "SPAN" && !target.classList.contains("delete")) {
        target.parentElement.classList.toggle("checked");
        // console.log("checked");
    }

    //Here we will remove the item if the X mark clicked.
    //event Target in parentı
    tarParent = target.parentNode;
    if (target.classList.contains("delete")
    ) {
        tarParent.remove();
    }
}

//finally adding our event listeners and connecting our predefined functions.
addTaskButton.addEventListener("click", addTaskItem);
taskInput.addEventListener("keypress", addTaskviaEnter);
tasklist.addEventListener("click", checkTaskItem);