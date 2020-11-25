window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

// GLOBAL VARIABLES
var selectedSlots = []
var selectedCards = []
var mainDeck = []
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
  11: null,
  12: null,
  13: null,
  14: null,
  15: null,
  16: null,
  17: null
};

// GENERATE A DECK OF 81 UNIQUE SET! CARDS

function createSetDeck() {
  const color = ["red", "green", "purple"]
  const shape = ["cylinder", "diamond", "squiggle"]
  const fill = ["outline", "solid", "filled"]
  const number = ["1", "2", "3"]

  for (var c = 0; c < color.length; c++) {
    for (var s = 0; s < shape.length; s++) {
      for (var f = 0; f < fill.length; f++) {
        for (var n = 0; n < number.length; n++) {
          var card =( {
          Color: color[c],
          Shape: shape[s],
          Fill: fill[f],
          Number: number[n]} )
          
          mainDeck.push(card)
        }      
      }
    }
  }
  return mainDeck
}
createSetDeck()
  
// SHUFFLE THE DECK WITH A FISHER-YATES SHUFFLE
function shuffle (inputArr) {
  var shuffledDeck = inputArr
  for (var i = inputArr.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1))
    var randomItem = shuffledDeck[randomIndex]
    shuffledDeck[randomIndex] = shuffledDeck[i]
    shuffledDeck[i] = randomItem
  }
}
shuffle(mainDeck)
console.log(mainDeck)  
// DRAW A NUMBER OF CARDS FROM THE MAINDECK
function draw(num) {
  var drawn = mainDeck.splice(0, num)
  return drawn
}
// DRAW A DOZEN INITIAL CARDS
cardsOnBoard = new draw(12)
console.log(cardsOnBoard)
// console.log("Main deck: " + mainDeck[2])
// console.log(cardsOnBoard)

// FOR LOOP TO LOAD THE CARDSONBOARD OBJECT
// function fillTheCardsOnBoardObject() {
//   for (let key in cardsOnBoard) {
//     if (!cardsOnBoard[key]) {
//       cardsOnBoard[key] = (draw(1)[0]);
//     }
//   }
// }

// CREATE THE GAMEBOARD OF 18 AVAILABLE CARD SLOTS
for (let i = 0; i < 18; i++) {
  div = document.createElement('div');
  div.id = i;
  div.classList.add('cardslot');
  div.addEventListener('click', function() 
  {
    selectedSlots.push(this.id);
    // this.classList.add('green');
  });
  document.body.appendChild(div);
}

// let cards = document.getElementsById('1')
// console.log(cards)
// POPULATE GAMEBOARD WITH 12 INITIAL CARDS

// function iterate(currentValue) {
//   console.log(currentValue)
// }
// Array.prototype.forEach.call(cardsOnBoard, iterate)
// var cob = Array.from(cardsOnBoard)
// for (var cob in cardsOnBoard) {
//   console.log(cob + ": " + cardsOnBoard[cob])
//   // console.log("Array Current Index is: " + cardsOnBoard[cob]);

// }
// console.log(props)
//THE BELOW WORKS!
function renderCardsOnBoard() {
  for (let [key] of Object.keys(cardsOnBoard)) {
    const shape = cardsOnBoard[key].Shape
    const color = cardsOnBoard[key].Color
    const fill = cardsOnBoard[key].Fill
    const number = cardsOnBoard[key].Number
    img = document.createElement('img')
    img.classList.add('cardImage')
    document.getElementById(key).appendChild(img);
    document.getElementById(key).querySelector('.cardImage').src = './img/' + shape + '-' + color + '-' + fill + '-' + number + '.png'
    console.log(img)
  }
}
renderCardsOnBoard()
// var card = document.getElementById(key).textContent = (key)
// console.log(card)

// function renderCardsOnBoard() {
// }
// function renderCardsOnBoard() {
// // var str = '';
//   for (let key in cardsOnBoard) {
//     var card = document.getElementById(key).textContent = cardsOnBoard[key].color + '-' + cardsOnBoard[key].shape + '-' + cardsOnBoard[key].fill + '-' + cardsOnBoard[key].number;
//     img = document.createElement('img');
//     img.classList.add("cardImage");
//     console.log(img);
//     document.getElementById(key).appendChild(img);
//     document.getElementById(key).querySelector('.cardImage').src = './img/' + cardsOnBoard[key].shape + '-' + cardsOnBoard[key].color + '-' + cardsOnBoard[key].fill + '-' + cardsOnBoard[key].number + '.png'
//     console.log(card)
//   }
// }

// console.log("this is mainDeck...", mainDeck);
// fillTheCardsOnBoardObject();
// console.log(cardsOnBoard[11])
// renderCardsOnBoard();

/* Create SET! button, listen for clicks, check SET!, 
remove SET! cards, replace cards on board 
*/
var button = document.createElement("button");
button.textContent = "SET!"
button.addEventListener('click', function (e) {
  setCheck(e.target.selectedCards);
  });
removeSetCards();
// fillTheCardsOnBoardObject();
// renderCardsOnBoard();
document.body.appendChild(button);
// console.log(cardsOnBoard)

function removeSetCards() {
  var setCards = [];
  selectedSlots.forEach(function (slotId) {
    setCards.push(Object.assign({}, cardsOnBoard[slotId]));
    console.log(selectedCards)
  });
  // console.log("These are the Set cards ", setCards)
}

/* Here you would check to see if it is a set
  Evaluates selectedCards for a set
*/

function cardSelectHandler() {
  // console.log('length', selectedCards.length)
  if (selectedCards.length < 3) {
    // console.log('not long enough, push it')
    selectedCards.push(dataset);
  } else {
    selectedCards.push(dataset);
    // console.log('hey! check the set')
    setCheck(selectedCards);
    selectedCards = [] //reset the array
    console.log(selectedCards)
  }
}
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
  // console.log("this", setCards[1].color);
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
  // To remove them if it is a set, do this
  selectedSlots.forEach(function (slotId) {
    cardsOnBoard[slotId] = null;
  });
  // document.getElementsByClassName('cardslot').classList.remove('green');