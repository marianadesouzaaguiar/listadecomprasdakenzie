let input = document.getElementById("item-input");
let button = document.getElementById("btnAdicionar");
let ul = document.getElementById("resposta");
let items = document.getElementsByTagName("li");
let itemButtons = document.getElementsByClassName("remove")


function adicionarItem(){
    let li = document.createElement("li");
    let xButton = document.createElement("button");
    xButton.innerHTML = "X";
    xButton.className = "remove";


    li.appendChild(xButton);

    let text = document.createTextNode(input.value)

    li.appendChild(text);
    ul.appendChild(li)
    input.value = "";

}

function deleteItem() {
    this.parentElement.remove();

}

function buttonEvents() {
    for (let i = 0; i < itemButtons.length; i++){
        itemButtons[i].addEventListener("click", deleteItem)
    }
}

button.addEventListener("click", adicionarItem);
buttonEvents()
