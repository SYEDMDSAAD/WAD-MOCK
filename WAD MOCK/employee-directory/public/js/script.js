document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/api/employees")
        .then(response => response.json())
        .then(employees => {
            const employeeList = document.getElementById("employeeList");
            employees.forEach(employee => {
                let card = `<div class="card">
                    <img src="${employee.image}" alt="${employee.name}">
                    <h3>${employee.name}</h3>
                    <p><strong>Designation:</strong> ${employee.designation}</p>
                    <p><strong>Department:</strong> ${employee.department}</p>
                    <p><strong>Salary:</strong> $${employee.salary}</p>
                </div>`;
                employeeList.innerHTML += card;
            });
        })
        .catch(error => console.error("Error fetching employees:", error));
});
