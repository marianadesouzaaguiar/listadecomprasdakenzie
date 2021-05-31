let input = document.getElementById("item-input");
let button = document.getElementById("btnAdicionar");
let ul = document.getElementById("resposta");
let items = document.getElementsByTagName("li");



function adicionarItem(){
    let li = document.createElement("li");
    let xButton = document.createElement("button");
    xButton.innerHTML = "X";
    xButton.className = "remove";


    li.appendChild(xButton);

    document.createTextNode(input.value)



    ul.appendChild(li);
    input.value = "";

}

function buttonEvents() {
    for (let i =0, i < items.length, i++)
}

button.addEventListener("click", adicionarItem);
