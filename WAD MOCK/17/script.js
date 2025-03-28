document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/api/users")
        .then(response => response.json())
        .then(users => {
            const userTable = document.getElementById("userTable");
            users.forEach(user => {
                let row = `<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                </tr>`;
                userTable.innerHTML += row;
            });
        })
        .catch(error => console.error("Error fetching users:", error));
});
