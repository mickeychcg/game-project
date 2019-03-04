var mainDeck = [];
var selectedSlots = [];
var cardsOnBoard = new Array(12).fill(null);
console.log(cardsOnBoard);


// Generate random cards
function createCard() {
  var colors = ['green', 'purple', 'red'];
  var shapes = ['cylinder', 'diamond', 'purple'];
  var fills = ['filled', 'outline', 'solid'];
  var sizes = ['1', '2', '3'];
  var img = [];
  var colorIndex = Math.floor(Math.random() * 3);
  var shapeIndex = Math.floor(Math.random() * 3);
  var fillIndex = Math.floor(Math.random() * 3);
  var sizeIndex = Math.floor(Math.random() * 3);
  return { color: colors[colorIndex], shape: shapes[shapeIndex], fill: fills[fillIndex], size: sizes[sizeIndex]};
}

//  Push 81 random cards into the deck
for (let i = 0; i < 81; i++) {
  mainDeck.push(createCard());
}
console.log(mainDeck);

function nameImage(mainDeck) {
  for (let key of mainDeck) {
    gameDeck.push("./img/" + mainDeck(1)[0] + ".png");
  } 
}
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
console.log('this is mainDeck after draw...' ,mainDeck);

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
  // var str = '';
  for (let key in cardsOnBoard) {
    // document.getElementById(key).textContent = cardsOnBoard[key].shape + cardsOnBoard[key].color + cardsOnBoard[key].fill + cardsOnBoard[key].size;
    img = document.createElement('img');
    console.log('this is an image...', img);
    // img.setAttribute(cardsOnBoard[key], 'image');
    img.classList.add("cardslot");
    document.body.appendChild(img);
    // document.getElementById(key).querySelector('.cardslot').src = cardsOnBoard[key].img;


  }
  // mainDeck.forEach(function (card) {
  //   str = str + card.color + card.shape + card.fill + card.size + card.img + ' ';
  //   // console.log(str);
  // })
  // document.getElementById('maindeck').textContent = str;
}
console.log("this is mainDeck...", mainDeck);
fillTheCardsOnBoardObject();
renderCardsOnBoard();

