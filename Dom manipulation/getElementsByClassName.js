// document.getElementsByClassName()

const = items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[2]);
items[2].style.color = 'red';
items[3].textContent = 'Hello';


const listItems = document.querySelector('ul').getElementsByClassName('collection-item')

console.log(listItems);

// TagName
document.getElementsByTagName();
let lis = document.getElementsByTagName('li');

console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[0].textContent = 'Hello';

lis = Array.from(lis);

console.log(lis);

lis.reverse();

lis.forEach(function(li, index) {
    console.log(li.className);
    li.textContent = `${index}: hey`
});


// document.querySelectorAll()

const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach(function(item, index) {
    item.textContent = `${index}: hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

console.log(liEven);
console.log(liOdd);

liOdd.forEach(function(li, index) {
    li.style.background = 'purple';
});

liEven.forEach(function(li, index) {
    li.style.background = 'cyan';
});


for(let i = 0; i < liEven; i++) {
    liEven.style.background = 'cyan';
}