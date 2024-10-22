function validateForm() {
    // Clear previous errors
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.innerText = '');

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    // Name validation
    if (fullName.length < 5) {
        document.getElementById('nameError').innerText = 'Name must be at least 5 characters';
        isValid = false;
    }

    // Email validation
    if (!email.includes('@')) {
        document.getElementById('emailError').innerText = 'Enter a correct email';
        isValid = false;
    }

    // Phone number validation
    if (phone === '123456789' || phone.length !== 10 || isNaN(phone)) {
        document.getElementById('phoneError').innerText = 'Enter a valid phone number';
        isValid = false;
    }

    // Password validation
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        document.getElementById('passwordError').innerText = 'Password is not strong';
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
        isValid = false;
    }

    return isValid;
}
