// Global Variables
// Card objects primitives

const cardShape = ["diamond", "squiggle", "cylinder"];
const cardColor = ["purple", "red", "green"];
const cardFill = ["outline", "filled", "solid"];
const cardSize = [1, 2, 3];

// Variables used in helper functions
let cards = [];
let drawnCards = [];
let gameDeck = [];
let selectedCards = [];
let shuffledDeck;
let dealThree = [];
// let selectedSlots = [];

// This calls helper functions to SETUP and START the game

function startGame() {

  fullDeck(); // Returns 81 cards in cards array

  cards = shuffle(cards); // Redefine cards by shuffling the cards array 

  drawnCards = draw(12); // 12 cards from shuffled deck to make up initial game deck

  nameImage(drawnCards); // Assigns img files to deck data array and creates gameDeck array

  createGameCards(drawnCards.length); // Use drawnCards global array and gameDeck global array to create game deck

}

startGame();

// Functions to SETUP and STARTUP a game

/* This function creates the entire deck of 81 cards as an object array
but does not include the card images */

function fullDeck() {
  // console.log('full deck')
  var id = 0;
  var card = {};
  var newCard;
  // Nested for-loop to create the fullDeck of 81 cards
  for (var i = 0; i < cardShape.length; i++) {
    for (var j = 0; j < cardColor.length; j++) {
      for (var k = 0; k < cardFill.length; k++) {
        for (var l = 0; l < cardSize.length; l++) {
          card = {};
          card.shape = cardShape[i];
          card.color = cardColor[j];
          card.fill = cardFill[k];
          card.number = cardSize[l];
          card.image = cardShape[i] + '-' + cardColor[j] + '-' + cardFill[k] + '-' + cardSize[l];
          newCard = Object.assign({}, card);
          cards.push(newCard);
        }
      } 
    }
  }
}

// add the below to startGame

//create this as its own fx
// this fx will use the new draw cards


  function createGameCards(numCards) {
  // console.log('createDeck');
  for (let i = 0; i < numCards; i++) {
  var cardElem = null;
  var gameBoard = document.getElementById('gameBoard');
  gameBoard.setAttribute('class', 'gameBoard');
  var cardSlot = document.createElement('div');
  // This function fills the cardsOnBoard div cardSlots
  cardElem = document.createElement('img');
  cardElem.setAttribute('id', i);
  cardElem.src = gameDeck[i];
  cardElem.setAttribute("class", "cardElem");
  cardElem.setAttribute("data-shape", drawnCards[i].shape);
  cardElem.setAttribute("data-color", drawnCards[i].color);
  cardElem.setAttribute("data-fill", drawnCards[i].fill);
  cardElem.setAttribute("data-number", drawnCards[i].number);
  cardSlot.appendChild(cardElem);
  gameBoard.appendChild(cardSlot);
  cardElem.addEventListener('click', cardSelectHandler) // event listener is assuming you will use param 'event' NOT 'e'
  }
}
      
/** GAME HELPER FUNCTIONS                                                           */
// Fisher-Yates Shuffle to randomize the deck
function shuffle(deck) {

  var shuffledDeck = [];
  var rand = 0;
  while (deck.length > 0) {
    rand = Math.floor(Math.random() * deck.length);
    var card = deck.splice(rand, 1);
    // console.log("this is what we spliced", card[0]);
    shuffledDeck.push(card[0]);
  }
  return Array.from(shuffledDeck);
}

// This is a generalized draw function for drawing any number of cards from the game deck
function draw(num) {
  // console.log('draw')
  return cards.splice(0, num);
}
console.log('this is cards...', cards);

// This concatenate img names to card array objects
function nameImage(drawnCards) {
  for (let card of drawnCards) {
    gameDeck.push("./img/" + card.image + ".png");
  }
}
// console.log(gameDeck);

// Determine whether a user has chosen three cards or not monitor selectedCards.length and run what is necessary
function cardSelectHandler() {

  // console.log('length', selectedCards.length)
  if (selectedCards.length != 2) {
    // console.log('not long enough, push it')
    selectedCards.push(event.target.dataset);
  }
  else if (selectedCards.length = 2) {
    selectedCards.push(event.target.dataset);
    // console.log('hey! check the set')
    setCheck(selectedCards);
    selectedCards = [] //reset the array
  }
}
// Evaluates selectedCards for a set
function setCheck(dataSet) {
  //if set is true
  if (checkColor(dataSet) && checkShape (dataSet) && checkFill(dataSet) && checkNumber(dataSet)) {
      console.log("it's a set");
      var setArray = JSON.parse(JSON.stringify(dataSet));
      console.log("now it's an object array... " , setArray);
  }
}
// Set quality checker color function
function checkColor(setCards)  {
  console.log("this" , setCards[1].color);
  if (setCards[0].color == setCards[1].color && setCards[0].color == setCards[2].color && setCards[1].color == setCards[2].color) {
    console.log('first true color statement hit!')
    return true;
  } else if (setCards[0].color != setCards[1].color && setCards[0].color != setCards[2].color && selectedCards[1].color != selectedCards[2].color) {
    console.log('second true color statement!!')
    return true;
  } else {
    console.log('color FALSE')
    return false;
  }
}
// Set quality checker shape function
function checkShape(setCards) {
  if (setCards[0].shape == setCards[1].shape && setCards[0].shape == setCards[2].shape && setCards[1].shape == setCards[2].shape) {
    console.log('first true shape statement hit!')
    return true;
  } else if (setCards[0].shape != setCards[1].shape && setCards[0].shape != setCards[2].shape && setCards[1].shape != setCards[2].shape) {
    console.log('second true shape statement!!')
    return true;
  } else {
    console.log('shape FALSE')
    return false;
  }
}
// Set quality checker fill function
function checkFill(setCards) {
  if (setCards[0].fill == setCards[1].fill && setCards[0].fill == setCards[2].fill && setCards[1].fill == setCards[2].fill) {
    console.log('first true fill statement hit!')
    return true;
  } else if (setCards[0].fill != setCards[1].fill && setCards[0].fill != setCards[2].fill && setCards[1].fill != setCards[2].fill) {
    console.log('second true fill statement!!')
    return true;
  } else {
    console.log('fill FALSE')
    return false;
  }
}
// Set quality checker number function
function checkNumber(setCards) {
  if (setCards[0].number == setCards[1].number && setCards[0].number == setCards[2].number && setCards[1].number == setCards[2].number) {
    console.log('first true number statement hit!')
    return true;
  } else if (setCards[0].number != setCards[1].number && setCards[0].number != setCards[2].number && setCards[1].number != setCards[2].number) {
    console.log('second true number statement!!')
    return true;
  } else {
    console.log('shape number')
    return false;
  }
}

// // Removed set - RENAME
// function removeSelectedCards() {
//   var selectedCards = [];
//   selectedSlots.forEach(function (slotId) {
//     selectedCards.push(Object.assign({}, cardsOnBoard[slotId]));
//   });

//   // To remove them if it is a set, do this
//   selectedSlots.forEach(function (slotId) {
//     cardsOnBoard[slotId] = null;
//   });
// }
  
// //functionality for adding three cards
// function dealOut() {
//   dealThree = draw(3) // draw 3 new cards 
//   nameImage(dealThree);
//   createGameCards(dealThree.length)
// }

/* Missing functionality -
- Draw 3 add'l cards in the event there are no sets on the game board
  - ensure that newly drawn cards continue to remove cards from the full deck
  - once set is a set, clear the temporary array in which the set was stored - dataSet
- Messages for Set and no Set
- Scoring
- Timer
- Styling
- 
style the cards with hover, click before and after
create the set picker - a series of nested for loops to compare
card0 to card1, card 2, etc. then card 1 to card0, ect and a third
loop to compare card 2 to cards 0 and 1, etc.
and call the set evaluator function to determine if the 3 cards are a set
*/