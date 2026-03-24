const setup = () => {

    let sliders = document.getElementsByClassName("slider");
    let button = document.getElementById('button');

    sliders[0].addEventListener("change", updateColor);
    sliders[0].addEventListener("input", updateColor);

    sliders[1].addEventListener("change", updateColor);
    sliders[1].addEventListener("input", updateColor);

    sliders[2].addEventListener("change", updateColor);
    sliders[2].addEventListener("input", updateColor);

    button.addEventListener("click", saveColor);
}

const updateColor = () => {
    let sliders = document.getElementsByClassName("slider");
    let colorDemos= document.getElementsByClassName("colorDemo");

    colorDemos[0].style.backgroundColor= `rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`;
}

const saveColor = () => {
    let sliders = document.getElementsByClassName("slider");

    let r = sliders[0];
    let g = sliders[1];
    let b = sliders[2];

    let list = document.getElementById("colorList");
    let div = document.createElement("div");

    div.className = "colorDemo";
    list.appendChild(div);

    div.dataset.red = r.value;
    div.dataset.green = g.value;
    div.dataset.blue = b.value;

    div.style.backgroundColor = `rgb(${r.value}, ${g.value}, ${b.value})`;

    div.addEventListener("click", () => {
        r.value = div.dataset.red;
        g.value = div.dataset.green;
        b.value = div.dataset.blue;
        updateColor();
    })

    let deleteButton = document.createElement("input");

    deleteButton.type = "button";
    deleteButton.setAttribute("value", "X");
    div.appendChild(deleteButton);

    deleteButton.addEventListener("click", (e) => {
        list.removeChild(div);
        e.stopPropagation();
    })

}

window.addEventListener("load", setup);