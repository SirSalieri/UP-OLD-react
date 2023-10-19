const loginForm = document.getElementById('login-form');
const registrationForm = document.getElementById('registration-form');

const loginEmailInput = document.getElementById('email');
const loginPasswordInput = document.getElementById('password');

const registrationEmailInput = document.getElementById('register-email');
const registrationPasswordInput = document.getElementById('register-password');
const registrationRepeatPasswordInput = document.getElementById('repeat-password');



loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    // Your login logic here
});

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior
    // Your registration logic here
});


// VALIDATING EMAIL FORMAT:

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// VALIDATING PASS:

function isValidPassword(password) {
    return password.length >= 8;
}


// VALIDATION LISTENERS


loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;

    // Perform form validation
    if (!isValidEmail(email)) {
        // Display an error message for invalid email
        // Example: alert('Invalid email format');
        return;
    }

    if (!isValidPassword(password)) {
        // Display an error message for weak password
        // Example: alert('Password must be at least 8 characters');
        return;
    }

    // If validation passes, proceed with login logic
    // ...
});

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = registrationEmailInput.value;
    const password = registrationPasswordInput.value;
    const repeatPassword = registrationRepeatPasswordInput.value;

    // Perform form validation
    if (!isValidEmail(email)) {
        // Display an error message for invalid email
        // Example: alert('Invalid email format');
        return;
    }

    if (!isValidPassword(password)) {
        // Display an error message for weak password
        // Example: alert('Password must be at least 8 characters');
        return;
    }

    if (password !== repeatPassword) {
        // Display an error message for password mismatch
        // Example: alert('Passwords do not match');
        return;
    }

    // If validation passes, proceed with registration logic
    // ...
});
