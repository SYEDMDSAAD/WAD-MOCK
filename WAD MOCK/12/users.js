document.addEventListener("DOMContentLoaded", function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userList = document.getElementById("userList");

    if (users.length === 0) {
        userList.innerHTML = "<p>No registered users yet.</p>";
        return;
    }

    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `Name: ${user.name}, Email: ${user.email}`;
        userList.appendChild(li);
    });
});
