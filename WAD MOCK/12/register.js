document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userData = { name, email, password };

    // Send data using AJAX POST request
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status === 201) {
            alert("Registration Successful!");
            saveToLocal(userData);
            document.getElementById("registrationForm").reset();
        } else {
            alert("Registration Failed!");
        }
    };

    xhr.send(JSON.stringify(userData));
});

// Save user to local storage
function saveToLocal(user) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}
