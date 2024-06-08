const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function updateCounters() {
  const completedTasks = document.querySelectorAll(".completed").length;
  const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

  completedCounter.textContent = completedTasks;
  uncompletedCounter.textContent = uncompletedTasks;
}

function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("Please write down a task");
    console.log("no task added");

    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox" class="checkboxes">
      <span>${task}</span>
    </label>
    <span class="delete-btn">Delete</span>
    `;

  listContainer.appendChild(li);

  // clear the input field
  inputBox.value = " ";

  // attach event listeners to the new task
  const checkbox = li.querySelector("input");
  const taskSpan = li.querySelector("span");
  const deleteBtn = li.querySelector(".delete-btn");

  // strike out the completed task
  checkbox.addEventListener("click", function () {
    li.classList.toggle("completed", checkbox.checked);
    updateCounters();
  });

  

  deleteBtn.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete this task?")) {
      li.remove();
      updateCounters();
    }
  });
  updateCounters();
}

function checkAll() {
    document.getElementById("list-container").addEventListener("click", function () {
            let checkboxes = li.querySelectorAll(".checkboxes");
            checkboxes.forEach(function (checkbox) {
                checkbox.checked = this.checked;
            }, this);
        });
}

function deleteAll(){
    li.remove();
}

// add task when pressing Enter key
inputBox.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});