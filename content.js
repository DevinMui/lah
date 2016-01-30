var xhr = new XMLHttpRequest();
xhr.open("GET", "http://b8dec271.ngrok.io", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);