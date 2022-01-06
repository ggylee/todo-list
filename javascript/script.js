// SELECTORS

const taskDate = document.querySelector("#new-task-date")
const taskInput = document.querySelector("#new-task-input");
const taskSubmit = document.querySelector("#new-task-submit");
const todoList = document.querySelector(".todo-list");
const filterItems = document.querySelector(".filter-items");


// EVENT LISTENERS

taskSubmit.addEventListener('click', addToDo);
//todoList.addEventListener('click', deleteCheckEdit);


// FUNCTIONS

let counter = 666;
const todos = [];

//dateArray = [];

function addToDo(event) {
    event.preventDefault();

    if (taskDate.value === "") {
        alert("Please add a date");
        return;
    }

    if (taskInput.value === "") {
        alert("Please add a task");
        return;
    }

    addTodoToArray();
    render();
};

function render() {
    // read from the array todos and display all todo elements in html
    // TODO DIV

    todoList.innerHTML = "";

    for (let i = 0; i < todos.length; i++) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todoDiv");
    
        //const taskDateNum = taskDate.value.split('-')[2];
    
        const task = document.createElement("li");
        task.classList.add("todo-task");
        task.innerText = todos[i].myDate + ": " + todos[i].description;
        todoDiv.appendChild(task);
    
        //dateArray.push(taskDateNum);
        //console.log(dateArray[0]);
        //console.log(todos[0].myDate + ": " + todos[0].description);
    
        const editButton = document.createElement("button");
        editButton.classList.add("edit-button");
        editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>';
        editButton.addEventListener('click', editTodoInArray);
        todoDiv.appendChild(editButton);
    
        const checkButton = document.createElement("button");
        checkButton.classList.add("check-button");
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        checkButton.addEventListener('click', checkTodo)
        todoDiv.appendChild(checkButton);
    
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        // add onclick event to call deleteTodo(myId)
        deleteButton.addEventListener('click', function() {deleteTodoFromArray(todos[i].todoId)});
        // <button id="todo143" @on:click="deleteTodo(todo143)">
        todoDiv.appendChild(deleteButton);

        todoList.appendChild(todoDiv);
        taskInput.value = "";
        taskDate.value = "";
    }

    console.log(todos);
}

function dateFormat(date) {
    return date.split("-").reverse().join("/");
}

function addTodoToArray() {
    // add to the array

    const newObj = {
        todoId: counter += 1,
        myDate: dateFormat(taskDate.value),
        description: taskInput.value
    }
    todos.push(newObj);

    // SORT ORDER OF ARRAY BY DATE HERE??

    render();
}

function deleteTodoFromArray(todoIdIClickedOnToDelete) {
    // remove from the array
    console.log("Delete", todoIdIClickedOnToDelete)

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].todoId === todoIdIClickedOnToDelete) {
            todos.splice(i, 1)
        }
    }

    render();

    // const todoDate = todo.path[1].innerText.split(": ")[0];
    // const todoDescrip = todo.path[1].innerText.split(": ")[1];
    // //console.log(todoDate)
    // //console.log(todoDescrip)

    // for (let i = 0; i < todos.length; i++) {
    //     if (todos[i].myDate === todoDate && todos[i].description === todoDescrip) {
    //         todos.splice(i, 1)
    //     };
    // }

    // render();
}

function checkTodo(e) {
    console.log("Check")
    //console.log(todo.path[1].innerText.strike());

    const todoItem = e.target;
    console.log(todoItem.parentElement)
    
    const todo = todoItem.parentElement;
    todo.classList.toggle('completed');
}

function editTodoInArray(todoId, newDescription) {
    console.log("Edit")

}


// function deleteCheckEdit(e) {
//     const taskItem = e.target;
//     console.log(taskItem.parentElement.innerText )

//     if (taskItem.classList[0] === "delete-button") {
//         const todo = taskItem.parentElement;
//         todo.classList.add("delete-animation");
//         todo.addEventListener('transitionend', function() {
//             todo.remove();
//             //deleteTodoFromArray();
//         });
//     };

//     if (taskItem.classList[0] === "check-button") {
//         const todo = taskItem.parentElement;
//         todo.classList.toggle('completed');
//     };

//     // Edit button functionality
// };


// Function to filter tasks
function filterList() {

};
