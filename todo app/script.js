// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const pendingTasks = document.getElementById("pendingTasks");
const completedTasks = document.getElementById("completedTasks");

// Add Task Event
addTaskButton.addEventListener("click", addTask);

// Add Task Function
function addTask() {
    const taskText = taskInput.value.trim();

    // Validation
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create Task Element
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="complete-btn">✔</button>
            <button class="delete-btn">❌</button>
        </div>
    `;

    // Add to Pending List
    pendingTasks.appendChild(taskItem);

    // Clear Input
    taskInput.value = "";

    // Complete Button Event
    const completeButton = taskItem.querySelector(".complete-btn");
    completeButton.addEventListener("click", () => {
        completedTasks.appendChild(taskItem);
        completeButton.remove(); // Remove "Complete" button
    });

    // Delete Button Event
    const deleteButton = taskItem.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => taskItem.remove());
}
