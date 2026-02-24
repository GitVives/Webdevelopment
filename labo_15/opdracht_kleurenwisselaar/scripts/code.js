const setup = () => {
    let button1 = document.getElementById("btn1");
    button1.addEventListener("click", changeButton1);

    let button2 = document.getElementById("btn2");
    button2.addEventListener("click", changeButton2);

    let button3 = document.getElementById("btn3");
    button3.addEventListener("click", changeButton3);
}

const changeButton1 = () => {
    let button1 = document.getElementById("btn1");
    button1.classList.toggle("change");
}

const changeButton2 = () => {
    let button2 = document.getElementById("btn2");
    button2.classList.toggle("change");
}

const changeButton3 = () => {
    let button3 = document.getElementById("btn3");
    button3.classList.toggle("change");
}

window.addEventListener("load", setup);