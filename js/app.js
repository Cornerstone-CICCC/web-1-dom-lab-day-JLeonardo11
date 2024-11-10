// Selecting form elements
const form = document.querySelector('form');
const employeeList = document.getElementById('employeeList');

// Listen for the form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Get form data
    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const hireDate = document.getElementById('hire_date').value;
    const photo = document.querySelector('input[type="file"]').files[0];

    // Basic validation to ensure all fields are filled out
    if (!firstName || !lastName || !email || !hireDate || !photo) {
        alert('Please fill out all fields and upload a photo.');
        return;
    }

    // Create a new row for the employee
    const row = document.createElement('tr');

    // Create photo cell
    const photoCell = document.createElement('td');
    const img = document.createElement('img');
    img.src = URL.createObjectURL(photo); // Create an object URL for the photo file
    img.alt = `${firstName} ${lastName}'s photo`;
    img.width = 50; // Adjust the width of the photo as needed
    img.height = 50;
    photoCell.appendChild(img);
    row.appendChild(photoCell);

    // Add the rest of the cells
    const cells = [
        firstName,
        lastName,
        email,
        hireDate,
    ];

    cells.forEach(text => {
        const cell = document.createElement('td');
        cell.textContent = text;
        row.appendChild(cell);
    });

    // Actions cell
    const actionsCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        employeeList.removeChild(row);
    });
    actionsCell.appendChild(deleteBtn);
    row.appendChild(actionsCell);

    // Append the row to the table body
    employeeList.appendChild(row);

    // Clear the form after submission
    form.reset();
});
