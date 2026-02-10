const setup = () => {

    const welkom = () => {
        let pElement=document.getElementById("txtOutput");
        pElement.innerHTML="Welkom!";
    }

    let btn=document.getElementById("btn");
    btn.addEventListener("click", welkom );
}

window.addEventListener("load", setup);