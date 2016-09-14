
var Word = require("./word.js");

var game = {

	wordBank: ["whoa","amazing","coolio","TESTING"],
	guessesRemaining: 20,
	currentWord: null,
	startGame: function (wrd) {
		var randomWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];

	},
	inGame: function() {
    
      
      if(guesses === 0) {
        console.log("yo dude why you so bad?");
        self.guessesRemaining -= 1;        
      } 
        else {
          console.log("Guesses remaining:"+ self.guessesRemaining);
          console.log(self.currentWrd.wordDisplay());
          
          else {
            if (self.guessesRemaining === 0){
              console.log("Game Over Bro"); 
              console.log("The word you were guessing was:"+self.randomWord);
            }

            }
          }
        }
      }
  }
}
