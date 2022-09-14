let homeScore = document.getElementById("score-1")
let homeDefault = 0
let guestScore = document.getElementById("score-2")
let guestDefault = 0

//Functions for the Home Counter
function homePlusOne() {
    homeDefault += 1
    homeScore.textContent = homeDefault
}

function homePlusTwo() {
    homeDefault += 2
    homeScore.textContent = homeDefault
}

function homePlusThree() {
    homeDefault += 3
    homeScore.textContent = homeDefault
}

//Functions for the Guest Counter
function guestPlusOne() {
    guestDefault += 1
    guestScore.textContent = guestDefault
}

function guestPlusTwo() {
    guestDefault += 2
    guestScore.textContent = guestDefault
}

function guestPlusThree() {
    guestDefault += 3
    guestScore.textContent = guestDefault
}

//Restart Score Botton Function
function restartScore() {
    homeDefault = 0
    guestDefault = 0
    homeScore.textContent = homeDefault
    guestScore.textContent = guestDefault
}