document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // You can add your authentication logic here.
        // For demonstration purposes, let's just display the input values.
        alert(`Username: ${username}\nPassword: ${password}`);
    });
}); 
