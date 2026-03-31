const setup = () => {
    methode();
}

const methode = () => {
    let student1 = {
        voornaam: "Jan",
        familienaam: "Janssens",
        geboorteDatum : new Date("1993-12-31"),
        adres : {
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen :
            ["Sofie", "Berta", "Philip", "Albertoooo"],
        aantalAutos : 2
    }

    let str = JSON.stringify(student1);

    console.log(str);

}

window.addEventListener("load", setup);