// Replace Element

const newHeading = document.createElement('h2');

// Add Id
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');

// Get parent
const cardAction = document.querySelector('.card-action');

// Replace 
cardAction.replaceChild(newHeading, oldHeading);

// Remove Element
const lis = document.querySelectorAll('li');
const lis = document.querySelector('ul');

// remove list item
lis[0].remove();

// remove child element


// classes & Attr
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

// classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

// attributes
val = link.getAttribute('href');
varl = link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;










console.log(val);