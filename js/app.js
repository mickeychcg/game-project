// PSEUDOCODE for SET
// Play occurs between an AI and a player
// Player toggles level of difficulty -  easy, random, hard - FUTURE
// Time to identify SETs is typically between one and three minutes
// Player clicks PLAY SET button - DOM event that stops the AI from grabbing an
// available SET - FUTURE
// When start is pressed the player has x amount of time pick a SET
// otherwise the board is refreshed with new cars the player loses
// a point.
// 18 cards are moved onto the gameboard - DOM event
// Player locates a SET before the AI and clicks the cards that
// represent it - FUTURE
// Game ends with a tally of SETs. Winner has the most. - FUTURE
// SETs are tallied and displayed at the end of the game

// Variables, DOM events, and Functions

// Variables to track: setsOnBoard, cardsInPlay,
// playerScore, aiScore, playerGameScore, aiGameScore,

// DOM events: listener for Difficulty, Start, Again buttons
// Listener for card clicks

// Card attributes are instantiated in CSS 
// Helper Functions
// readGameBoard - evaluates for available SETs 
// moreCards - adds three additional cards to the game board
// startPlay - lays down an initial 18 cards
// again - resets the game to zero cards on the game board and zero score
console.log("wakey wakey");

// Global Variables
var cardShape = ["diamond", "squiggle", "cylinder"];
var cardColor = ["purple", "red", "green"];
var cardFill = ["outline", "filled", "solid"];
var cardSize = [1, 2, 3];
// Global Varible Array for the 81 cards in the deck
var deck = [];

// var cardImage = img src = "img/cardOutline.svg";


// cardImage

// Nested for-loop to create the card deck
// Would like to make the properties of the deck local variables
for (var i = 0; i < cardShape.length; i++) {
  for (var j = 0; j < cardColor.length; j++) {
    for (var k = 0; k < cardFill.length; k++) {
      for (var l = 0; l < cardSize.length; l++)

        deck.push(cardShape[i] + '-' + cardColor[j] + '-' + cardFill[k] + '-' + cardSize[l]);
    }
  }
}

// Fisher-Yates Shuffle algorithm helper function to create unbiased random shuffle
var shuffle = function (s) {
  // assign variable "m" to s Array
  // instantiate two variables "t" and "i" to store randomized array and temporary array
  var m = s.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element and randomize it by decrementing the array index by one and then...
    i = Math.floor(Math.random() * m--);

    // Swap it with the current element.
    t = s[m];
    s[m] = s[i];
    s[i] = t;
    // console.log(s);
  }
}
// Call the Shuffle function on the deck and return the randomized deck to the global variable "deck"
shuffle(deck);
console.log(deck);

// Splice a dozen cards into a new array for the gameboard

var cardsToLoad = deck.splice(deck.length - 80, 12);
// console.log(cardsToLoad);
// if cardsToLoad is an array of card descriptors, I want to map the descriptors
// to SVG graphics, either primitives at run-time, or single SVGs - one per card
// to do so I can take the array and loop it through 
// for property, e.g., color: purple in cardsToLoad 
// document.getElementById

for (var prop in cardsToLoad) {
  console.log(`cardsToLoad.${prop} = ${cardsToLoad[prop]}`);
}

document.addEventListener("DOM Content Loaded", function () {
  card1 = document.getElementById("card1");
  card2 = document.getElementById("card2");
  card3 = document.getElementById("card3");
  card4 = document.getElementById("card4");
  card5 = document.getElementById("card5");
  card6 = document.getElementById("card6");
  card7 = document.getElementById("card7");
  card8 = document.getElementById("card8");
  card9 = document.getElementById("card9");
  card10 = document.getElementById("card10");
  card11 = document.getElementById("card11");
  card12 = document.getElementById("card12");
  card13 = document.getElementById("card13");
  card14 = document.getElementById("card14");
  card15 = document.getElementById("card15");
});

// need a function to pop or splice cards from deck to load onto the gameboard


// var evaluateCards = function(validSet) {
//   // when a player chooses three cards from the game board
//   // we assume that it's a SET and proceed to evaluate each
//   // property of the three cards, as a separate array of cards
//   // using each property in a series of if and if else statements

//   if this.playerSelection[1] === this.playerSelection[2]
//     && this.playerSelection[2] === this.playerSelection[3]
//     && this.playerSelection[1] === this.playerSelection[3]


// }
// // determine if the set is valid based on the 

// var card = function Card(cardShape, cardColor, cardSize, cardFill) {
//   this.id = cardshape + '-' + cardColor + '-' + cardfill + '-' + cardNumber;
//   this.shape = shape;
//   this.color = color;
//   this.fill = fill;
//   this.number = number;
// }