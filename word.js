var letter = require("./letters.js");

function Word(wrd){
    this.word = wrd;
    this.lets = [];

    this.getLetters = function(){
      for (var i=0; i <this.word.length; i++){
        var newLet = new letter(this.word[i]);
        this.lets.push(newLet);
      }
    }

    this.wordDisplay = function(){
      var str = "";
      for (var i=0; i <this.lets.length; i++){
        str += this.lets[i].letterAppear();
        console.log("test"+this.lets[i]);
        console.log("Display Word:"+str);
        return str;
      }
    }
}


module.exports = Word;