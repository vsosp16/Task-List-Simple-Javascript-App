const addTaskButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");

addTaskButton.addEventListener("click", function() {
    console.log("click is working.");
    let newTaskValue = taskInput.value;
    let newtaskItem = document.createElement("li");
    newtaskItem.classList.add("tasklist-item");
    
    newtaskItem.appendChild(document.createTextNode(newTaskValue)); //this is a way
    // newtaskItem.innerHTML = taskInput.value; //this is another way
    document.querySelector("ul").appendChild(newtaskItem);

});