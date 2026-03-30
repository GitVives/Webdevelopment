const setup = () => {
    bouwSpelbord();
}

let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    eerstekaart: null,
    tweedekaart: null,
    lock: false
};

let afbeeldingen = [
    "kaart1.png",
    "kaart2.png",
    "kaart3.png",
    "kaart4.png",
    "kaart5.png",
    "kaart6.png",
];

let spelbord = document.querySelector('#spelbord');

let kaarten = [...afbeeldingen, ...afbeeldingen];

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

const bouwSpelbord = () => {
    kaarten = shuffle(kaarten);

    for (let i = 0; i < 12; i++) {
        let kaart = document.createElement("div");
        kaart.classList.add("kaart", "verborgen");
        kaart.dataset.afbeelding = kaarten[i];

        let img = document.createElement("img");
        img.src = `images/${kaarten[i]}`;

        kaart.appendChild(img);

        kaart.addEventListener("click", () => {
            klikKaart(kaart);
        });

        spelbord.appendChild(kaart);
        console.log(kaarten[i]);
    }
}

const klikKaart = (kaart) => {
    if (!global.lock || kaart.classList.contains("verborgen"))  {
        kaart.classList.remove("verborgen");
    }

    if (global.eerstekaart === null) {
        global.eerstekaart = kaart;
    } else {
        global.tweedekaart = kaart;
        global.lock = true;

        setTimeout(() => {
            controleerMatch();
        }, 200);
    }
}

const controleerMatch = () => {
    let match = global.eerstekaart.dataset.afbeelding === global.tweedekaart.dataset.afbeelding;

    if (match) {
        global.eerstekaart.classList.add("gevonden");
        global.tweedekaart.classList.add("gevonden");
        resetCards()

        //checkEinde();
    } else {
        global.eerstekaart.classList.add("verborgen");
        global.tweedekaart.classList.add("verborgen");
        resetCards();
    }
}

const resetCards = () => {
    global.eerstekaart = null;
    global.tweedekaart = null;
    global.lock = false;
}



window.addEventListener("load", setup);