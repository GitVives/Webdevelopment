const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", print);
}

const print = () => {
    let txt = document.getElementById("txt");
    let output = "";

    let string = txt.value;

    let result = string.split("").filter((word) => word !== " ");

    for (let i = 0; i < result.length; i++) {
        output += result[i] + " ";
    }

    console.log(output);
}

window.addEventListener("load", setup);