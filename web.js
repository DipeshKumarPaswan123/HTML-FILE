document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const submitButton = document.querySelector("button[type='submit']");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

      
        setTimeout(() => {
            if (username === "user" && password === "password") {
                
                window.location.href = "dashboard.html"; 
            } else {
                
                errorMessage.textContent = "Invalid username or password";
                errorMessage.style.color = "red";
                shakeForm();
            }
        }, 1000); 
    });

    function shakeForm() {
        loginForm.classList.add("shake");
        setTimeout(() => {
            loginForm.classList.remove("shake");
        }, 500);
    }
});
