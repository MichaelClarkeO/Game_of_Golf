//Global call 
let $hands = $('.computer_hand')
let $hands2 = $('.player_hand')
let $spot = $('.empty_spot')
let $deck = $('.game_deck')
$spot.html("")
let slotCard = $spot.text()
let $callGame = $('#call_game')
console.log($hands);
let discarded = []
let player1 = []
let player2 = []
//Creating the Deck
function makeDeck() {
    const suits = ['♠', '♣', '♥', '♦']
    let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1]
    let fullDeck = [];
            
     for (let i = 0; i < 4; i++) {
     for (let j =0; j < 13; j++) {
       let card = {
           suit: suits[i],
           card: cards[j],
           value: values[j]
       }
        fullDeck.push(card)
     }
    }
    return fullDeck;
}
// Creating a shuffle code 
function shuffleDeck(fullDeck) {
for (let index = 0; index < fullDeck.length; index++) {
    let card = fullDeck[index];
    let randomCard = Math.floor(Math.random() * 52);
    fullDeck[index] = fullDeck[randomCard];
    fullDeck[randomCard] = card
    }
}
//Randomly selecting a card to display
function draw() {
let tryDeck = makeDeck();
shuffleDeck(tryDeck);
let hint = tryDeck[Math.floor(tryDeck.length * Math.random())]
$spot.html(hint.card + hint.suit)
slotCard = $spot.text() 
discarded.push(hint)
}
//Draw the card on a click
$deck.click(function(){
    draw()  
}) 

// add that card to my hand
// have that card replace the existing card 
//card that was moved would disappear or show previous card
$hands.click(function(){
    let currentCard = $spot.text()
    $(this).text(currentCard)
    let getLater = discarded.pop()
    player1.push(getLater)
    if (discarded.length > 0 ) {
     $spot.html(discarded[discarded.length - 1])   
    }
    else { $spot.html('')
    alert("Player 2 turn")
}

})

$hands2.click(function(){
    let currentCard = $spot.text()
    $(this).text(currentCard)
    let getLater = discarded.pop()
    player2.push(getLater)
    if (discarded.length > 0 ) {
     $spot.html(discarded[discarded.length - 1])   
    }
    else { $spot.html('')}
    alert("Player 1 turn")
})

$callGame.click(function(){
    let player1score = 0 
    for (let index = 0; index < player1.length; index++) {
        player1score += player1[index].value 
        
    }
    let player2score = 0 
    for (let index = 0; index < player2.length; index++) {
        player2score += player2[index].value 
        
    }



// next player's turn
// repeat until someone calls game
// ends game when someone calls game 

console.log('call_game', player1score, player2score);
    if (player1score === player2score) {
        console.log("Its a Draw");
        alert("IT'S A DRAW!!!")
    } else if (player1score > player2score) {
        console.log("PLayer 2 wins");   
        alert("PLAYER 2 WINS " + "SCORE " + player2score)
    } else {
        console.log("PLayer 1 wins")
        alert("PLAYER 1 WINS " + "SCORE " + player1score)
    }
    
    })

//   $("#Restart").click(function () {
//       restartGame();

//   })
   