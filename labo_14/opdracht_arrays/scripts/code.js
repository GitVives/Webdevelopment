const setup = () => {
    const familieleden = ['a' , 'b' , 'c' , 'd' , 'e' , 'f'];

    console.log(familieleden.length);
    console.log(familieleden[0], familieleden[2], familieleden[4]);

    const VoegNaamToe = () => {
        let newItem = prompt('What do you want to add?');
        familieleden.push(newItem);
        console.log(familieleden);
    }

    VoegNaamToe();

    console.log(familieleden.join(" - "));
}

window.addEventListener("load", setup);