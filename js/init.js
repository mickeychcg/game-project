
// function creates the deck
let cards = [];
function fullDeck() {

  var id = 0;
  let cardShape = ["diamond", "squiggle", "cylinder"];
  let cardColor = ["purple", "red", "green"];
  let cardFill = ["outline", "filled", "solid"];
  let cardSize = [1, 2, 3];
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
          // cards.push(cardShape[i] + '-' + cardColor[j] + '-' + cardFill[k] + '-' + cardSize[l]);
          card.image = cardShape[i] + '-' + cardColor[j] + '-' + cardFill[k] + '-' + cardSize[l];
          newCard = Object.assign({}, card);
          cards.push(newCard);
        }
      }
    }
  }
}
fullDeck();
// console.log("just made the deck", cards[0]);
// console.log("just made the deck", cards[1]);
// console.log("just made the deck", cards[2]);
// console.log("just made the deck", cards[3]);

// Fisher-Yates Shuffle
let shuffledDeck;
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

cards = shuffle(cards);
// generalized draw function
function draw(num) {
  return cards.splice(0, num);
}

// draw 12 initial gameboard cards


let drawnCards = draw(12);

// concatenate names to card array
let gameDeck = [];
function nameImage(drawnCards) {
  for (let card of drawnCards) {
    gameDeck.push("./img/" + card.image + ".png");
  }
}
nameImage(drawnCards);
// console.log("drawnCards", drawnCards);

for (let i = 0; i < 12; i++) {
  var index = [i];
  var selectedIndices = [];
  var cardElem = [];
  var gameBoard = document.getElementById('gameBoard');
  var cardSlot = document.createElement('div');
  cardSlot.setAttribute('id', index);
  cardElem = document.createElement('img');
  cardElem.src = gameDeck[i];
  cardElem.setAttribute("data-shape", drawnCards[i].shape)
  cardElem.setAttribute("data-color", drawnCards[i].color)
  cardElem.setAttribute("data-fill", drawnCards[i].fill)
  cardElem.setAttribute("data-number", drawnCards[i].number)
  cardSlot.appendChild(cardElem);
  gameBoard.appendChild(cardSlot);
  console.log(cardElem[i]);
  cardElem.addEventListener('click', function (e) {
    selectedIndices.push(e.target.id);
    console.log(selectedIndices);
  });
}


// for(let i = 0; i < 12; i++) {
//   // console.log(drawnCards[i]);
//   var index = [i];
//   var gameBoard = document.getElementById('gameBoard');
//   var div = document.createElement('div');
//   div.setAttribute('id', index);
//   var elem = document.createElement('img');
//   elem.src = gameDeck[i];
//   elem.setAttribute("data-shape", drawnCards[i].shape)
//   elem.setAttribute("data-color", drawnCards[i].color)
//   elem.setAttribute("data-fill", drawnCards[i].fill)
//   elem.setAttribute("data-number", drawnCards[i].number)
//   // console.log("Card shape of drawnCards is: " + drawnCards[i].shape);
//   div.appendChild(elem);
//   gameBoard.appendChild(div);
//   // var pos = div.toString().IndexOf(1);
//   elem.addEventListener('click', function (e) {
//     console.log(e.target.getAttribute(''));
//   });
// }


//     if (selectedCards.length !== 3) {
  //       const card = Object.assign({}, this.dataset);
  //       selectedCards.push(card);
  //       if (selectedCards.length === 3)
  //         var first = div[index];
  //     console.log(e.currentTarget.id);
  // selectedCards.forEach((elem, i);



  // for (var i = 0; i < setCards.length; i++) {
    //   var pos = this.gameDeck.indexOf(setCards[i]);
    //   if (pos >= 0) {
      //     this.setCards.splice(pos, 1);

      // let selected = function (drawnCards) {
        //   for (i = 0; i < 4; i++) {
          //     div.id === drawnCards;
          //     console.log(div.id);
          //     return selected;
          //   }
          // }
          // selected();
          // above add .classlist.add(style) to the gameBoard and the cardHolder
          // rename the 'div' to something more descriptive


          // document.getElementById(index).appendChild(elem);
          // console.log(gameDeck[i]);





          // style the cards with hover, click before and after
          //create the set picker - a series of nested for loops to compare
          // card0 to card1, card 2, etc. then card 1 to card0, ect and a third
          // loop to compare card 2 to cards 0 and 1, etc.
          // and call the set evaluator function to determine if the 3 cards are a setInterval(() => {

            // cardsSelected.forEach((elem, index) {
            //   if (div.id === this.dataset.id) {
            //     cardSelected.pop(i, 1);
            //     e.target.id.remove('div');
            //   } else {
            //     e.target.id.add('div');
            //   }
            // });