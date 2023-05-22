// Function to add a new task to the list
function addTask() {
  var input = document.getElementById("taskInput");
  var task = input.value.trim();
  if (task !== "") {
    var li = document.createElement("li");
    var text = document.createTextNode(task);
    li.appendChild(text);
    li.addEventListener("click", toggleCompleted);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}

// Function to toggle the completed state of a task
function toggleCompleted() {
  this.classList.toggle("completed");
}

document.getElementById("addButton").addEventListener("click", addTask);
