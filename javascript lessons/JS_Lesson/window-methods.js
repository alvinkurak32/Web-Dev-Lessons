// WINDOW METHODS / OBJECT / PROPERTIES

// Alert
alert('Hello World');

// Prompt
const input = prompt();
alert(input);

// Confirm
if(confirm('Are you sure?')) {
    console.log('Yes');
} else{
    console.log('No')
}


//  outer height and width
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width
val = window.outerHeight;
val = window.outerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.host;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// redirect
window.location.href = 'https://www.google.com/';

// Reload
window.location.reload();

// Navigation Object
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);