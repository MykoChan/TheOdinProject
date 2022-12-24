const container = document.querySelector("#container");

const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red!";

const h3Header = document.createElement("h3");
h3Header.style.color = "blue";
h3Header.textContent = "I'm a blue h3!";

const blackDiv = document.createElement("div");
blackDiv.style.borderStyle = "solid";
blackDiv.style.borderColor = "black";
blackDiv.style.backgroundColor = "pink";

const h1Header = document.createElement("h1");
h1Header.textContent = "I'm in a div";

const meTooParagraph = document.createElement("p");
meTooParagraph.textContent = "ME TOO!";

blackDiv.appendChild(h1Header);
blackDiv.appendChild(meTooParagraph);

container.appendChild(redParagraph);
container.appendChild(h3Header);
container.appendChild(blackDiv);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
    // console.log(e.target);
    console.log((e.target.style.background = "blue"));
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
