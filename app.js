let btn = document.querySelector('button');
btn.addEventListener("click", makeChanges);

function makeChanges() {
    let input = document.querySelector('input');
    let text = input.value.trim();
    if (text === "") return;

    let ul = document.querySelector('ul');

    let newli = document.createElement('li');
    newli.innerText = text;


    let delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    delBtn.addEventListener("click", function () {
        ul.removeChild(newli);
    });

    newli.appendChild(delBtn);

    ul.appendChild(newli);

    input.value = "";
}
