const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const loginGreet = document.querySelector("#greeting")

function onLoginFormSubmit(event) {
    const username = loginInput.value
    greetString(username)

    event.preventDefault()
    
    loginForm.classList.add("hidden")
    loginGreet.classList.remove("hidden")

    localStorage.setItem("username", username)

    return username
}

function greetString(username) {
    loginGreet.innerText = `Hi ${username}!`
}

const savedUsername = localStorage.getItem("username")

if(savedUsername === null) {
    loginForm.classList.remove("hidden")
    loginForm.addEventListener("submit", onLoginFormSubmit)
}
else {
    loginGreet.classList.remove("hidden")
    greetString(savedUsername)
}