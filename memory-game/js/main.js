console.log("Up and running!");

/*
let cardOne = "queen";
let cardTwo = "queen";
let cardThree = "king";
let cardFour = "king";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
*/

let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
}
];


let cardsInPlay = [];

function checkForMatch(){
if(cardsInPlay.length == 2)	{
	if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
}
}

function flipCard(){
//console.log("User flipped " + cards[cardId].rank);
var cardId = this.getAttribute('data-id');
this.setAttribute('src', cards[cardId].cardImage);

cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
checkForMatch();
}

function createBoard(){
for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
	}	
}

createBoard();