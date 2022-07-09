const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const hiddenClassName = "hidden";
const USERNAME = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME, username);
    loginForm.classList.add(hiddenClassName);
    console.log(username);
    paintGreetings(savedUsername);
    // if (username === "") {
    //     alert("please write your name");
    // } else if (username.length > 15) {
    //     alert("your name is too long");
    // }
}

function paintGreetings(username) {
    greeting.innerText = `hello ${username}`; // greeting.innerText = 'hello ' + username;
    greeting.classList.remove(hiddenClassName);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME);
console.log(savedUsername);

if (savedUsername === null) {
    loginForm.classList.remove(hiddenClassName);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}