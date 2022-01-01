const addTaskButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");

const addTaskItem = () => {
    if (taskInput.length > 0) {
        let newtaskItem = document.createElement("li");
        newtaskItem.classList.add("tasklist-item");
        newtaskItem.appendChild(document.createTextNode(taskInput.value));
        document.querySelector("ul").appendChild(newtaskItem);
        taskInput.value = "";
    }
}

addTaskButton.addEventListener("click", addTaskItem);
taskInput.addEventListener("keypress", function(e) {
    
    if (e.key === "Enter") {
        console.log(e.key);
        addTaskItem();
    }
});