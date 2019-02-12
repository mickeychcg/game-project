/** PSEUDOCODE for SET

12 cards are moved onto the gameboard
The object of the game is to create unique sets of cards
of three where the characteristics of color, shape, fill and
number are all the same or all different.

Game ends with a tally of SETs. Winner has the most.

Variables, DOM events, and Functions

Variables to track: setsOnBoard, cardsInPlay,
playerScore, aiScore, playerGameScore

DOM events: listener for cards in play, picking sets
evaluating sets

Functional areas
1) Create the card deck
2) Set event listeners
3) Game logic - display cards, choice of cards, set evaluation
4) Create the game board
5) Manage a game
6) Display any messages

*/

//Global Variables
var board = new setBoard();
var uI = new SetUserInterface();
var gameLogic = new SetGameLogic();
var selected = 0;

// THE DECK

// Global Variables for decks
let gameDeck = [];
let selectedCards = [];
let setCards = [];

// These functions create the game's full deck

// Card Variables

function fullDeck() {

  this.card = [];


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

          this.cards.push(new gameDeck("card-" + id, cardShape[i] + '-' + cardColor[j] + '-' + cardFill[k] + '-' + cardSize[l]));
        id++;
      }
    }
  }

  // Splice a dozen cards into a new array for the gameBoard
  let cardsToLoad = fullDeck.splice(fullDeck.length - 80, 12);

  let gameBoardCards = function () {
    for (let cardArr of cardsToLoad)
      gameDeck.push("./img/" + cardArr + ".png");
  }
  gameBoardCards();

  /** removes and returns a card from the deck */
  this.drawCard = function () {
    return setCards.pop();
  }

  /** returns the number of cards in the deck */

  this.size = function () {
    return this.cards.length;
  }
  // Fisher-Yates Shuffle
  this.shuffle = function (start) {
    var mid = start.length, temp, i;
    while (mid) {
      i = Math.floor(Math.random() * mid--);
      temp = start[mid];
      start[mid] = start[i];
      start[i] = temp;
    }
  }
  this.deck.shuffle(fullDeck);
}
// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', function () {
  for (let x = 0; x < gameDeck.length; x++) {
    var imgElement = document.createElement("img");
    imgElement.src = gameDeck[x];
    var cardId = "card" + (x + 1);
    var cardElement = document.getElementById(cardId);
    cardElement.appendChild(imgElement);
  }
});

window.addEventListener("load", newGame);
document.getElementById("new-game").addEventListener("click", function () { updateGame(trigger.new_Game) });
document.getElementById("draw-3-cards").addEventListener("click", function () { updateGame(trigger.draw_3_cards) });
document.getElementById("find-set").addEventListener("click", function () { updateGame(trigger.find_Set) });
// document.getElementById("open-rules").addEventListener("click", function () { updateGame(trigger.open_Rules) });
// document.getElementById("close-rules").addEventListener("click", function () { updateGame(trigger.close_Rules) });
// document.getElementById("rules-outer").addEventListener("click", function () { updateGame(trigger.close_Rules) });

// GAME LOGIC

function checkColor(setCards) {

  if (setCards[0].color == setCards[1].color && setCards[0].color == setCards[2].color && setCards[1].color == setCards[2].color) {
    return true;
  } else if (setCards[0].color != setCards[1].color && setCards[0].color != setCards[2].color && setCards[1].color != setCards[2].color) {
    return true;
  } else {
    return false;
  }
};

function checkShape(setCards) {
  if (setCards[0].shape == setCards[1].shape && setCards[0].shape == setCards[2].shape && setCards[1].shape == setCards[2].shape) {
    return true;
  } else if (setCards[0].shape != setCards[1].shape && setCards[0].shape != setCards[2].shape && setCards[1].shape != setCards[2].shape) {
    return true;
  } else {
    return false;
  }
};

function checkFill(setCards) {
  if (setCards[0].fill == setCards[1].fill && setCards[0].fill == setCards[2].fill && setCards[1].fill == setCards[2].fill) {
    return true;
  } else if (setCards[0].fill != setCards[1].fill && setCards[0].fill != setCards[2].fill && setCards[1].fill != setCards[2].fill) {
    return true;
  } else {
    return false;
  }
};

function checkNumber(setCards) {
  if (setCards[0].number == setCards[1].number && setCards[0].number == setCards[2].number && setCards[1].number == setCards[2].number) {
    return true;
  } else if (setCards[0].number != setCards[1].number && setCards[0].number != setCards[2].number && setCards[1].number != setCards[2].number) {
    return true;
  } else {
    return false;
  }
};

// Returns the number of sets in the given group of setCards

this.numberOfSets = function (setCards) {
  count = 0;
  q = 0;
  while (setCards.length - q >= 3) {
    card1 = setCards[q];
    for (i = q + 1; i < setCards.length - 1; i++) {
      card2 = setCards[i];
      for (r = i + 1; r < setCards.length; r++) {
        card3 = setCards[r];
        if (this.isASet([card1, card2, card3])) {
          count++;
        }
      }
    }
    q += 1;
  }
  return (count);
};

// Returns a set of setCards if an array or none

this.findASet = function (setCards) {
  q = 0;
  while (setCards.length - q >= 3) {
    card1 = setCards[q];
    for (i = q + 1; i < setCards.length - 1; i++) {
      card2 = setCards[i];
      for (r = i + 1; r < setCards.length; r++) {
        card3 = setCards[r];
        if (this.isASet([card1, card2, card3])) {
          return [card1, card2, card3];
        }
      }
    }
    q += 1;
  }
  return ([]);
};

// GAMEBOARD SETUP

function setBoard() {

  this.setsFound = 0;
  this.score = 0;


  this.deck = new fullDeck();
  this.cardsOnBoard = [];
  this.cardsSelected = [];

  // Draws a single card from the deck.

  this.drawCardFromDeck = function () {
    return this.fullDeck.drawCard();
  };

  // Returns the number of cards in the deck.

  this.sizeOfDeck = function () {
    return this.fullDeck.size();
  };

  // Adds a card to the board.

  this.addCardToBoard = function (fullDeck) {
    this.cardsToLoad.push(fullDeck);
  };

  // Returns all the cards on the board.

  this.getCardsOnBoard = function () {
    return this.gameDeck;
  };

  // Removes cards from the board.

  this.removeCardsFromBoard = function (setCards /* array */) {
    for (var i = 0; i < setCards.length; i++) {
      var pos = this.gameDeck.indexOf(setCards[i]);
      if (pos >= 0) {
        this.setCards.splice(pos, 1);
      }
    }
  };

  // Adds a card from the board to the selected set

  this.addCardToSelectedFromBoard = function (cardId) {
    for (var i = 0; i < this.cardsOnBoard.length; i++) {
      if (this.cardsOnBoard[i].id == cardId) {
        this.cardsSelected.push(this.cardsOnBoard[i]);
      }
    }
  };

  // Returns all the cards that are selected.

  this.getSelectedCards = function () {
    return this.cardsSelected;
  };

  // Returns true if card with cardId is selected

  this.cardInSelected = function (cardId) {
    for (var i = 0; i < this.cardsSelected.length; i++) {
      if (this.cardsSelected[i].id == cardId) {
        return true;
      }
    }
    return false;
  }

  // Removes card from selected

  this.removeCardFromSelected = function (cardId) {
    for (var i = 0; i < this.cardsSelected.length; i++) {
      if (this.cardsSelected[i].id == cardId) {
        this.cardsSelected.splice(i, 1);
        break;
      }
    }
  }

  // Returns number of selected cards

  this.numberOfSelectedCards = function () {
    return this.cardsSelected.length;
  }

  // Clears all cards from the selected set

  this.clearSelectedCards = function () {
    this.cardsSelected = [];
  };
}

//GAME MANAGER

// Minimum number of cards required on the board while deck has remaining cards

var board_CARD_MINIMUM = 12;
var SET_FOUND_POINTS = 3;
var findSet_PENALTY = -3;
var GAME_OVER = false;

// Triggered functions

var trigger = {
  new_Game: "new game",
  draw_3_cards: "draw 3 cards",
  find_Set: "find set",
  open_Rules: "open rules",
  close_Rules: "close rules",
  select: "select"
}

// Starts new game

function newGame() {

  uI.writeMessage(new_Game_MESSAGE);

  // Populates board
  uI.outputCardsInDeck(0);

  // Clear cards from screen
  uI.removeCards(cardIdsArray(board.getCardsOnBoard()));

  // Reset Game state
  GAME_OVER = false;
  SELECTED = 0;
  board.score = 0;
  uI.outputScore(board.score);
  board.setsFound = 0;
  uI.outputSetsFound(board.setsFound);

  //New board
  board = new setBoard();

  // Draw cards from deck and move to the board
  for (var i = 0; i < board_CARD_MINIMUM; i++) {
    board.addCardToBoard(board.drawCardFromDeck());
  }

  // Output board
  uI.outputCards(board.getCardsOnBoard());

  // Add Card Event Listners
  uI.addCardEventListener(board.getCardsOnBoard());

  // Update card counter
  uI.outputCardsInDeck(board.sizeOfDeck());

};
// Adds three new cards from the deck to the table and updates accordingly - REWORK

// function drawThree() {
//   if (board.sizeOfDeck() > 0) {
//     setCards = [];
//     for (i = 0; i < NUMBER_OF_SET_VARIATIONS; i++) {
//       card = board.drawCardFromDeck();
//       board.addCardToBoard(card);
//       setCards.push(card);
//     }
//     uI.outputCards(setCards);
//     uI.addCardEventListener(board.getCardsOnBoard());
//     uI.outputCardsInDeck(board.sizeOfDeck());
//   }
// }

// Removes cards from the board.

function removeCards(setCards) {
  board.removeCardsFromBoard(setCards);
  uI.removeCards(cardIdsArray(setCards));
  if (board.getCardsOnBoard().length < board_CARD_MINIMUM && board.sizeOfDeck != 0) {
    drawThree();
  }
}

// Check if a set is valid.

function checkValidSet() {
  setCards = board.getSelectedCards();
  isSet = GAME_LOGIC.isASet(setCards);
  if (isSet) {
    uI.writeMessage(SET_FOUND_MESSAGE);
    board.clearSelectedCards();
    SELECTED = 0;
    removeCards(setCards);
    board.setsFound++;
    uI.outputSetsFound(board.setsFound);
    board.score += SET_FOUND_POINTS;
    uI.outputScore(board.score);

    /* Check for game over */
    if (board.sizeOfDeck() == 0 && GAME_LOGIC.numberOfSets(board.getCardsOnBoard()) == 0) {
      GAME_OVER = true;
      uI.writeMessage(GAME_OVER_MESSAGE);
    }
  }
  else {
    uI.clearSelected(cardIdsArray(setCards));
    board.clearSelectedCards();
    SELECTED = 0;
    uI.writeMessage(NOT_A_SET_MESSAGE);
  }
}

// Determines if there is a set of the board.

function findSet() {
  board.score += findSet_PENALTY;
  uI.outputScore(board.score);
  uI.clearSelected(cardIdsArray(board.getSelectedCards()));
  board.clearSelectedCards();
  SELECTED = 0;
  var setCards = board.getCardsOnBoard();
  var set = GAME_LOGIC.findASet(setCards);

}

// Returns an array of card IDs given an array of cards.

function cardIdsArray(setCards) {
  var ids = [];
  for (var i = 0; i < setCards.length; i++) {
    ids.push(setCards[i].id);
  }
  return ids;
}

// Updates the game based on the given runGame.

function updateGame(trigger, elementId = null) {
  if (GAME_OVER) {
    switch (trigger) {
      case trigger.new_Game:
        newGame();
        break;
      case trigger.OPEN_RULES:
        uI.openRules();
        break;
      case trigger.CLOSE_RULES:
        uI.closeRules();
    }
  } else if (!PAUSED) {
    switch (trigger) {
      case trigger.new_Game:
        newGame();
        break;
      case trigger.DRAW_3_CARDS:
        drawThree();
        break;
      case trigger.SELECT:
        if (BOARD.cardInSelected(elementId)) {
          BOARD.removeCardFromSelected(elementId);
          uI.unmarkSelectedCard(elementId);
          SELECTED--;
        } else if (SELECTED < NUMBER_OF_SET_VARIATIONS) {
          BOARD.addCardToSelectedFromBoard(elementId);
          uI.markSelectedCard(elementId);
          SELECTED++;
          if (SELECTED == NUMBER_OF_SET_VARIATIONS) {
            checkValidSet();
          }
        }
        break;
      case trigger.OPEN_RULES:
        PAUSED = true;
        uI.openRules();
        break;
      case trigger.CLOSE_RULES:
        PAUSED = !PAUSED;
        uI.closeRules();
        break;
      case trigger.FIND_SET:
        findSet();
        break;
      case trigger.HINT:
        var ans = GAME_LOGIC.numberOfSets(BOARD.getCardsOnBoard());
        var msg = new Message("There are " + ans + " sets", MESSAGE_TYPE.NEUTRAL);
        uI.writeMessage(msg);
        BOARD.score += HINT_PENALTY;
        uI.outputScore(BOARD.score);
        break;
      case trigger.PAUSE_TOGGLE:
        PAUSED = true;
        uI.openPause();
        break;
    }
  }
  else if (PAUSED) {
    switch (trigger) {
      case trigger.CLOSE_RULES:
        if (!GAME_OVER) {
          PAUSED = false;
        }
        uI.closeRules();
        break;
      case trigger.PAUSE_TOGGLE:
        PAUSED = false;
        uI.closePause();
        break;
    }
  }

};
// MESSAGES

// Every message has one of these types.

var MESSAGE_TYPE = {
  NEUTRAL: "neutral",
  SUCCESS: "success",
  FAILURE: "failure"
}

// Represents a Message to be displayed to the user

function Message(message, type) {
  this.message = message;
  this.type = type;
}

//  Messages to be displayed to the user

new_Game_MESSAGE = new Message("New Game! Click on a card to add it to a set. " +
  "Click to deselect it.",
  MESSAGE_TYPE.NEUTRAL);
SET_FOUND_MESSAGE = new Message("Set Found!", MESSAGE_TYPE.SUCCESS);
NOT_A_SET_MESSAGE = new Message("Not a set.", MESSAGE_TYPE.FAILURE);
NO_SETS_MESSAGE = new Message("There are 0 sets", MESSAGE_TYPE.NEUTRAL);
GAME_OVER_MESSAGE = new Message("Game Completed!", MESSAGE_TYPE.SUCCESS);