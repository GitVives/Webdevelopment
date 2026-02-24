const setup = () => {


    let sliders = document.getElementsByClassName("slider");

    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);

    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);

    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);
}

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    let colorDemos=document.getElementsByClassName("colorDemo");
    let value=sliders[0].value;
    console.log("de waarde van de slider is momenteel : "+value);
    colorDemos[0].style.backgroundColor= `rgb(${sliders[0].value}, ${sliders[1].value}, ${sliders[2].value})`;
}


window.addEventListener("load", setup);