let users = []; // Array to store existing users

// Load existing users from JSON (Simulating a database)
fetch("users.json")
    .then(response => response.json())
    .then(data => users = data.users)
    .catch(error => console.error("Error loading user data:", error));

// Check username or email availability
function checkAvailability(field) {
    let value = document.getElementById(field).value.trim();
    let statusSpan = document.getElementById(field + "Status");

    if (value === "") {
        statusSpan.innerHTML = "";
        return;
    }

    let taken = users.some(user => user[field] === value);
    
    if (taken) {
        statusSpan.innerHTML = "❌ Taken";
        statusSpan.className = "invalid";
    } else {
        statusSpan.innerHTML = "✔ Available";
        statusSpan.className = "valid";
    }
}

// Prevent form submission if username/email is taken
document.getElementById("registrationForm").addEventListener("submit", function (e) {
    if (document.querySelector(".invalid")) {
        alert("Fix errors before submitting!");
        e.preventDefault();
    }
});
