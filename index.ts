const numEl = document.getElementById("inputNum") as HTMLInputElement

const result = document.getElementById("result") as HTMLParagraphElement
 
const theNumber = Math.floor(Math.random() * 100) + 1

console.log(theNumber)

function guess() {
    const guessNumber: number = numEl.valueAsNumber
    if (isCorrect(guessNumber)) {
        result.innerText = "Eltaláltad"
    } else {
        if (guessNumber < theNumber) {
            result.innerText = "A gondolt szám nagyobb."
        } else {
            result.innerText = "A gondolt szám kisebb"
        }
    }
}

function isCorrect(guessNumber: number) :boolean {
    return guessNumber === theNumber;
}