function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    // Stored user input in an object
    const userInput = {
        name: name,
        email: email,
        message: message
    };

    console.log('Form submitted:', userInput);
    alert('Form submitted successfully!');
}

// Event listener for form submission
window.addEventListener('load', () => {
    document.getElementById('userForm').addEventListener('submit', handleFormSubmit);
});