const setup = () => {
    let button = document.getElementById("btn");

    button.addEventListener("click", herbereken);
}

const herbereken = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let btws = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let inputs = document.getElementsByClassName("input");
    let output = document.getElementById("totaal");
    let totaal = 0;

    for (let i = 0; i < prijzen.length; i++) {
        let prijs = parseInt(prijzen[i].innerText);
        let btw = parseInt(btws[i].innerText);
        let aantal = parseInt(inputs[i].value);
        let result;

        result = (prijs + (prijs * (btw/100))) * aantal;
        subtotalen[i].innerText = result.toFixed(2);
        totaal += result;
    }
    
    output.innerText = totaal.toFixed(2);
}

window.addEventListener("load", setup);