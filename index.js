let cards = []
let sum = 0
let message = ""
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")

let haveBlackJack = false
let areAlive = false

function startGame() { 
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum

    if(sum<=20) {
        message = "Next Card Please"
    }
    else if(sum===21) {
        message = "Congratulations! You've got a BLACKJACK!"
        haveBlackJack = true
    }
    else {
        message = "Sorry, you're out of turns"
        isAlive = false
    }

    messageEl.textContent = message
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function newCard() {
    if(isAlive === true && haveBlackJack === false) {
        let randNewCard = getRandomCard()
        sum += randNewCard
        cards.push(randNewCard)
        renderGame()        
    }
}