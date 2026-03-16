const setup = () => {
    const button = document.getElementById("button");
    button.addEventListener('click', toonResultaat);
}

const toonResultaat = () => {
    const isRoker = document.getElementById('roker').checked;

    const moedertaal = document.querySelector('input[name="moedertaal"]:checked');
    const moedertaalValue = moedertaal.value;

    const favorieteBuurland = document.getElementById('favorieteBuurland').value;

    const bestellingen = document.getElementById('bestelling');
    const bestelling = [];

    for(let optie of bestellingen.selectedOptions) {
        bestelling.push(optie.value);
    }

    if(isRoker) {
        console.log("Is een roker.");
    } else {
        console.log("Is geen roker.");
    }

    console.log("moedertaal is " + moedertaalValue);

    console.log("favoriete buurland is " + favorieteBuurland);

    console.log("bestelling is: " + bestelling);
}

window.addEventListener("load", setup);