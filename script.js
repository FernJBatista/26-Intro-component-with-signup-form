const inputs = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
};

// Check form inputs for errors
function validateForm(key) {
    let isValid = true;

    if (inputs[key].value === '') {
        inputs[key].classList.add('error');
        inputs[key].placeholder = 'This field cannot be empty';
        isValid = false;
    } else if (key === 'email' && !inputs[key].includes('@')) {
        inputs[key].classList.add('error');
        inputs[key].value = 'Please enter a valid email address';
        isValid = false;
    } else if (key === 'password' && inputs[key].value.length < 8) {
        inputs[key].classList.add('error');
        inputs[key].value = 'Password must have at least 8 characters';
        isValid = false;
    }

    return isValid;
}

for (const key in inputs) {
    inputs[key].addEventListener('click', function () {
        if (inputs[key].classList.contains('error')) {
            inputs[key].classList.remove('error');

            if (key === 'firstName') {
                inputs[key].placeholder = 'First Name';
            }
            if (key === 'lastName') {
                inputs[key].placeholder = 'Last Name';
            }
            if (key === 'email') {
                inputs[key].placeholder = 'Email Address';
            }
            if (key === 'password') {
                inputs[key].placeholder = 'Password';
            }
        }
    });
}

// Alert for form validation result
function submit() {
    let allValid = true;

    // Validate each input
    for (const key in inputs) {
        if (!validateForm(key)) {
            allValid = false;
        }
    }
}

const signupButton = document.getElementById('signup-button');
signupButton.onclick = submit;
