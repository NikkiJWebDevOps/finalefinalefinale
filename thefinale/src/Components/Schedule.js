document.addEventListener('DOMContentLoaded', function () {
    // Define a function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault();

        // Get values from the form
        const ownerName = document.getElementById('ownerName').value;
        const contactNumber = document.getElementById('contactNumber').value;
        const emailAddress = document.getElementById('emailAddress').value;
        const dogType = document.getElementById('dogType').value;
        const dogName = document.getElementById('dogName').value;
        const serviceNeeded = document.getElementById('serviceNeeded').value;
        const nextAvailableDate = document.getElementById('nextAvailableDate').value;

        // Create a new row for the table with the form data
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${ownerName}</td>
            <td>${contactNumber}</td>
            <td>${emailAddress}</td>
            <td>${dogType}</td>
            <td>${dogName}</td>
            <td>${serviceNeeded}</td>
            <td>${nextAvailableDate}</td>
            <td><button class="btn btn-danger btn-sm delete-button">Delete</button></td>
        `;

        // Add an event listener to the delete button
        const deleteButton = newRow.querySelector('.delete-button');
        deleteButton.addEventListener('click', handleDelete);

        // Append the new row to the table
        const appointmentList = document.getElementById('appointment-list');
        appointmentList.appendChild(newRow);

        // Clear the form fields
        document.getElementById('appointment-form').reset();
    }

    // Define a function to handle appointment deletion
    function handleDelete(event) {
        const row = event.target.closest('tr');
        if (row) {
            row.remove();
        }
    }

    // Add an event listener to the form
    const appointmentForm = document.getElementById('appointment-form');
    appointmentForm.addEventListener('submit', handleFormSubmit);

});
