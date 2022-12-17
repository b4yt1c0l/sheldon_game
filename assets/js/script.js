/*** Obtain a list of matches - ref.: MDN */
const selButtons = document.querySelectorAll('button');

/*** Human player selection element into the document (this needs to be global) */
const humanSel = document.getElementById('human_choice');

/*** Variables to store human player selection value (this needs to be global) */
let human;

/*** Variables to store machine player selection value (this needs to be global) */
let machine;

/***Variables for temp score */
let hscore = 0;
let mscore = 0;

/*** Variables to store result */
let result;


/*** Function to generate random selection for machine player */
function rand_selection() {
    let randSel = Math.floor((Math.random() * 5) + 1);

    if (randSel === 1) {
        machine = 'rock';
    } else if (randSel === 2) {
        machine = 'paper';
    } else if (randSel === 3) {
        machine = 'scissors';
    } else if (randSel === 4) {
        machine = 'lizard';
    } else {
        machine = 'spock';
    }

    /*** Machine player random selection element into the document */
    const machineSel = document.getElementById('machine_choice');
    machineSel.innerHTML = machine;

}

/*** Function to check match result based on human and machine selection */
function evaluation() {


    if (human === 'rock' && machine === 'paper') {
        result = 'You lose!';
    } else if (human === 'rock' && machine === 'scissors') {
        result = 'You win!';
    } else if (human === 'rock' && machine === 'lizard') {
        result = 'You win!';
    } else if (human === 'rock' && machine === 'spock') {
        result = 'You lose!';
    } else if (human === 'paper' && machine === 'rock') {
        result = 'You win!';
    } else if (human === 'paper' && machine === 'scissors') {
        result = 'You lose!';
    } else if (human === 'paper' && machine === 'lizard') {
        result = 'You lose!';
    } else if (human === 'paper' && machine === 'spock') {
        result = 'You win!';
    } else if (human === 'scissors' && machine === 'rock') {
        result = 'You lose!';
    } else if (human === 'scissors' && machine === 'paper') {
        result = 'You win!';
    } else if (human === 'scissors' && machine === 'lizard') {
        result = 'You win!';
    } else if (human === 'scissors' && machine === 'spock') {
        result = 'You lose!';
    } else if (human === 'lizard' && machine === 'rock') {
        result = 'You lose!';
    } else if (human === 'lizard' && machine === 'paper') {
        result = 'You win!';
    } else if (human === 'lizard' && machine === 'scissors') {
        result = 'You lose!';
    } else if (human === 'lizard' && machine === 'spock') {
        result = 'You win!';
    } else if (human === 'spock' && machine === 'rock') {
        result = 'You win!';
    } else if (human === 'spock' && machine === 'paper') {
        result = 'You lose!';
    } else if (human === 'spock' && machine === 'scissors') {
        result = 'You win!';
    } else if (human === 'spock' && machine === 'lizard') {
        result = 'You lose!';
    } else if (human === machine){ 
        result = 'Draw!';
    }

    /*** Result output element into the document */
    const resultOutput = document.getElementById('result_value');
    resultOutput.innerHTML = result;
}

/***Function to check and display score */
function score() {
    if (result === 'You win!') {
        hscore = ++hscore;
    } else if (result === 'You lose!') {
        mscore = ++mscore;
    }
    document.getElementById('human_score').innerHTML = hscore;
    document.getElementById('machine_score').innerHTML = mscore;
}

/*** Main */
selButtons.forEach(sel => sel.addEventListener('click', (btn_click) => {
    human = btn_click.target.id;
    document.getElementById('human_choice').innerHTML = human;
    rand_selection();
    evaluation();
    score();
}));