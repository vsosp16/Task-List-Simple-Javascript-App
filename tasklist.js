const addTaskButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskLength = () => taskInput.value.length;

const addTaskItem = () => {
    if (taskLength() > 0 ) {
        const newtaskItem = document.createElement("li");
        newtaskItem.classList.add("tasklist-item");
        newtaskItem.appendChild(document.createTextNode(taskInput.value));
        document.querySelector("ul").appendChild(newtaskItem);
        taskInput.value = "";
}
}
addTaskButton.addEventListener("click", addTaskItem);
taskInput.addEventListener("keypress", function(e){
    console.log(e.key);
    if (e.which == 13 || e.key == "Enter") {
        addTaskItem();
    }
});