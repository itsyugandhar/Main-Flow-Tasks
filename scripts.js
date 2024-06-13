document.addEventListener('DOMContentLoaded', () => {
    // Form Validation
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const age = document.getElementById('age').value;
            const gender = document.getElementById('gender').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Storing user data
            localStorage.setItem('user', JSON.stringify({ name, email, password, age, gender }));
            alert('Sign Up Successful! You can now log in.');
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Retrieving user data
            const user = JSON.parse(localStorage.getItem('user'));

            if (user && user.email === email && user.password === password) {
                alert('Login Successful!');
                window.location.href = 'jobs.html';
            } else {
                alert('Invalid Email or Password');
            }
        });
    }
});

