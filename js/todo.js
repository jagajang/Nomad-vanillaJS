class thingTodo {
    constructor(newTodo) {
        this.id = `todo-${newTodo}`
        this.todo = newTodo
    }
}

const todoForm = document.querySelector("#todo-form")
const todoList = document.querySelector("#todo-list")
const todoLS = []

function handleTodoSubmit(event) {
    event.preventDefault()

    const todoInput = todoForm.querySelector("input")
    const newTodo = todoInput.value

    addLi(newTodo)
    saveTodo()

    todoInput.value = ""
}

function addLi(newTodo) {
    const newLi = document.createElement("li")
    const newSpan = document.createElement("span")
    const newButton = document.createElement("button")

    newLi.append(newSpan)
    newLi.append(newButton)

    newSpan.innerText = newTodo
    newSpan.id = `todo-${newTodo}`

    newButton.innerText = "Delete"
    newButton.addEventListener("click", deleteLi)

    todoList.append(newLi)
    todoLS.push(new thingTodo(newTodo))
}

function deleteLi(event) {
    const clickedLi = event.srcElement.parentElement
    //const clickedLi = event.path[1]

    clickedLi.remove()
}

function saveTodo() {
    localStorage.setItem("todo", JSON.stringify(todoLS))
}

function loadTodo() {
    const stringTodo = localStorage.getItem("todo")

    if(stringTodo != null) {
        const storageList = JSON.parse(stringTodo)
        storageList.forEach(element => addLi(element.todo));
    }
}

loadTodo()
todoForm.addEventListener("submit", handleTodoSubmit)