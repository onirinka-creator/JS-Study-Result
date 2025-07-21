import { getRandomColor } from "./utils.js";

export default function initApp() {
    const button = document.createElement("button");
    button.className = "button";
    button.textContent= "Change page color";
    document.body.append(button);

    button.addEventListener("click", () => {
        document.body.style.backgroundColor = getRandomColor();
    })
}

