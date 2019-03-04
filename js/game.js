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


var mainDeck = [];
var selectedSlots = [];
var cardsOnBoard = {
  0: null,
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
  6: null,
  7: null,
  8: null,
  9: null,
  10: null,
  11: null
};

function startGame() {

  fullDeck(); // Returns 81 cards in cards array

  // cards = shuffle(cards); // Redefine cards by shuffling the cards array 

  drawnCards = draw(12); // 12 cards from shuffled deck to make up initial game deck

  nameImage(drawnCards); // Assigns img files to deck data array and creates gameDeck array

  fillTheCardsOnBoardObject();

  // createGameCards(drawnCards.length); // Use drawnCards global array and gameDeck global array to create game deck

}

startGame();



// // Generate random cards
// function createCard() {
//   var colors = ['red', 'blue', 'green'];
//   var colorIndex = Math.floor(Math.random() * 3);
//   return { color: colors[colorIndex], number: Math.floor(Math.random() * 5) };
// }
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


// //  Push 30 random cards into the deck
// for (let i = 0; i < 30; i++) {
//   mainDeck.push(createCard());
// }
// console.log(mainDeck);
var div;

// Create the gameboard
for (let i = 0; i < 12; i++) {
  div = document.createElement('div');
  div.id = i;
  div.classList.add("cardslot");
  div.addEventListener('click', function (e) {
    selectedSlots.push(this.id);
    this.classList.add('green');
  });
  document.body.appendChild(div);
}
var button = document.createElement("button");
button.textContent = "SET!"
button.addEventListener('click', function (e) {
  removeSelectedCards();
  fillTheCardsOnBoardObject();
  renderCardsOnBoard();
});
document.body.appendChild(button);

// Draw a number of cards from the mainDeck
function draw(num) {
  return mainDeck.splice(0, num);
}
console.log(mainDeck);

function removeSelectedCards() {
  var selectedCards = [];
  selectedSlots.forEach(function (slotId) {
    selectedCards.push(Object.assign({}, cardsOnBoard[slotId]));
    // console.log(selectedCards)
  });
  // Here you would check to see if it is a set

  // To remove them if it is a set, do this
  selectedSlots.forEach(function (slotId) {
    cardsOnBoard[slotId] = null;
  });
  // document.getElementsByClassName('cardslot').classList.remove('green');
}
//something

function fillTheCardsOnBoardObject() {
  for (let key in cardsOnBoard) {
    if (!cardsOnBoard[key]) {
      cardsOnBoard[key] = draw(1)[0];
      console.log("This is the cardsOnBoard object ", cardsOnBoard[key]);
    }
  }
}

function renderCardsOnBoard() {
  var str = '';
  for (let key in cardsOnBoard) {
        // document.getElementById(key).src = './img' + cardsOnBoard[key].shape + cardsOnBoard[key].color + cardsOnBoard[key].fill + cardsOnBoard[key].number + '.img';
    document.getElementById(key).textContent = cardsOnBoard[key].shape + cardsOnBoard[key].color + cardsOnBoard[key].fill + cardsOnBoard[key].number;
    // document.getElementsByTagName(key).src = './img/squiggle-red-outline-1.png';
    // cardsOnBoard.setAttribute('id', i);
  }
  mainDeck.forEach(function (card) {
    str = str + card.shape + card.color + card.fill + card.number;
    str = str + card.color + card.number + ', ';
    // document.getElementById('mainDeck').textContent = str;
  })
}
fillTheCardsOnBoardObject();
renderCardsOnBoard();

// console.log('This is the final mainDeck ' + mainDeck);

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


// This concatenate img names to card array objects
function nameImage(drawnCards) {
  for (let card of drawnCards) {
    gameDeck.push("./img/" + card.image + ".png");
  }
}
// This concatenate img names to card array objects
// function nameImage(drawnCards) {
//   for (let card of drawnCards) {
//     gameDeck.push("./img/" + card.image + ".png");
//   }
// }
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
  if (checkColor(dataSet) && checkShape(dataSet) && checkFill(dataSet) && checkNumber(dataSet)) {
    console.log("it's a set");
    var setArray = JSON.parse(JSON.stringify(dataSet));
    console.log("now it's an object array... ", setArray);
  }
}
// Set quality checker color function
function checkColor(setCards) {
  console.log("this", setCards[1].color);
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