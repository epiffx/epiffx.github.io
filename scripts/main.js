var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('.cl1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

document.querySelector('#id1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

/*
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}
*/

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo.png') {
      myImage.setAttribute ('src','images/mail.png');
    } else {
      myImage.setAttribute ('src','images/logo.png');
    }
}



function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

var myButt = document.querySelector('button');
var myHead = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}



myButt.onclick = function() {
/*setUserName();*/

var rad1 = document.getElementsByName('r1');

for (var i = 0; i < rad1.length; i++) {

        if (rad1[i].type == "radio" && rad1[i].checked) {
	myHead.textContent = 'Mozilla is cool, ' + rad1[i].value;
        }
    }
}

/*
alert(multiply(4,7));
alert(multiply(20,20));
alert(multiply(0.5,3));
*/