
// function creates the deck
let cards = [];
function fullDeck() {

  var id = 0;
  let cardShape = ["diamond", "squiggle", "cylinder"];
  let cardColor = ["purple", "red", "green"];
  let cardFill = ["outline", "filled", "solid"];
  let cardSize = [1, 2, 3];
  // Nested for-loop to create the fullDeck of 81 cards
  for (var i = 0; i < cardShape.length; i++) {
    for (var j = 0; j < cardColor.length; j++) {
      for (var k = 0; k < cardFill.length; k++) {
        for (var l = 0; l < cardSize.length; l++)

          cards.push(cardShape[i] + '-' + cardColor[j] + '-' + cardFill[k] + '-' + cardSize[l]);
        id++;
      }
    }
  }
}
fullDeck();


// Fisher-Yates Shuffle
let shuffledDeck;
function shuffle(deck) {
  var mid = deck.length, temp, i;
  while (mid) {
    i = Math.floor(Math.random() * mid--);
    temp = deck[mid];
    deck[mid] = deck[i];
    deck[i] = temp;
    console.log(deck);
  }
  shuffledDeck = deck;
}
shuffle(cards);
console.log('first shuffle', shuffledDeck);


// generalized draw function
function draw(num) {
  return shuffledDeck.splice(0, num);
}

// draw 12 initial gameboard cards


let drawnCards = draw(12);
console.log('deck minus 12', shuffledDeck);
console.log("cards drawn " + drawnCards.length);

// concatenate names to card array
let gameDeck = [];
function nameImage(drawnCards) {
  for (let card of drawnCards) {
    gameDeck.push("./img/" + card + ".png");
  }
}
nameImage(drawnCards);
console.log(fullDeck);

for (let i = 0; i < 12; i++) {
  var index = 'card' + [i];
  console.log(index);
  var gameBoard = document.getElementById('gameBoard');
  console.log(gameBoard);
  var div = document.createElement('div');
  console.log(div);
  div.setAttribute('id', index);
  console.log(index[i]);
  var elem = document.createElement('img');
  console.log(elem);
  elem.src = gameDeck[i];
  div.appendChild(elem);
  console.log(elem);
  gameBoard.appendChild(div);



  // document.getElementById(index).appendChild(elem);
  // console.log(gameDeck[i]);

}

// let gameBoardCards = function () {
//   for (let card of cardsToLoad)
//     gameDeck.push("./img/" + card + ".png");
// }
// gameBoardCards();


