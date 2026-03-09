const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", start);
}

const start = () => {
    let txt = document.getElementById("txt");
    let inputText = txt.value;
    let output = maakMetSpaties(inputText);
    console.log(output);
}

const maakMetSpaties = (inputText) => {
    let output = "";

    let result = inputText.split("").filter((word) => word !== " ");

    for (let i = 0; i < result.length; i++) {
        output += result[i] + " ";
    }

    return output;
}

window.addEventListener("load", setup);