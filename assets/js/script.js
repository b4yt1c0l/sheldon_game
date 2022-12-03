/*** Obtain a list of matches - ref.: MDN */
const selButtons = document.querySelectorAll("button");

/*** Human player selection element into the document */
let humanSel = document.getElementById('human_choice');

/*** Variables to store human player selection value */
let human;

/*** Variables to store machine player selection value */
let machine;

/*** Function to generate random selection for machine player */
function rand_selection() {
    let randSel = Math.floor((Math.random() * 5) + 1);

    if (randSel === 1) {
        machine = 'rock';
    } else if (randSel === 2) {
        machine = 'paper';
    } else if (randSel === 3) {
        machine = 'scissor';
    } else if (randSel === 4) {
        machine = 'lizard';
    } else {
        machine = 'spock';
    }

    /*** Machine player random selection element into the document */
    const machineSel = document.getElementById('machine_choice');
    machineSel.innerHTML = machine;

}

//rand_selection();


function result() {

}

function score() {

}
