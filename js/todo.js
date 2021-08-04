class thingTodo {
    constructor(text, id) {
        this.text = text
        this.id = id
    }
}

const todoForm = document.querySelector("#todo-form")
const todoList = document.querySelector("#todo-list")
let todoLS = []

function handleTodoSubmit(event) {
    event.preventDefault()

    const todoInput = todoForm.querySelector("input")
    const newTodo = todoInput.value
    const todoID = Date.now().toString()

    addLi(new thingTodo(newTodo, todoID))
    saveTodo()

    todoInput.value = ""
}

function addLi(newTodo) {
    const newLi = document.createElement("li")
    const newSpan = document.createElement("span")
    const newButton = document.createElement("button")

    newLi.append(newSpan)
    newLi.append(newButton)

    newLi.id = newTodo.id
    newSpan.innerText = newTodo.text
    newButton.innerText = "Delete"
    newButton.addEventListener("click", deleteLi)

    todoList.append(newLi)
    todoLS.push(newTodo)
}

function deleteLi(event) {
    const clickedLi = event.srcElement.parentElement

    delID = clickedLi.id

    console.log(delID)
    console.log(todoLS)

    clickedLi.remove()

    todoLS = todoLS.filter(element => deleteFilter(element, delID))
    saveTodo()
}

function deleteFilter(todo, delID) {
    console.log(todo.id, delID)
    if(todo.id === delID) {
        return false
    }

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