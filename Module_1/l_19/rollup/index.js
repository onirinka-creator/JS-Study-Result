import "./index.css"
import logo from './assets/react.png';

console.log('Hello World!!!!');
console.log(logo);

const header = document.createElement('h1');
header.textContent = 'i love javascript';
const reactImg = document.createElement('img');
reactImg.src = logo;
document.body.append(header);
document.body.append(reactImg);
