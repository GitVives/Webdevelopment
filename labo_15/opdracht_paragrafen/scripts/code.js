const setup = () => {
    let cssClass = document.getElementsByClassName("belangrijk");
    for (let i = 0; i < cssClass.length; i++) {
        cssClass[i].className = "belangrijk opvallend";
    }
}

window.addEventListener("load", setup);