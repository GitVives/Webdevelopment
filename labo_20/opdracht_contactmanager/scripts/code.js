let select = document.getElementById('lstPersonen');
let inputFields = document.getElementsByClassName('invalid');
let errorMessages = document.getElementsByClassName('errorMessage');

let voornaamInput = document.querySelector('#txtVoornaam');
let familienaamInput = document.querySelector('#txtFamilienaam');
let emailInput = document.querySelector('#txtEmail');
let geboortedatumInput = document.querySelector('#txtGeboorteDatum');
let aantalKinderenInput = document.querySelector('#txtAantalKinderen');

const bewaarBewerktePersoon = () => {

    valideer();

    if (inputFields.length === 0 && select.selectedIndex === -1) {

        let persoon = {
            voornaam: voornaamInput.value,
            familienaam: familienaamInput.value,
            email: emailInput.value,
            geboortedatum: geboortedatumInput.value,
            aantalKinderen: aantalKinderenInput.value,
        }

        let option = document.createElement("option");
        option.textContent = `${persoon.voornaam} ${persoon.familienaam}`;
        option.value = JSON.stringify(persoon);

        select.appendChild(option);
    }

    if (select.selectedIndex !== -1) {
        let selectedOption = select.options[select.selectedIndex];
        let selectedPerson = JSON.parse(selectedOption.value);

        selectedPerson.voornaam = voornaamInput.value;
        selectedPerson.familienaam = familienaamInput.value;
        selectedPerson.email = emailInput.value;
        selectedPerson.geboortedatum = geboortedatumInput.value;
        selectedPerson.aantalKinderen = aantalKinderenInput.value;

        selectedOption.value = JSON.stringify(selectedPerson);

        selectedOption.textContent = `${selectedPerson.voornaam} ${selectedPerson.familienaam}`;
    }
};

const bewerkNieuwePersoon = () => {
    voornaamInput.value = "";
    familienaamInput.value = "";
    geboortedatumInput.value = "";
    emailInput.value = "";
    aantalKinderenInput.value = "";

    for (let i = 0; i < inputFields.length; i+1) {
        inputFields[i].classList.remove('invalid');
    }

    for (let i = 0; i < errorMessages.length; i++) {
        errorMessages[i].innerHTML = "";
    }

    select.selectedIndex = -1;
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");

    lstPersonen.addEventListener("change", () => {

        let selectedOption = lstPersonen.options[lstPersonen.selectedIndex];

        let selectedPerson = JSON.parse(selectedOption.value);

        voornaamInput.value = selectedPerson.voornaam;
        familienaamInput.value = selectedPerson.familienaam;
        emailInput.value = selectedPerson.email;
        geboortedatumInput.value = selectedPerson.geboortedatum;
        aantalKinderenInput.value = selectedPerson.aantalKinderen;
    })
};

window.addEventListener("load", setup);