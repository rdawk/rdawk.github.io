let applyChangesButton = document.getElementById('applyChanges');
let addTodoButton = document.getElementById('addTodo');
let nameInput = document.getElementById('nameInput');
let messageInput = document.getElementById('messageInput');
let bgColorSelect = document.getElementById('bgColor');
let todoInput = document.getElementById('todoInput');
let todoList = document.getElementById('todoList');
let greeting = document.getElementById('greeting');
let message = document.getElementById('message')

function applyChanges() {
    let userName = nameInput.value;
    let userMessage = messageInput.value;
    let bgColor = bgColorSelect.value;

    if (userName !== "") {
        greeting.textContent = "Hello " + userName + "!";
    } else {
        greeting.textContent = "Hello User!";
    }

    if (userMessage !== "") {
        message.textContent = userMessage;
    } else {
        message.textContent = "Welcome to your custom page.";
    }

    document.body.style.backgroundColor = bgColor;

    console.log("Name entered:", userName);
    console.log("Message entered:", userMessage);
    console.log("Background color selected:", bgColor);
}
function addTodo() {
    let todoInputValue = todoInput.value;
    

    if (todoInputValue !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = todoInputValue;
        todoList.appendChild(listItem);
        todoInput.value = "";

        console.log("To-Do Item Entered:", todoInputValue);
        console.log("Updated To-Do List:", todoList.innerHTML);
    } else {
        alert("Please enter a to-do item!");
    }
}

applyChangesButton.onclick = applyChanges;
addTodoButton.onclick = addTodo;