const section = document.querySelector(".container");
section.appendChild(document.createElement("div"));
const div = section.querySelector("div");

const elements = [
    {tag: "p", texto: "Frase 1"},
    {tag: "div", texto: "Frase 2"},
    {tag: "footer", texto: "Frase 3"},
    {tag: "section", texto: "Frase 4"}
]

let tag;
let tagValue;

for (let i = 0; i < elements.length; i++){
    tag = elements[i].tag;
    tagValue = elements[i].texto;
    div.appendChild(document.createElement(tag));
    let tagSelected = div.querySelector(tag);
    tagSelected.innerHTML += tagValue;
}