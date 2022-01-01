//Here is our variables and a function
//to check the input value length for the exact moment that event triggered.
const addTaskButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskLength = () => taskInput.value.length;

//This is our main function that adds items to the ul list.
const addTaskItem = () => {

    if (taskLength() > 0 ) {
        const newtaskItem = document.createElement("li"); //Defining the new task item as a variable.
        newtaskItem.classList.add("tasklist-item"); //adding a class to that new item.
        newtaskItem.appendChild(document.createTextNode(taskInput.value)); //getting and setting the new item text.
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
//finally adding our event listeners and connecting our predefined functions.
addTaskButton.addEventListener("click", addTaskItem);
taskInput.addEventListener("keypress", addTaskviaEnter);