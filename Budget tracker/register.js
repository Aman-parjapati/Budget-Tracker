const registerForm = document.getElementById('register-form');
const regUsernameInput = document.getElementById('reg-username');
const regPasswordInput = document.getElementById('reg-password');
const registerErrorMessage = document.getElementById('register-error-message');

registerForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = regUsernameInput.value.trim();
    const password = regPasswordInput.value.trim();

    if (username === '' || password === '') {
        registerErrorMessage.textContent = 'Please enter both username and password.';
        return;
    }

    const existingUser = JSON.parse(localStorage.getItem('users')) || [];
    if (existingUser.some(user => user.username === username)) {
        registerErrorMessage.textContent = 'Username already exists.';
        return;
    }

    const newUser = { username, password };
    existingUser.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUser));
    window.location.href = 'login.html'; // Redirect to login page after registration
});
