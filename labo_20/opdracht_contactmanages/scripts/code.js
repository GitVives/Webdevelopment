let personen = [];

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    valideer();

    let inputFields = document.getElementsByClassName('.invalid');

    if (inputFields.length === 0) {
        let select = document.getElementById('lstPersonen');

        let voornaamInput = document.querySelector('#txtVoornaam');
        let familienaamInput = document.querySelector('#txtFamilienaam');
        let emailInput = document.querySelector('#txtEmail');
        let geboortedatumInput = document.querySelector('#txtGeboorteDatum');
        let aantalKinderenInput = document.querySelector('#txtAantalKinderen');

        let voornaam = voornaamInput.value;
        let familienaam = familienaamInput.value;
        let email = emailInput.value;
        let geboortedatum = geboortedatumInput.value;
        let aantalKinderen = aantalKinderenInput.value;

        let persoon = {
            voornaam: voornaam,
            familienaam: familienaam,
            email: email,
            geboortedatum: geboortedatum,
            aantalKinderen: aantalKinderen
        }

        let option = document.createElement("option");
        option.textContent = `${voornaam} ${familienaam}`;
        option.value = JSON.stringify(persoon);

        select.appendChild(option);
    }

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

const bewerkNieuwePersoon = () => {
    let inputVoornaam = document.querySelector('#txtVoornaam');
    inputVoornaam.value = "";

    let inputFamilienaam = document.querySelector('#txtFamilienaam');
    inputFamilienaam.value = "";

    let inputGeboorteDatum = document.querySelector('#txtGeboorteDatum');
    inputGeboorteDatum.value = "";

    let inputEmail = document.querySelector('#txtEmail');
    inputEmail.value = "";

    let inputAantalKinderen = document.querySelector('#txtAantalKinderen');
    inputAantalKinderen.value = "";

    let inputFields = document.getElementsByClassName('invalid');

    for (let i = 0; i < inputFields.length; i+1) {
        inputFields[i].classList.remove('invalid');
    }

    let errorMessages = document.getElementsByClassName('errorMessage');

    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].innerHTML = "";
    }
};


const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);