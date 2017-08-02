// This file is in charge of what you see.  It generates and updates the interface.
// I have added it to the object, but just had that call functions in this file.
// This function writes out the table.
// The table is written out by using the length of the word and looping.
// !!!!! If I have time, I should just generate the entire page with javascript.

// Generic function that generates elements.  The text is simple enough to only have the content
var gameStartInterfaceHelpers = {
	makeHiddenWordField: function(){
		var wordPlace = document.getElementById("wordRow");
		var theCells;
		for (var i=0; i < newGame.gameWord.length; i++){
			if(i == 0){
			theCells = "<td class='td"+newGame.gameWord.charAt(i)+"'>"+"_"+"</td>";
			} else{
			theCells += "<td class='td"+newGame.gameWord.charAt(i)+"'>"+"_"+"</td>";
			};
		}
		wordPlace.innerHTML=theCells;
	},
}

var keyupInterfaceHelpers = {
	reactAudio: function(loc){new Audio(loc).play();
	},





}
