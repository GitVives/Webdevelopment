const setup = () => {

    let sliders = document.getElementsByClassName("slider");
    let button = document.getElementById('button');

    let lastSliderSettings = JSON.parse(localStorage.getItem("recentRGB"));

    if (lastSliderSettings !== null) {
        sliders[0].value = lastSliderSettings.r;
        sliders[1].value = lastSliderSettings.g;
        sliders[2].value = lastSliderSettings.b;
    }

    updateColor();

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("input", updateColor);
    }

    button.addEventListener("click", saveColor);

    loadSavedColors();
}

const updateColor = () => {
    let sliders = document.getElementsByClassName("slider");
    let colorDemos = document.getElementsByClassName("colorDemo");

    colorDemos[0].style.backgroundColor = `rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`;

    let lastSliderSettings = {
        r: sliders[0].value,
        g: sliders[1].value,
        b: sliders[2].value
    };

    localStorage.setItem("recentRGB", JSON.stringify(lastSliderSettings));
}

const createColorElement = (color, index) => {
    let list = document.getElementById("colorList");
    let div = document.createElement("div");

    div.className = "colorDemo";
    div.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;

    div.dataset.red = color.r;
    div.dataset.green = color.g;
    div.dataset.blue = color.b;

    let sliders = document.getElementsByClassName("slider");

    div.addEventListener("click", () => {
        sliders[0].value = color.r;
        sliders[1].value = color.g;
        sliders[2].value = color.b;
        updateColor();
    });

    let deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "X";
    div.appendChild(deleteButton);

    deleteButton.addEventListener("click", (e) => {
        e.stopPropagation();
        list.removeChild(div);

        let saved = JSON.parse(localStorage.getItem("savedColorsArray")) || [];
        saved.splice(index, 1);
        localStorage.setItem("savedColorsArray", JSON.stringify(saved));

        loadSavedColors();
    });

    list.appendChild(div);
}

const saveColor = () => {
    let sliders = document.getElementsByClassName("slider");

    let color = {
        r: sliders[0].value,
        g: sliders[1].value,
        b: sliders[2].value
    };

    let savedColorsArray;

    let storedColors = localStorage.getItem("savedColorsArray");

    if (storedColors !== null) {
        savedColorsArray = JSON.parse(storedColors);
    } else {
        savedColorsArray = [];
    }

    savedColorsArray.push(color);

    localStorage.setItem("savedColorsArray", JSON.stringify(savedColorsArray));

    loadSavedColors();
}

const loadSavedColors = () => {
    let list = document.getElementById("colorList");
    list.innerHTML = "";

    let savedColorsArray;

    let storedColors = localStorage.getItem("savedColorsArray");

    if (storedColors !== null) {
        savedColorsArray = JSON.parse(storedColors);
    } else {
        savedColorsArray = [];
    }

    for (let index = 0; index < savedColorsArray.length; index++) {
        createColorElement(savedColorsArray[index], index);
    }
}

window.addEventListener("load", setup);