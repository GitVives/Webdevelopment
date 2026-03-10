const setup = () => {
    maakGesorteerdeLijstGemeenten();
}

const maakGesorteerdeLijstGemeenten = () => {
    let gemeenten = [];
    let invoer = "";

    while (invoer !== "stop") {
        invoer = prompt("Geef een gemeente (typ 'stop' om te stoppen):");
        gemeenten.push(invoer);
    }

    gemeenten.sort();

    let opties = document.getElementById("gemeenten");

    for (let i = 0; i < gemeenten.length; i++) {
        opties.innerHTML += '<option value="' + gemeenten[i] + '">' + gemeenten[i] + '</option>';
    }
}

window.addEventListener("load", setup);