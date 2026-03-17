const setup = () => {
    methode();
}

const methode = () => {
    let p = document.querySelectorAll('p')[0];
    p.innerText = 'Goed gedaan!'
}

window.addEventListener("load", setup);