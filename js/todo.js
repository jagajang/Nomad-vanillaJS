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
    newButton.innerText = "Delete"
    newButton.addEventListener("click", deleteLi)

    todoList.append(newLi)
    todoLS.push(newTodo)
}

function deleteLi(event) {
    const clickedButton = event.srcElement
    const clickedLi = clickedButton.parentElement

    clickedLi.remove()
}

function saveTodo() {
    localStorage.setItem("todo", JSON.stringify(todoLS))
}

function loadTodo() {
    const stringTodo = localStorage.getItem("todo")

    if(stringTodo != null) {
        const storageList = JSON.parse(stringTodo)
        for(i = 0; i < storageList.length; i++)
            addLi(storageList[i])
    }
}

loadTodo()
todoForm.addEventListener("submit", handleTodoSubmit)