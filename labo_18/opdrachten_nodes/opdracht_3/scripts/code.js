const setup = () => {
    let button = document.getElementById("btn");
    button.addEventListener('click', methode);
}

const methode = () => {
    let p = document.createElement('p');
    p.innerText = 'Dit is een nieuw p-element';

    let div = document.querySelector('#myDIV');
    div.appendChild(p);
}

window.addEventListener("load", setup);