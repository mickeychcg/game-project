// Global Variables

const cardShape = ["diamond", "squiggle", "cylinder"];
const cardColor = ["purple", "red", "green"];
const cardFill = ["outline", "filled", "solid"];
const cardSize = [1, 2, 3];
let cards = [];
let drawnCards = [];
let gameDeck = [];
var selectedCards = [];
let shuffledDeck;
let dealThree = [];

function startGame() {

  fullDeck(); //returns 81 cards in cards array

  cards = shuffle(cards); //redefine cards by shuffling the cards array 

  drawnCards = draw(12); // rededfine drawnCards array to have 12 cards from shuffled deck

  nameImage(drawnCards); // organizes img file naming and creates gameDeck array

  createGameCards(drawnCards.length); // use drawnCards global array and gameDeck global array to create game deck

}

startGame();



// function creates the deck
function fullDeck() {
  console.log('full deck')
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
          // cards.push(cardShape[i] + '-' + cardColor[j] + '-' + cardFill[k] + '-' + cardSize[l]);
          card.image = cardShape[i] + '-' + cardColor[j] + '-' + cardFill[k] + '-' + cardSize[l];
          newCard = Object.assign({}, card);
          cards.push(newCard);
        }
      }
    }
  }
}
// fullDeck();

// Fisher-Yates Shuffle

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



// generalized draw function
function draw(num) {
  console.log('draw')
  return cards.splice(0, num);

}


// concatenate names to card array
function nameImage(drawnCards) {
  for (let card of drawnCards) {
    gameDeck.push("./img/" + card.image + ".png");
  }
}
// console.log("drawnCards", drawnCards);


// add the below to startGame

//create this as its own fx
// this fx will use the new draw cards

// createGameDeck(drawnCards){
//   let thing = drawnCards
// }

// put event listeners in different file or area of this file

function createGameCards(numCards) {

  console.log('createDeck');
  for (let i = 0; i < numCards; i++) {
    // var index = [i];
    var cardElem = null;
    var gameBoard = document.getElementById('gameBoard');
    gameBoard.setAttribute('class', 'gameBoard');
    var cardSlot = document.createElement('div');
    cardElem = document.createElement('img');
    cardElem.setAttribute('id', i);
    cardElem.src = gameDeck[i];
    cardElem.setAttribute("class", "cardElem");
    cardElem.setAttribute("data-shape", drawnCards[i].shape)
    cardElem.setAttribute("data-color", drawnCards[i].color)
    cardElem.setAttribute("data-fill", drawnCards[i].fill)
    cardElem.setAttribute("data-number", drawnCards[i].number)
    cardSlot.appendChild(cardElem);
    gameBoard.appendChild(cardSlot);
    cardElem.addEventListener('click', cardSelectHandler) // event listener is assuming you will use param 'event' NOT 'e'
  }

}


/** Game Helper Functions */

//monitor selectedCards.length and run what is necessary
function cardSelectHandler() {

  console.log('length', selectedCards.length)
  if (selectedCards.length != 2) {
    console.log('not long enough, push it')
    selectedCards.push(event.target.id);
  }
  else if (selectedCards.length = 2) {
    console.log('hey! check the set')
    setCheck();
  }
}

// evaluate selectedCards set array
function setCheck() {
  console.log('checking set in setCheck()');
  //if set is true
  removeSet()
  //let selectedCards = [] //reset selectedCards array

  dealOut();

}

function removeSet() {
  console.log('removing set')
  //remove dom element by looping through array of selectedCards
  // document.removeElement(selectedCards[i]) not correct syntax
  //  


}

//functionality for adding three cards
function dealOut() {
  dealThree = draw(3) // draw 3 new cards 
  nameImage(dealThree);
  createGameCards(dealThree.length)
}


  //     if (e.target.length != 3) {
  //       selectedCards.push(e.target.id);

  //     } else (selectedCards.length === 3); {
  //       checkColor(selectedCards);
  //     }
  //     return false;
  //   });
  // }
  // console.log(selectedCards);


  // console.log("clicks ", selectedCards);

  // console.log(selectedCards)


  // console.log(selectedCards);
  // console.log(cardColor);
  // function checkColor(clickedCards) {
  //   console.log(clickedCards[0]);
  //   console.log(clickedCards[1]);
  //   console.log(clickedCards[2]);

  //   if (clickedCards[0].cardColor == clickedCards[1].cardColor && clickedCards[0].cardColor == clickedCards[2].cardColor && clickedCards[1].cardColor == clickedCards[2].cardColor) {
  //     return true;
  //   } else if (clickedCards[0].cardColor != clickedCards[1].cardColor && clickedCards[0].cardColor != clickedCards[2].cardColor && selectedCards[1].cardColor != selectedCards[2].cardColor) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   console.log(selectedCards);
  // };
// console.log("Selected cards checkColor results: ", selectedCards);
// checkColor(selectedCards);
// console.log(selectedCards);

// function checkShape(setCards) {
//   if (setCards[0].shape == setCards[1].shape && setCards[0].shape == setCards[2].shape && setCards[1].shape == setCards[2].shape) {
//     return true;
//   } else if (setCards[0].shape != setCards[1].shape && setCards[0].shape != setCards[2].shape && setCards[1].shape != setCards[2].shape) {
//     return true;
//   } else {
//     return false;
//   }
// };

// function checkFill(setCards) {
//   if (setCards[0].fill == setCards[1].fill && setCards[0].fill == setCards[2].fill && setCards[1].fill == setCards[2].fill) {
//     return true;
//   } else if (setCards[0].fill != setCards[1].fill && setCards[0].fill != setCards[2].fill && setCards[1].fill != setCards[2].fill) {
//     return true;
//   } else {
//     return false;
//   }
// };

// function checkNumber(setCards) {
//   if (setCards[0].number == setCards[1].number && setCards[0].number == setCards[2].number && setCards[1].number == setCards[2].number) {
//     return true;
//   } else if (setCards[0].number != setCards[1].number && setCards[0].number != setCards[2].number && setCards[1].number != setCards[2].number) {
//     return true;
//   } else {
//     return false;
//   }
// };

// // Returns the number of sets in the given group of setCards

// function numberOfSets(setCards) {
//   count = 0;
//   q = 0;
//   while (setCards.length - q >= 3) {
//     card1 = setCards[q];
//     for (i = q + 1; i < setCards.length - 1; i++) {
//       card2 = setCards[i];
//       for (r = i + 1; r < setCards.length; r++) {
//         card3 = setCards[r];
//         if (this.isASet([card1, card2, card3])) {
//           count++;
//         }
//       }
//     }
//     q += 1;
//   }
//   return (count);
//   console.log(count);
// };

// // Returns a set of setCards if an array or none

// function thisIsASet(setCards) {
//   q = 0;
//   while (setCards.length - q >= 3) {
//     card1 = setCards[q];
//     for (i = q + 1; i < setCards.length - 1; i++) {
//       card2 = setCards[i];
//       for (r = i + 1; r < setCards.length; r++) {
//         card3 = setCards[r];
//         if (this.isASet([card1, card2, card3])) {
//           return [card1, card2, card3];
//         }
//       }
//     }
//     q += 1;
//   }
//   return ([]);
// };

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