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

function flipCard(cardId){
console.log("User flipped " + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
checkForMatch();
}

flipCard(0);
flipCard(2);


