// validation form register and register user local storage
const inputUsername = document.querySelector(".input-username");
const inputPassword = document.querySelector(".input-password");
const btnRegister = document.querySelector(".signInButton");

// validation form register and register user local storage

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("warning don't empty");
  } else {
    // array user
    const user = {
      username: inputUsername.value,
      password: inputPassword.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsername.value, json);
    alert("Login success");
    window.location.href = "index.html";
  }
});
