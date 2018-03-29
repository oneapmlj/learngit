/*
var myHeading = document.querySelector('h1');
myHeading.innerHTML = "Hello world！";
*/

/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === '../images/baidu.png') {
      myImage.setAttribute ('src','../images/google.png');
    } else {
      myImage.setAttribute ('src','../images/baidu.png');
    }
};

var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');
myButton.onclick = function () {
    setUserName();
};
function  setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.innerHTML = myName + ' is very handsome!';
}