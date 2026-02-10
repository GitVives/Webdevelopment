const setup = () => {

    const kopieer = () => {
        let txtInput = document.getElementById("txtInput");
        let tekst = txtInput.value;
        let pElement = document.getElementById("txtOutput");
        pElement.innerHTML = tekst;
    }

    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}

window.addEventListener("load", setup);