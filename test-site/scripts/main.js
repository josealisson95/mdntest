let myImage = document.querySelector('img'); // Seleciona a imagem da página

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src'); //Seleciona o atributo da imagem atual
  if (mySrc === 'images/mozilla-firefox-logo.png') {
    myImage.setAttribute('src', 'images/firefox2.png');
  } else {
    myImage.setAttribute('src', 'images/mozilla-firefox-logo.png');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let userName = prompt('Please, type your name.');
  if (!userName) {
    setUserName();
  } else {
    localStorage.setItem('name', userName);
    myHeading.textContent = 'Seja bem-vindo, ' + userName;
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Seja bem-vindo, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}