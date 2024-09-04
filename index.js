"use strict";
const numEl = document.getElementById("inputNum");
const result = document.getElementById("result");
const theNumber = Math.floor(Math.random() * 100) + 1;
console.log(theNumber);
function guess() {
    const guessNumber = numEl.valueAsNumber;
    if (isCorrect(guessNumber)) {
        result.innerText = "Eltaláltad";
    }
    else {
        if (guessNumber < theNumber) {
            result.innerText = "A gondolt szám nagyobb.";
        }
        else {
            result.innerText = "A gondolt szám kisebb";
        }
    }
}
function isCorrect(guessNumber) {
    return guessNumber === theNumber;
}
