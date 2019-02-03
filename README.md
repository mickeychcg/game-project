# WDI-23 Unit1 Game - <b>SET</b>
This is the first project for this General Assembly Web Development Immersive Seattle cohort (WDI-23). The project is for each cohort participant to create a game utilizing vanilla JavaScript and the tools, concepts, practices, and skills we're beginning to develop. Our instructor has mindfully suggested that each of employ the K.I.S.S. principle, i.e., **Keep It Stupid Simple** (yes, you read that right).

My game is going to be a pretty simple to play, easy to understand visual perception game developed in the 1970's called [SET](https://www.setgame.com/set).
## What is SET?
SET is deceptively simple. The game has <i>81 unique cards</i>, each marked with between one and three shapes. Each shape has properties of color and fill.

The game may be played by as few as one player (although this could become quite tedious) or as many as can fit around a game.

The object of the game is to collect as many SETs as you can. Each game has the possibility of 27 SETs, although it's possible to play a game and leave a number of remaining unmatched cards on the table.

SET is a *visual perception game* that requires keen concentration and rapid pattern recognition.
## How is SET played?
The dealer (any player, really) lays out nine cards face up on the table and the game begins immediately. The first player to see a SET calls out __*SET!*__ and picks up the three cards up that make up that SET. A player can only pick up one set at a time. If the player who calls out SET does not pick up a SET within a certain amount of time agreed upon by the players, that player may lose a turn or suffer some other kind of penalty.

If no SET can be made from the nine cards on the table, an additional three cards are added. While is is mathmetically possible to not have a set with a dozen cards on the table, it's highly unlikely.

The player with the most SETs at the end of the game wins.

<figure>
<div style= "text-align: center"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Set-game-cards.png"></div> 
<figcaption>Figure 1. This is a SET</figcaption>
</figure>

## The Game's Design
The game is built using vanilla JavaScript and implemented for a computer viewport, algthouh it is possible that responsive may be included in its initial release.

Some of the essential characteristics include:
* Single player vs. simple AI - this will not be a multiplayer game in its first release
* Scoring, both in-game and game totals
* Levels of complexity - play against the AI can be toggled between
  * Random - an interval that will vary per play
  * Easy - a long delay for the AI
  * Hard (or Impossible) - a rapid delay for the AI
* Three buttons...
  * Game Start - that will initiate placing nine cards on the table
  * SET! - for when the player sees a SET
  * Play Again? - to reset the game
* *Impossibilium nulla obligatio est* (there is no obligation to do the impossible) - it is to be determined whether an initial nine or 12 cards will be loaded. If only nine cards are loaded and no sets are visible, the deck may be virtually *"reshuffled"* and a new load of nine cards will be placed.
* Visual design is important - a clean, appealing, playable design is employed to produce an enjoyable and, dare we add, slightly addictive quality to the game

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to all the folks at GA Seattle for helping to make this game possible!
* Skills get built, bit-by-bit, over time and with practice. But no one is a solitary learner. Knowledge is always developed inside a committed and benevolent community; people who are as interested in the success of their colleagues as they are in their own.

# game-project
