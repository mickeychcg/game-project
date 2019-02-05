// PSEUDOCODE for SET
// Play occurs between an AI and a player
// Player toggles level of difficulty -  easy, random, hard
// Time to identify SETs is typically between one and three minutes
// Player clicks PLAY SET button - DOM event that stops the AI from grabbing an
// available SET
// 18 cards are moved onto the gameboard - DOM event
// Player locates a SET before the AI and clicks the cards that
// represent it. 
// Failure to do so results in the loss of a point - optional
// Game ends with a tally of SETs. Winner has the most.

// Variables, DOM events, and Functions

// Variables to track: cardNumber, cardColor, cardShape, cardFill, setsOnBoard, cardsInPlay,
// playerScore, aiScore, playerGameScore, aiGameScore,

// DOM events: listener for Difficulty, Start, Again buttons
// Listener for card clicks

// Helper Functions
// readGameBoard - evaluates for available SETs 
// moreCards - adds three additional cards to the game board
// startPlay - lays down an initial 18 cards
// again - resets the game to zero cards on the game board and zero score

// Object Array - each card in the deck by number, color, shape, shading