let val;
val = document;
val = document.all;
val = document.all[2];
val = document.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
val = document.domain;
// forms
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;
// link
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;
val = document.links[0].classList[0];
// images
val = document.images;
// scripts
val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

console.log(scriptsArr);


scriptsArr.forEach(function(script) {
    console.log(script);
});

scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
});


console.log(val);