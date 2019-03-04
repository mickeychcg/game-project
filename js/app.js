var mainDeck = [];
var selectedSlots = [];
var selectedCards = [];
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

// Generate random cards
function createCard() {
  var colors = ['green', 'purple', 'red'];
  var shapes = ['cylinder', 'diamond', 'squiggle'];
  var fills = ['filled', 'outline', 'solid'];
  var sizes = ['1', '2', '3'];

  var colorIndex = Math.floor(Math.random() * 3);
  var shapeIndex = Math.floor(Math.random() * 3);
  var fillIndex = Math.floor(Math.random() * 3);
  var sizeIndex = Math.floor(Math.random() * 3);
  // var imgIndex = [];
  return { shape: shapes[shapeIndex], color: colors[colorIndex], fill: fills[fillIndex], 
    size: sizes[sizeIndex] };
}

//  Push 81 random cards into the deck
for (let i = 0; i < 81; i++) {
  mainDeck.push(createCard());
}
// console.log('maindeck ', mainDeck);
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
  setCheck();
  removeSetCards();
  fillTheCardsOnBoardObject();
  renderCardsOnBoard();
});
document.body.appendChild(button);

// Draw a number of cards from the mainDeck
function draw(num) {
  return mainDeck.splice(0, num);
}
// console.log(mainDeck);

function removeSetCards() {
  var setCards = [];
  selectedSlots.forEach(function (slotId) {
    setCards.push(Object.assign({}, cardsOnBoard[slotId]));
    // console.log(selectedCards)
});
}

  
// Here you would check to see if it is a set
// Evaluates selectedCards for a set

// function cardSelectHandler() {
//   // console.log('length', selectedCards.length)
//   if (selectedCards.length != 2) {
//     // console.log('not long enough, push it')
//     selectedCards.push(event.target.dataset);
//   }
//   else if (selectedCards.length = 2) {
//     selectedCards.push(event.target.dataset);
//     // console.log('hey! check the set')
//     setCheck(selectedCards);
//     selectedCards = [] //reset the array
//   }
// }
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

//something

function fillTheCardsOnBoardObject() {
  for (let key in cardsOnBoard) {
    if (!cardsOnBoard[key]) {
      cardsOnBoard[key] = draw(1)[0];
      // console.log("This is the cardsOnBoard object ", cardsOnBoard[key]);
    }
  }
}

function renderCardsOnBoard() {
  var str = '';
  for (let key in cardsOnBoard) {
    document.getElementById(key).textContent = cardsOnBoard[key].shape + '-' + cardsOnBoard[key].color + '-' + cardsOnBoard[key].fill + '-' + cardsOnBoard[key].size;
    img = document.createElement('img');
    img.classList.add("cardImage");
    // console.log(img);
    document.getElementById(key).appendChild(img);
    document.getElementById(key).querySelector('.cardImage').src = './img/' + cardsOnBoard[key].shape + '-' + cardsOnBoard[key].color + '-' + cardsOnBoard[key].fill + '-' + cardsOnBoard[key].size + '.png';
  }
}
// console.log("this is mainDeck...", mainDeck);
fillTheCardsOnBoardObject();
renderCardsOnBoard();

