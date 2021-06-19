let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = listItem;
val = list;

// Get Child Nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeType;


// 1 - Element
// 2 - Attribute (Deprecated)
// 3 - text node
// 8 - Comment
// 9 - Document it self
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello';

// Children of Children
list.children[3].children[0].id = 'test link';
val = list.children[3].children[0];

// first Child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lastChild;
val = list.lastElementChild;

// Count child elements
val - list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// get the next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;



console.log(val);
