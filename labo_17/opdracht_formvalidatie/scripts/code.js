const setup = () => {
    const button = document.getElementById("button");
    button.addEventListener("click", valideer);
}

function valideer(){

    let allesGoed = true;

    let voornaam = document.getElementById("voornaam");
    let familienaam = document.getElementById("familienaam");
    let geboortedatum = document.getElementById("geboortedatum");
    let email = document.getElementById("email");
    let kinderen = document.getElementById("kinderen");

    let errorVoornaam = document.getElementById("errorVoornaam");
    let errorFamilienaam = document.getElementById("errorFamilienaam");
    let errorGeboortedatum = document.getElementById("errorGeboortedatum");
    let errorEmail = document.getElementById("errorEmail");
    let errorKinderen = document.getElementById("errorKinderen");

    resetField(voornaam, errorVoornaam);
    resetField(familienaam, errorFamilienaam);
    resetField(geboortedatum, errorGeboortedatum);
    resetField(email, errorEmail);
    resetField(kinderen, errorKinderen);

    let v = voornaam.value.trim();
    let f = familienaam.value.trim();
    let g = geboortedatum.value.trim();
    let e = email.value.trim();
    let k = kinderen.value.trim();

    if(v.length > 30){
        setError(voornaam, errorVoornaam, "max. 30 karakters");
        allesGoed = false;
    }

    if(f.length === 0){
        setError(familienaam, errorFamilienaam, "verplicht veld");
        allesGoed = false;
    } else if(f.length > 50){
        setError(familienaam, errorFamilienaam, "max 50 karakters");
        allesGoed = false;
    }

    let isoRegex = /^\d{4}-\d{2}-\d{2}$/;

    if(g.length === 0){
        setError(geboortedatum, errorGeboortedatum, "verplicht veld");
        allesGoed = false;
    } else if(!isoRegex.test(g)){
        setError(geboortedatum, errorGeboortedatum, "formaat is niet jjjj-mm-dd");
        allesGoed = false;
    }

    if(e.length === 0){
        setError(email, errorEmail, "verplicht veld");
        allesGoed = false;
    } else {
        let parts = e.split("@");
        if(parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0){
            setError(email, errorEmail, "geen geldig email adres");
            allesGoed = false;
        }
    }

    let num = Number(k);

    if(k === "" || isNaN(num) || num < 0){
        setError(kinderen, errorKinderen, "is geen positief getal");
        allesGoed = false;
    } else if(num >= 99){
        setError(kinderen, errorKinderen, "is te vruchtbaar");
        allesGoed = false;
    }

    if(allesGoed){
        alert("Proficiat!");
    }
}

function resetField(field, errorField){
    field.classList.remove("invalid");
    errorField.textContent = "";
}

function setError(field, errorField, message){
    field.classList.add("invalid");
    errorField.textContent = message;
}

window.addEventListener("load", setup);