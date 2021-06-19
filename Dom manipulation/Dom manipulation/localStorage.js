// Set local storage item

localStorage.setItem('name', 'john');
localStorage.setItem('age', '30');

// Set session storage item
sessionStorage.setItem('name', 'Beth');

// Remove from storage
localStorage.removeItem('name');
localStorage.removeItem('age');

// Get data from local storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');

console.log(name, age);

// Clear local storage
localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e) {
const task = document.getElementById('task').value;
console.log(task);

let tasks;

if(localStorage.getItem('tasks') === null) {
    tasks = [];
} else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

tasks.push(task);

localStorage.setItem('tasks', JSON.stringify(tasks));

alert('Task saved');
tasks.forEach(function(task) {
    console.log(tasks);
});

    e.preventDefault();
});