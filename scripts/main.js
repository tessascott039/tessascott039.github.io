/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/puppy.jpg') {
        myImage.setAttribute('src', 'images/hokkaido-flowers.jpg');
    } else {
        myImage.setAttribute('src', 'images/puppy.jpg')
    }
}

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'hello ' + myName;
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'sup ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
