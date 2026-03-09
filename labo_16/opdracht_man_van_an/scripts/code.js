const setup = () => {
    let btn = document.getElementById("btn");
    btn.addEventListener("click", telSequentie);
}

const telSequentie = () => {
    let txt = document.getElementById("txt");
    let string = txt.value.toLowerCase();
    let zoek = "an";
    let positie = string.indexOf(zoek);
    let count = 0;

    while (positie !== -1){
        count++;
        positie = string.indexOf(zoek, ++positie)
    }

    console.log(count);
}

window.addEventListener("load", setup);