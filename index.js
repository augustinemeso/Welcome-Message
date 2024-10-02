function generateWelcomeMessage() {
    const firstName = document.getElementById('firstNameInput').value;
    const lastName = document.getElementById('lastNameInput').value;
    const resultDiv = document.getElementById('result');

    // Use a template string to create the welcome message
    const message = `Hello, ${firstName} ${lastName}! Welcome to our website.`;
    
    resultDiv.textContent = message;
}
