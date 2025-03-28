document.addEventListener("DOMContentLoaded", loadTasks);

const apiURL = "https://jsonplaceholder.typicode.com/todos"; // Fake API for testing

// Load tasks from server
function loadTasks() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", apiURL + "?_limit=5", true); // Load only 5 tasks for demo
    xhr.onload = function () {
        if (xhr.status === 200) {
            let tasks = JSON.parse(xhr.responseText);
            tasks.forEach(task => displayTask(task.id, task.title));
        }
    };
    xhr.send();
}

// Add a new task
function addTask() {
    let taskInput = document.getElementById("taskInput").value.trim();
    if (taskInput === "") return alert("Enter a task!");

    let taskData = { title: taskInput, completed: false };

    let xhr = new XMLHttpRequest();
    xhr.open("POST", apiURL, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status === 201) {
            let newTask = JSON.parse(xhr.responseText);
            displayTask(newTask.id, newTask.title);
            document.getElementById("taskInput").value = "";
        }
    };

    xhr.send(JSON.stringify(taskData));
}

// Display task in UI
function displayTask(id, title) {
    let ul = document.getElementById("taskList");
    let li = document.createElement("li");
    li.innerHTML = `
        <span contenteditable="true" onblur="updateTask(${id}, this)">${title}</span>
        <button onclick="deleteTask(${id}, this)">❌</button>
    `;
    ul.appendChild(li);
}

// Update task (on blur event)
function updateTask(id, element) {
    let updatedText = element.innerText.trim();
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", `${apiURL}/${id}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ title: updatedText }));
}

// Delete task from server
function deleteTask(id, element) {
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", `${apiURL}/${id}`, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            element.parentElement.remove();
        }
    };
    xhr.send();
}
