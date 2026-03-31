const setup = () => {
    methode();
}

const methode = () => {
    let birthDate = new Date("1970-01-01")

    let today = new Date();

    let diffTime = today - birthDate;

    let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    console.log("Aantal dagen: " + diffDays);
}

window.addEventListener("load", setup);