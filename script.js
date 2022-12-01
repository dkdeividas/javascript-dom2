const my_container = document.querySelector('.container'); // pasiimu class
console.log(my_container);

const my_button = document.querySelector('button'); // pasiimu html tag
console.log(my_button);
console.log(my_button.innerText); // issitraukiam teksta is button

// pasiimu id
//const my_input = document.getElementById('my_input');  // du skirtingi budai
const my_input = document.querySelector('#my_input');
console.log(my_input);
//my_input.placeholder = "iveskite varda..."            // du skirtingi budai
my_input.setAttribute("placeholder", "iveskite varda...");

const getName = (e) => {
    e.prevenDefault();
    // tikrinti ar ne tuscias ir min simbolius 3
    if(my_input.value.length < 3){
        alert("Vardas turi buti 3 ir daugiau simboliu")
    }
    console.log(my_input.value);
    // isvalyti input lauka
    my_input.value = ('');
}
