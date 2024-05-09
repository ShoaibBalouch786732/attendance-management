function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");

    usernameError.textContent = "";
    passwordError.textContent = "";
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    if (username.trim() === "") {
        usernameError.textContent = "Username is required";
        localStorage.setItem("username", username);
        return false;
    }

    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long";
        localStorage.setItem("username", username);
        return false;
    }

    if (username === "admin" && password === "adminpass") {

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        window.location.href = "admin.html";
    } else {
        window.location.href = "user.html";
    }
}
