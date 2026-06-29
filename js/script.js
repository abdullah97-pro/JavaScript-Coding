
const div = document.createElement("div");

const h1 = document.createElement("h1");
h1.textContent = "This tag is created inside javascript!";

div.appendChild(h1);

document.body.firstChild(div);