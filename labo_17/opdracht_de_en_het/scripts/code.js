const setup = () => {
    vervangDe();
}

const vervangDe = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let start = "";

    for (let i = 0; i <= zin.length; i++) {
        if (i === zin.length || zin[i] === " ") {
            let woord = zin.substring(start, i);

            if (woord === "de") {
                console.log("het");
            } else {
                console.log(woord);
            }

            start = i + 1;
        }
    }


}

window.addEventListener("load", setup);