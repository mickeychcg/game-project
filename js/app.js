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

// Global Variable Arrays for decks
var fullDeck = [];
var gameDeck = [];
// var cardArr = [];

// Nested for-loop to create the fullDeck of 81 cards
for (var i = 0; i < cardShape.length; i++) {
  for (var j = 0; j < cardColor.length; j++) {
    for (var k = 0; k < cardFill.length; k++) {
      for (var l = 0; l < cardSize.length; l++)

        fullDeck.push(cardShape[i] + '-' + cardColor[j] + '-' + cardFill[k] + '-' + cardSize[l]);
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
shuffle(fullDeck);
// console.log(deck);
// Splice a dozen cards into a new array for the gameBoard
var cardsToLoad = fullDeck.splice(fullDeck.length - 80, 12);
// console.log(cardsToLoad);
// cardsToLoad is an array of card elements (e.g., "diamond-red-solid-1"), I want to map each element
// to correspondingly named PNG files located in the ./img directory (e.g., ".img/diamond-red-solid-1.png")
// then load that array to the DOM with document.getElementById for each of the 12 gameBoard locations

var gameBoardCards = function () {
  for (let cardArr of cardsToLoad)
    gameDeck.push("./img/" + cardArr + ".png");
}
gameBoardCards();

document.addEventListener('DOMContentLoaded', function () {
  //iterate through the gameDeck array.
  for (let x = 0; x < gameDeck.length; x++) {
    //create an img tag for each gameDeck element
    var imgElement = document.createElement("img");
    //set the source of the img tag to be the current gameDeck element (which will be a URI of a png file)
    imgElement.src = gameDeck[x];
    //target the div with id "card(x + 1)" 
    var cardId = "card" + (x + 1);
    var cardElement = document.getElementById(cardId);
    //append the img tag to the card element
    cardElement.appendChild(imgElement);
  }
  //log the HTML to the console to check it
  console.log(document.getElementById('flexBoard').innerHTML);
});

let loadedImage = [];

function preloadImages(urls, allImagesLoadedCallback) {
  let loadedCounter = 0;
  let toBeLoadedNumber = urls.length;
  urls.forEach(function (url) {
    preloadImage(url, function () {
      loadedCounter++;
      console.log(`Number of loaded images: ${loadedCounter}`);
      if (loadedCounter == toBeLoadedNumber) {
        allImagesLoadedCallback();
      }
    });
  });

  function preloadImage(url, anImageLoadedCallback) {
    img = new Image();
    img.src = url;
    img.onload = anImageLoadedCallback;
    loadedImage.push(img);
  }
}

//   // var evaluateCards = function(validSet) {
//   //   // when a player chooses three cards from the game board
//   //   // we assume that it's a SET and proceed to evaluate each
//   //   // property of the three cards, as a separate array of cards
//   //   // using each property in a series of if and if else statements

//   //   if this.playerSelection[1] === this.playerSelection[2]
//   //     && this.playerSelection[2] === this.playerSelection[3]
//   //     && this.playerSelection[1] === this.playerSelection[3]


// });
// // // determine if the set is valid based on the

// // var card = function Card(cardShape, cardColor, cardSize, cardFill) {
// //   this.id = cardshape + '-' + cardColor + '-' + cardfill + '-' + cardNumber;
// //   this.shape = shape;
// //   this.color = color;
// //   this.fill = fill;
// //   this.number = number;