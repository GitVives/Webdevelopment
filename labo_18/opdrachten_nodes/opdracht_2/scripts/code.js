const setup = () => {
    methode();
}

const methode = () => {
    let li = document.querySelectorAll('li');

    for (let i = 0; i < li.length; i++) {
        li[i].classList.add('listitem');
    }

    let img = document.createElement('img');
    img.setAttribute("src", "/labo_18/opdrachten_nodes/opdracht_2/images/profile_picture.jpg");

    let body = document.querySelector('body');
    body.appendChild(img);
}

window.addEventListener("load", setup);