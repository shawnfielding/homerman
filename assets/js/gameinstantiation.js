// This file controls the instantiation and archiving of a game.
//  It is responsible for making a game instance and then sets the proper initial values.



var newGame = "";

//This function checks if there is an instance of game already.
//If there is, pass it into the games array.
//Make a new instance of the hangman game.
function CreateNewGame(){
  if(typeof(newGame) == "object"){
    gameInstances.push(newGame);
    }
  newGame = new Hangman.game();
// Run the logic in newGame to alter from the defaults to what should be the start.
	newGame.gameWordLogic();
  newGame.gameWordUniqueLogic();
  gameStartInterfaceHelpers.makeHiddenWordField();
  console.log("made it after the helper."+newGame);

  var missProg = document.getElementById("misses");

}
