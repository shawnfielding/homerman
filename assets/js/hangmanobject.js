var Hangman = {
  gameInstances: [],  //I am going to leave this in here and save intances, but not going to build functionality off of it right now.
  maxMisses: 7,
  wins:0,
  losses:0,
  game: function(){
    //The word for the game and how to get it. -- complete
    this.gameWord = "";
    this.gameWordLogic = function(){
      this.gameWord = wordarray[Math.floor(Math.random() * (wordarray.length - 1))].toUpperCase();
    };


    //The unique letters if the game word  and the logic of how to set it. -- complete
    //Also, a test to see if the game is over, which is the point of this field. -- TO DO
    this.gameWordUnique = "";
    this.gameWordUniqueLogic = function(){
      this.gameWordUnique = this.gameWord.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');
    };

    //An array of letters that have been tried, both hits and misses.
    //This is also where the letter and the letter array show on the screen.
    //Used to display and as a test to see if they have won.  -- Not tested
    this.gameLettersTried = [];
    this.gameLettersTriedLogic = function(theLetter){
      var self = this;
      if(this.gameLettersTried.indexOf(theLetter) = -1){
        this.gameLettersTried.push(theLetter);
        document.getElementById("letters").innerHTML = this.gameLettersTried.value.toString();
        document.getElementById("letter").innerHMTL= theLetter.value;
        this.testAgainstWord(theLetter);
      }else{
        keyupInterfaceHelpers.reactaudio("../mp3/doh1.mp3");
        this.gameMissesLogic(theLetter);
      }
    };


    //this.testAgainstWord = function(theLetter){
    //if(this.gameWord.indexOf(theLetter) = -1)
    //}
    //if(gameWordUnique,indexOf(theLetter) > -1)
    //


    this.gameMisses = 0;
    this.gameMissesLogic = function(theLetter){
      this.gameMisses++;
      document.getElementById("miss").innerHTML = this.gameMisses.value;
      //
      // var theMiss = document.getElementById("miss").value;
      // theMiss.innerHTML = theMiss.innerHTML++;
      // if theMiss.innerHTML
    };


    this.gameCompleted = false;
    this.gameCompletedLogic
    this.gameWon = false;
    document.getElementById("letter").innerHTML = "";
    document.getElementById("letters").innerHTML = [];

  },
}
