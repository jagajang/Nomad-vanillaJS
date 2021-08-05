class thingTodo {
    constructor(text, id) {
        this.text = text
        this.id = id
    }
}

const todoForm = document.querySelector("#todo-form")
const todoList = document.querySelector("#todo-list")
let todoLS = []

const message = document.querySelector("#message")
const messageText = message.querySelector("p")

function handleTodoSubmit(event) {
    event.preventDefault()

    const todoInput = todoForm.querySelector("input")
    const newTodo = todoInput.value
    const todoID = "todo-" + Date.now().toString()

    if(todoLS.length < 7) {
        addLi(new thingTodo(newTodo, todoID))
        saveTodo()
    }
    else {
        messageText.innerText = "you cannot add more thing to do!"
        message.classList.remove("hidden")
        setTimeout(function() {message.classList.add("hidden")}, 3000)
    }

    todoInput.value = ""
}

function addLi(newTodo) {
    const newLi = document.createElement("li")
    const newSpan = document.createElement("span")
    const newButton = document.createElement("button")
    
    newLi.append(newButton)
    newLi.append(newSpan)
    
    newLi.id = newTodo.id
    newSpan.innerText = newTodo.text
    newButton.innerText = "X"
    newButton.addEventListener("click", deleteLi)

    todoList.append(newLi)
    todoLS.push(newTodo)
}

function deleteLi(event) {
    const clickedButton = event.srcElement
    console.dir(clickedButton)

    const clickedLi = clickedButton.parentElement
    delID = clickedLi.id

    clickedLi.remove()
    todoLS = todoLS.filter(element => deleteFilter(element, delID))
    saveTodo()
}

function deleteFilter(todo, delID) {
    if(todo.id === delID)
        return false
    return true
}

function saveTodo() {
    localStorage.setItem("todo", JSON.stringify(todoLS))
}

function loadTodo() {
    const stringTodo = localStorage.getItem("todo")

    if(stringTodo != null) {
        const storageList = JSON.parse(stringTodo)
        storageList.forEach(addLi);
    }
}

loadTodo()
todoForm.addEventListener("submit", handleTodoSubmit)