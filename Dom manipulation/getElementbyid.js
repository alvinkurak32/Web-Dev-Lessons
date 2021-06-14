// document.getElementByid();
console.log(document.getElementById('task-title'));

// get thing from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// change styling
taskTitle.style.background = 'cyan';
taskTitle.style.color = 'grey';
taskTitle.style.padding = '5px';

// change content
taskTitle.textContent = 'Task Lists';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color: red">Task Lists</span>';

// document.querySelector();
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li');
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li: last-child').style.color = 'red';
document.querySelector('li: nth-child(3)').style.color = 'green';
document.querySelector('li: nth-child(4)').textContent = 'Hello World';
document.querySelector('li: nth-child(odd)').style.background = 'lime';
document.querySelector('li: nth-child(even)').style.background = 'yellow';
