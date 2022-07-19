/* --------------------------- Selecting elements --------------------------- */
const todoForm = document.querySelector("#new-todo-form");
const todoInput = document.querySelector("#todo-input");
const todoSubmitBtn = document.querySelector(
    '.new-todo-form button[type="submit"]'
);

let todoTemplate = document.querySelector("#list-item-template");

const todoList = document.querySelector("#list");

/* -------------------------------- Constants ------------------------------- */
const LOCAL_STORAGE_PREFIX = "advancedTodoList";
const todos_storage_key = `${LOCAL_STORAGE_PREFIX}-todos`;

/* --------------- Initial todos rendering from local storage --------------- */
let todos = localStorage.getItem(todos_storage_key);
todos = JSON.parse(todos);
todos.forEach((t) => {
    renderTodo(t);
});

/* -------------------------------------------------------------------------- */
/*          Add tasks to todolist and update todos[] and localstorage         */
/* -------------------------------------------------------------------------- */
todoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (todoInput.value == "") return;

    // creating new todo object
    let newTodo = {
        name: todoInput.value,
        striked: false,
        id: new Date().valueOf().toString(),
    };

    // updating local storage
    todos.push(newTodo);
    localStorage.setItem(todos_storage_key, JSON.stringify(todos));
    console.log(todos);
    localStorage.setItem(todos_storage_key, JSON.stringify(todos));

    // rendering
    renderTodo(newTodo);

    // reset input field
    todoInput.value = "";
});

/* ------------------------------- On strike: ------------------------------- */
// 1) Toggle the state of the todo obj in todos[]
// 2) Toggle the attribute of the list item in the document (by toggling the 'striked' attribute)
// 3) Update local storage
/* -------------------------------------------------------------------------- */
todoList.addEventListener("click", function (e) {
    if (!e.target.matches("[data-list-item-checkbox]")) return;

    // Get that li and add 'striked' to it
    let Li = e.target.closest(".list-item");
    Li.toggleAttribute("striked");

    // updating storage
    let toggleIdx = todos.findIndex((t) => t.id == Li.id);
    todos[toggleIdx].striked = !todos[toggleIdx].striked;
    console.log(todos);
    localStorage.setItem(todos_storage_key, JSON.stringify(todos));
    // save to ls
});

/* ----------------------- On clicking the delete btn: ---------------------- */
// 1) Find the Li containing that btn and remove it from the DOM
// 2) Remove from todos[] the todo object whose id matches that of the li
// 3) update local storage
/* -------------------------------------------------------------------------- */
todoList.addEventListener("click", function (e) {
    if (!e.target.matches("[data-btn-delete]")) return;

    const Li = e.target.closest(".list-item");

    // updating storage
    // remove the todo whose ID matches the li whose delete we just clicked on
    todos = todos.filter((t) => t.id != Li.id);
    console.log(todos);
    localStorage.setItem(todos_storage_key, JSON.stringify(todos));

    // remove from rendered list
    Li.remove();
});

/* ------------------- Renders todo object we pass to it: ------------------- */
// * Creates a clone of the todo list item template, fills its attrbts, text, in
// * Appends the clone to the todo list
/* -------------------------------------------------------------------------- */
function renderTodo(newTodo) {
    let templateClone = todoTemplate.content.cloneNode(true);

    let templateCloneText = templateClone.querySelector(
        "[data-list-item-text]"
    );
    templateCloneText.innerText = newTodo.name;

    let templateCloneLi = templateClone.querySelector(".list-item");
    templateCloneLi.id = newTodo.id;

    if (newTodo.striked) {
        templateCloneLi.setAttribute("striked", "");
    }

    todoList.appendChild(templateClone);
}
