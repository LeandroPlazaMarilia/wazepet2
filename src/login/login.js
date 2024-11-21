function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    
    if (username === '' || password === '') {
        errorMessage.textContent = 'Preencha todos os campos!';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        displaySuccessMessage('Login bem-sucedido! Redirecionando...');
        setTimeout(function() {
            window.location.href = 'pagina-principal.html';
        }, 2000);
    }
});

function displaySuccessMessage(message) {
    const successMessage = document.createElement('p');
    successMessage.textContent = message;
    successMessage.classList.add('success-message');
    document.querySelector('.login-container').appendChild(successMessage);
    setTimeout(function() {
        successMessage.remove();
    }, 5000);
}
