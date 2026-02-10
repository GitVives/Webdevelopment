const setup = () => {

    const substring = () => {
        let txtLinks = document.getElementById("txtLinks");
        let txtRechts = document.getElementById("txtRechts");
        let txtRechts2 = document.getElementById("txtRechts2");

        let string = txtLinks.value;
        let waarde1 = txtRechts.value;
        let waarde2 = txtRechts2.value;

        let txtOutput = document.getElementById("txtOutput");
        let output = string.substring(waarde1, waarde2);
        txtOutput.innerHTML = output;
    }

    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);
}

window.addEventListener("load", setup);