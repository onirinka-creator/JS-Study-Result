import "./index.css";
import logo from './assets/react.png';

console.log('hiii!');
const title = document.createElement("h1");
title.textContent = "I love JavaScript!";
title.style.color = "white";
const logoElement = document.createElement('img');
logoElement.src = logo;
logoElement.className = 'm_logo';
document.body.append(title, logoElement);